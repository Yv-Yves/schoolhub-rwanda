const mysql = require('mysql2/promise');
require('dotenv').config();

async function seedDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || ''
        });

        console.log('Connecting to MySQL server...');
        await connection.query(`CREATE DATABASE IF NOT EXISTS schoolhub_rwanda`);
        console.log("Database 'schoolhub_rwanda' verified/created.");
        await connection.end();

        const pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'schoolhub_rwanda',
            waitForConnections: true,
            connectionLimit: 10
        });

        console.log('Verifying & creating all database tables...');

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS staff (
                id INT AUTO_INCREMENT PRIMARY KEY,
                school_id INT DEFAULT 1,
                name VARCHAR(100) NOT NULL,
                role VARCHAR(50) NOT NULL,
                code VARCHAR(50) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS students (
                id INT AUTO_INCREMENT PRIMARY KEY,
                school_id INT DEFAULT 1,
                admission_number VARCHAR(50) UNIQUE NOT NULL,
                full_name VARCHAR(100) NOT NULL,
                class_name VARCHAR(50) NOT NULL,
                parent_phone VARCHAR(20) DEFAULT '0788000000',
                total_fee DECIMAL(10,2) DEFAULT 150000.00,
                paid_fee DECIMAL(10,2) DEFAULT 0.00,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS attendance (
                id INT AUTO_INCREMENT PRIMARY KEY,
                student_id INT NOT NULL,
                status VARCHAR(20) NOT NULL DEFAULT 'Present',
                date DATE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS marks (
                id INT AUTO_INCREMENT PRIMARY KEY,
                student_id INT NOT NULL,
                subject VARCHAR(50) NOT NULL,
                score INT NOT NULL,
                grade VARCHAR(5) NOT NULL,
                remark VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS announcements (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                content TEXT NOT NULL,
                target VARCHAR(50) DEFAULT 'All',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('Inserting default seed records...');

        const defaultStaff = [
            ['Dr. Kabagema', 'Headteacher (DOSI)', 'DOSI-2026-01'],
            ['Mutesi Claire', 'Cashier', 'CSH-2026-01'],
            ['Jean Pierre', 'Teacher', 'TCH-2026-9481'],
            ['Headmaster Office', 'Headmaster', 'HM-2026-01']
        ];

        for (const staff of defaultStaff) {
            try {
                await pool.execute(
                    `INSERT IGNORE INTO staff (name, role, code) VALUES (?, ?, ?)`,
                    staff
                );
            } catch (e) { /* ignore existing */ }
        }

        try {
            await pool.execute(`
                INSERT IGNORE INTO students (id, school_id, admission_number, full_name, class_name, parent_phone, total_fee, paid_fee) 
                VALUES (1, 1, 'SHR-2026-8942', 'Eric Mugisha', 'Senior 5 Pure Sciences', '0788123456', 150000.00, 100000.00)
            `);
        } catch (e) { /* ignore existing */ }

        console.log('Database seeding completed successfully! 🚀');
        process.exit(0);
    } catch (err) {
        console.error('Database seeding failed:', err.message);
        process.exit(1);
    }
}

seedDatabase();