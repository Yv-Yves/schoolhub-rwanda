const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'schoolhub_rwanda_secret_key_2026';

// MySQL Database Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'schoolhub_rwanda',
    waitForConnections: true,
    connectionLimit: 10
});

// ==========================
// 1. ANNOUNCEMENTS API
// ==========================
app.get('/api/announcements', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM announcements ORDER BY id DESC');
        res.json({ success: true, announcements: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/api/announcements', async (req, res) => {
    try {
        const { title, content, target } = req.body;
        await pool.execute('INSERT INTO announcements (title, content, target) VALUES (?, ?, ?)', [title, content, target || 'All']);
        res.json({ success: true, message: 'Announcement posted successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.delete('/api/announcements/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.execute('DELETE FROM announcements WHERE id = ?', [id]);
        res.json({ success: true, message: 'Announcement deleted successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ==========================
// 2. STUDENTS & FEES API
// ==========================
app.get('/api/students/school/:school_id', async (req, res) => {
    try {
        const { school_id } = req.params;
        const [students] = await pool.execute('SELECT * FROM students WHERE school_id = ?', [school_id]);
        res.json({ success: true, students });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/api/dosi/students/register', async (req, res) => {
    try {
        const { school_id, admission_number, full_name, class_name, parent_phone, total_fee } = req.body;
        const [result] = await pool.execute(
            'INSERT INTO students (school_id, admission_number, full_name, class_name, parent_phone, total_fee, paid_fee) VALUES (?, ?, ?, ?, ?, ?, 0)',
            [school_id || 1, admission_number.toUpperCase(), full_name, class_name, parent_phone || '0788000000', total_fee || 150000]
        );
        res.status(201).json({ success: true, studentId: result.insertId, admission_number, message: 'Student registered successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.get('/api/students/:admNo', async (req, res) => {
    try {
        const { admNo } = req.params;
        const [students] = await pool.execute('SELECT * FROM students WHERE admission_number = ?', [admNo.toUpperCase().trim()]);
        if (students.length === 0) {
            return res.status(404).json({ success: false, message: 'Student not found.' });
        }
        const student = students[0];

        const [attendance] = await pool.execute('SELECT * FROM attendance WHERE student_id = ? ORDER BY date DESC', [student.id]);
        const [marks] = await pool.execute('SELECT * FROM marks WHERE student_id = ?', [student.id]);
        
        student.attendance = attendance || [];
        student.marks = marks || [];

        res.json({ success: true, student });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ==========================
// 3. CASHIER & PAYMENTS API
// ==========================
app.get('/api/cashier/students/:school_id', async (req, res) => {
    try {
        const { school_id } = req.params;
        const [students] = await pool.execute('SELECT id, admission_number, full_name, class_name, total_fee, paid_fee FROM students WHERE school_id = ?', [school_id]);
        res.json({ success: true, students: students || [] });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ success: false, message: 'No token provided.' });
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ success: false, message: 'Token authentication failed.' });
        req.user = decoded;
        next();
    });
};

app.post('/api/cashier/payment', verifyToken, async (req, res) => {
    try {
        const { student_id, amount_paid, bank_reference } = req.body;
        const [rows] = await pool.execute('SELECT paid_fee, total_fee FROM students WHERE id = ?', [student_id]);
        if (rows.length === 0) return res.status(404).json({ success: false, message: 'Student not found.' });

        const currentPaid = Number(rows[0].paid_fee || 0);
        const newPaidFee = currentPaid + Number(amount_paid);

        await pool.execute('UPDATE students SET paid_fee = ? WHERE id = ?', [newPaidFee, student_id]);

        res.json({ 
            success: true, 
            message: 'Payment published and recorded successfully!', 
            new_paid_fee: newPaidFee,
            remaining_balance: rows[0].total_fee - newPaidFee,
            bank_reference: bank_reference || 'BK-REF-2026'
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ==========================
// 4. STAFF LOGIN & ATTENDANCE & MARKS API
// ==========================
app.post('/api/staff/login', async (req, res) => {
    try {
        const { code, expectedRole } = req.body;
        if (!code || !expectedRole) {
            return res.status(400).json({ success: false, message: 'Code and expectedRole are required.' });
        }

        const [staffMembers] = await pool.execute('SELECT * FROM staff WHERE code = ? AND role = ?', [code.trim(), expectedRole.trim()]);
        if (staffMembers.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid access code or role.' });
        }

        const staff = staffMembers[0];
        const token = jwt.sign({ id: staff.id, role: staff.role, name: staff.name }, JWT_SECRET, { expiresIn: '8h' });
        res.json({ success: true, token, staff, message: 'Login successful!' });
    } catch (err) {
        console.error('--> STAFF LOGIN SQL ERROR:', err.message); // <-- THIS PRINTS THE EXACT ERROR
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/api/attendance/record', async (req, res) => {
    try {
        const { student_id, status, date } = req.body;
        await pool.execute('INSERT INTO attendance (student_id, status, date) VALUES (?, ?, ?)', [student_id, status || 'Present', date || new Date().toISOString().slice(0, 10)]);
        res.json({ success: true, message: 'Attendance recorded successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/api/marks/publish', async (req, res) => {
    try {
        const { student_id, subject, score, grade, remark } = req.body;
        const [existing] = await pool.execute('SELECT id FROM marks WHERE student_id = ? AND subject = ?', [student_id, subject]);
        if (existing.length > 0) {
            await pool.execute('UPDATE marks SET score = ?, grade = ?, remark = ? WHERE id = ?', [score, grade, remark, existing[0].id]);
        } else {
            await pool.execute('INSERT INTO marks (student_id, subject, score, grade, remark) VALUES (?, ?, ?, ?, ?)', [student_id, subject, score, grade, remark]);
        }
        res.json({ success: true, message: 'Marks published live!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ==========================
// SERVER LISTEN INITIALIZATION
// ==========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SchoolHub Rwanda backend server running on port ${PORT}`);
});