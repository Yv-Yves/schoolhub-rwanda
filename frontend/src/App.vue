<template>
  <div id="app" class="app-background">
    <!-- Top Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom py-3 sticky-top shadow">
      <div class="container">
        <a class="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" href="#" @click.prevent="currentView = 'home'">
          <i class="bi bi-mortarboard-fill text-info fs-3"></i>
          <span>SchoolHub <span class="badge bg-primary fs-6">Rwanda</span></span>
        </a>
        <div class="ms-auto d-flex gap-2 align-items-center">
          <button v-if="currentView !== 'home'" class="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold" @click="currentView = 'home'">
            <i class="bi bi-house-door me-1"></i> Home Portal
          </button>
        </div>
      </div>
    </nav>

    <!-- ================== HOME LANDING PAGE ================== -->
    <div v-if="currentView === 'home'">
      <header class="hero-bg py-5">
        <div class="container py-4 text-center text-lg-start">
          <div class="row align-items-center gy-5">
            <div class="col-lg-7">
              <span class="badge bg-info text-dark px-3 py-2 rounded-pill fw-bold mb-3 d-inline-block shadow-sm">
                <i class="bi bi-stars me-1"></i> IMBERE N'IMBERE MU BWENGE • SHAPING FUTURE LEADERS
              </span>
              <h1 class="hero-title text-white mb-3 fw-extrabold display-5">
                Empower Every Rwandan Student for Excellence!
              </h1>
              <p class="lead opacity-90 text-white-50 mb-4 pe-lg-4" style="line-height: 1.7;">
                <em>"Kwiga ni Uguhiga"</em> — Synchronized role portals for Students, Parents, Teachers, Cashiers, Headmaster, and Headteacher (DOSI).
              </p>
            </div>

            <!-- Portal Switcher Card -->
            <div class="col-lg-5">
              <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
                <div class="d-flex align-items-center gap-2 mb-3">
                  <div class="icon-circle bg-info bg-opacity-20 text-info p-2 rounded-circle">
                    <i class="bi bi-shield-lock-fill fs-3"></i>
                  </div>
                  <div>
                    <h4 class="fw-bold mb-0 text-white">Select Your Portal</h4>
                    <small class="text-white-50">Choose your role to log in</small>
                  </div>
                </div>

                <div class="d-grid gap-2 mt-3">
                  <button class="btn btn-student-glow py-2 text-start d-flex align-items-center justify-content-between px-3 rounded-3 shadow-sm" @click="currentView = 'student-login'">
                    <div class="d-flex align-items-center gap-3">
                      <i class="bi bi-person-badge-fill fs-4 text-dark"></i>
                      <div>
                        <div class="fw-black text-dark fs-6">STUDENT PORTAL</div>
                        <small class="text-dark opacity-75 fw-semibold" style="font-size: 11px;">View marks &amp; report cards</small>
                      </div>
                    </div>
                    <i class="bi bi-arrow-right-circle-fill fs-4 text-dark"></i>
                  </button>

                  <button class="btn btn-parent-portal-glow py-2 text-start d-flex align-items-center justify-content-between px-3 rounded-3 shadow-sm text-dark" @click="currentView = 'parent-login'">
                    <div class="d-flex align-items-center gap-3">
                      <i class="bi bi-people-fill fs-4 text-dark"></i>
                      <div>
                        <div class="fw-black text-dark fs-6">PARENT PORTAL</div>
                        <small class="text-dark opacity-75 fw-semibold" style="font-size: 11px;">Track fees &amp; share comments</small>
                      </div>
                    </div>
                    <i class="bi bi-arrow-right-circle-fill fs-4 text-dark"></i>
                  </button>

                  <button class="btn btn-teacher-portal-glow py-2 text-start d-flex align-items-center justify-content-between px-3 rounded-3 shadow-sm text-dark" @click="currentView = 'teacher-login'">
                    <div class="d-flex align-items-center gap-3">
                      <i class="bi bi-journal-text fs-4 text-dark"></i>
                      <div>
                        <div class="fw-black text-dark fs-6">TEACHER PORTAL</div>
                        <small class="text-dark opacity-75 fw-semibold" style="font-size: 11px;">Manage student grades &amp; remarks</small>
                      </div>
                    </div>
                    <i class="bi bi-arrow-right-circle-fill fs-4 text-dark"></i>
                  </button>

                  <button class="btn btn-cashier-portal-glow py-2 text-start d-flex align-items-center justify-content-between px-3 rounded-3 shadow-sm text-dark" @click="currentView = 'cashier-login'">
                    <div class="d-flex align-items-center gap-3">
                      <i class="bi bi-cash-coin fs-4 text-dark"></i>
                      <div>
                        <div class="fw-black text-dark fs-6">CASHIER / BURSAR</div>
                        <small class="text-dark opacity-75 fw-semibold" style="font-size: 11px;">Update student fee payments</small>
                      </div>
                    </div>
                    <i class="bi bi-arrow-right-circle-fill fs-4 text-dark"></i>
                  </button>

                  <button class="btn btn-headmaster-portal-glow py-2 text-start d-flex align-items-center justify-content-between px-3 rounded-3 shadow-sm text-white" @click="currentView = 'headmaster-login'">
                    <div class="d-flex align-items-center gap-3">
                      <i class="bi bi-building-gear fs-4 text-white"></i>
                      <div>
                        <div class="fw-black text-white fs-6">HEADMASTER PORTAL</div>
                        <small class="text-white-50 fw-semibold" style="font-size: 11px;">Staff registration, notices &amp; feedback</small>
                      </div>
                    </div>
                    <i class="bi bi-arrow-right-circle-fill fs-4 text-white"></i>
                  </button>

                  <button class="btn btn-dosi-portal-glow py-2 text-start d-flex align-items-center justify-content-between px-3 rounded-3 shadow-sm text-white" @click="currentView = 'dosi-login'">
                    <div class="d-flex align-items-center gap-3">
                      <i class="bi bi-person-check-fill fs-4 text-white"></i>
                      <div>
                        <div class="fw-black text-white fs-6">HEADTEACHER (DOSI) PORTAL</div>
                        <small class="text-white-50 fw-semibold" style="font-size: 11px;">Student admission code creation</small>
                      </div>
                    </div>
                    <i class="bi bi-arrow-right-circle-fill fs-4 text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- ================== STUDENT LOGIN ================== -->
    <div v-if="currentView === 'student-login'" class="container py-5">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-5">
          <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
            <h3 class="fw-black text-white text-center mb-3">STUDENT PORTAL LOGIN</h3>
            <form @submit.prevent="handleStudentLogin">
              <div class="mb-3">
                <label class="form-label small text-info fw-bold">Admission Code (Demo: SHR-2026-8942)</label>
                <input type="text" v-model="studentLoginForm.admNo" class="form-control form-control-visible text-uppercase fw-bold" placeholder="SHR-2026-8942" required>
              </div>
              <button type="submit" class="btn btn-student-glow w-100 py-3 fw-black text-uppercase shadow">Log In</button>
            </form>
            <button class="btn btn-link text-white mt-3 text-decoration-none small text-center w-100 fw-bold" @click="currentView = 'home'">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== STUDENT DASHBOARD ================== -->
    <div v-if="currentView === 'student-dashboard' && activeStudent" class="container py-5">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <span class="badge bg-success px-3 py-1 rounded-pill mb-1 fw-bold">Student Portal Active</span>
          <h2 class="fw-bold text-dark m-0">Welcome, {{ activeStudent.full_name }}!</h2>
          <small class="text-muted">Code: <strong class="text-primary">{{ activeStudent.admission_number }}</strong> | Class: {{ activeStudent.class_name }}</small>
        </div>
        <div class="d-flex gap-2 mt-2 mt-md-0">
          <button class="btn btn-primary btn-sm rounded-pill px-3 shadow-sm fw-bold" @click="downloadPDFReport">
            <i class="bi bi-file-earmark-pdf-fill me-1"></i> Download Official Report Card (PDF)
          </button>
          <button class="btn btn-outline-danger btn-sm rounded-pill px-3" @click="currentView = 'student-login'">Sign Out</button>
        </div>
      </div>

      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="card card-custom p-4 border-start border-warning border-4 h-100 shadow-sm">
            <h5 class="fw-bold text-dark mb-3"><i class="bi bi-cash-stack text-warning me-2"></i> Cashier Fee Status (RWF)</h5>
            <div class="d-flex justify-content-between mb-1"><span>Total Tuition:</span> <strong>{{ activeStudent.total_fee }} RWF</strong></div>
            <div class="d-flex justify-content-between mb-1"><span>Paid Amount:</span> <strong class="text-success">{{ activeStudent.paid_fee }} RWF</strong></div>
            <div class="d-flex justify-content-between"><span>Remaining Balance:</span> <strong class="text-danger">{{ activeStudent.total_fee - activeStudent.paid_fee }} RWF</strong></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-custom p-4 border-start border-success border-4 h-100 shadow-sm">
            <h5 class="fw-bold text-dark mb-3"><i class="bi bi-calendar-check text-success me-2"></i> Attendance Overview</h5>
            <p class="mb-2 text-muted small">Total Recorded Sessions: <strong>{{ activeStudent.attendance?.length || 0 }}</strong></p>
          </div>
        </div>
      </div>

      <div class="card card-custom p-4 mb-4 border-start border-info border-5 shadow-sm bg-light">
        <h5 class="fw-bold text-dark d-flex align-items-center gap-2 mb-3">
          <i class="bi bi-megaphone-fill text-info fs-4"></i>
          <span>School Announcements &amp; Parent Community Feed</span>
        </h5>
        <div v-for="ann in announcements" :key="ann.id" class="p-3 bg-white rounded border mb-2 shadow-sm">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-bold text-primary"><i class="bi bi-pin-angle-fill me-1"></i> {{ ann.title }}</span>
            <span class="badge bg-secondary opacity-75">{{ ann.date }}</span>
          </div>
          <p class="mb-0 text-dark small">{{ ann.message }}</p>
          <div class="mt-1 text-muted" style="font-size: 11px;">By: <strong>{{ ann.author }}</strong></div>
        </div>
      </div>

      <div class="card card-custom p-4 mb-4 shadow-sm">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-journal-richtext text-primary me-2"></i> Published Subject Marks &amp; Teacher Remarks</h5>
        <div class="table-responsive">
          <table class="table table-hover align-middle small">
            <thead class="table-dark">
              <tr><th>Subject Name</th><th>Score</th><th>Grade</th><th>Teacher Remarks</th></tr>
            </thead>
            <tbody>
              <tr v-for="(m, idx) in (activeStudent.marks || [])" :key="idx">
                <td class="fw-bold">{{ m.subject }}</td>
                <td class="text-primary fw-bold">{{ m.score }} / 100</td>
                <td><span class="badge bg-success">{{ m.grade }}</span></td>
                <td class="text-muted">{{ m.remark || 'No remark added' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ================== PARENT LOGIN ================== -->
    <div v-if="currentView === 'parent-login'" class="container py-5">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-5">
          <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
            <h3 class="fw-black text-white text-center mb-3">PARENT PORTAL LOGIN</h3>
            <form @submit.prevent="handleParentLogin">
              <div class="mb-3">
                <label class="form-label small text-success fw-bold">Phone Number (Demo: 0788123456)</label>
                <input type="text" v-model="parentLoginForm.phone" class="form-control form-control-visible fw-bold" required>
              </div>
              <div class="mb-3">
                <label class="form-label small text-success fw-bold">Child Admission Code (Demo: SHR-2026-8942)</label>
                <input type="text" v-model="parentLoginForm.admNo" class="form-control form-control-visible text-uppercase fw-bold" required>
              </div>
              <button type="submit" class="btn btn-parent-portal-glow w-100 py-3 fw-black text-uppercase shadow text-dark">Log In</button>
            </form>
            <button class="btn btn-link text-white mt-3 text-decoration-none small text-center w-100 fw-bold" @click="currentView = 'home'">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== PARENT DASHBOARD ================== -->
    <div v-if="currentView === 'parent-dashboard' && activeStudent" class="container py-5">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <span class="badge bg-warning text-dark px-3 py-1 rounded-pill mb-1 fw-bold">Parent Portal Active</span>
          <h2 class="fw-bold text-dark m-0">Parent Monitoring: {{ activeStudent.full_name }}</h2>
          <small class="text-muted">Admission: <strong class="text-primary">{{ activeStudent.admission_number }}</strong> | Class: {{ activeStudent.class_name }}</small>
        </div>
        <div class="d-flex gap-2 mt-2 mt-md-0">
          <button class="btn btn-primary btn-sm rounded-pill px-3 shadow-sm fw-bold" @click="downloadPDFReport">
            <i class="bi bi-file-earmark-pdf-fill me-1"></i> Download Child's Report Card (PDF)
          </button>
          <button class="btn btn-outline-danger btn-sm rounded-pill px-3" @click="currentView = 'parent-login'">Sign Out</button>
        </div>
      </div>

      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="card card-custom p-4 border-start border-warning border-4 h-100 shadow-sm">
            <h5 class="fw-bold text-dark mb-3"><i class="bi bi-cash-stack text-warning me-2"></i> Cashier Fee Status (RWF)</h5>
            <div class="d-flex justify-content-between mb-1"><span>Total Tuition:</span> <strong>{{ activeStudent.total_fee }} RWF</strong></div>
            <div class="d-flex justify-content-between mb-1"><span>Paid Amount:</span> <strong class="text-success">{{ activeStudent.paid_fee }} RWF</strong></div>
            <div class="d-flex justify-content-between"><span>Remaining Balance:</span> <strong class="text-danger">{{ activeStudent.total_fee - activeStudent.paid_fee }} RWF</strong></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-custom p-4 border-start border-success border-4 h-100 shadow-sm">
            <h5 class="fw-bold text-dark mb-3"><i class="bi bi-calendar-check text-success me-2"></i> Attendance Overview</h5>
            <p class="mb-2 text-muted small">Total Recorded Sessions: <strong>{{ activeStudent.attendance?.length || 0 }}</strong></p>
          </div>
        </div>
      </div>

      <div class="card card-custom p-4 mb-4 shadow-sm border-start border-primary border-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-chat-quote-fill text-primary me-2"></i> Share Comment or Idea with the Entire School</h5>
        <form @submit.prevent="postParentComment">
          <div class="mb-3">
            <textarea v-model="newCommentText" class="form-control form-control-visible" rows="3" placeholder="Write your suggestion or comment for the school..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-sm fw-bold px-4">Publish Comment to All Portals</button>
        </form>
      </div>

      <div class="card card-custom p-4 mb-4 border-start border-info border-5 shadow-sm bg-light">
        <h5 class="fw-bold text-dark d-flex align-items-center gap-2 mb-3">
          <i class="bi bi-megaphone-fill text-info fs-4"></i>
          <span>Announcements &amp; Community Feed</span>
        </h5>
        <div v-for="ann in announcements" :key="ann.id" class="p-3 bg-white rounded border mb-2 shadow-sm">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-bold text-primary"><i class="bi bi-pin-angle-fill me-1"></i> {{ ann.title }}</span>
            <span class="badge bg-secondary opacity-75">{{ ann.date }}</span>
          </div>
          <p class="mb-0 text-dark small">{{ ann.message }}</p>
          <div class="mt-1 text-muted" style="font-size: 11px;">By: <strong>{{ ann.author }}</strong></div>
        </div>
      </div>
    </div>

    <!-- ================== TEACHER LOGIN ================== -->
    <div v-if="currentView === 'teacher-login'" class="container py-5">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-5">
          <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
            <h3 class="fw-black text-white text-center mb-3">TEACHER PORTAL LOGIN</h3>
            <form @submit.prevent="handleTeacherLogin">
              <div class="mb-3">
                <label class="form-label small text-warning fw-bold">Teacher Access Code</label>
                <input type="text" v-model="teacherLoginCode" class="form-control form-control-visible fw-bold" placeholder="TCH-2026-9481" required>
              </div>
              <button type="submit" class="btn btn-teacher-portal-glow w-100 py-3 fw-black text-uppercase shadow text-dark">Log In</button>
            </form>
            <button class="btn btn-link text-white mt-3 text-decoration-none small text-center w-100 fw-bold" @click="currentView = 'home'">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== TEACHER DASHBOARD ================== -->
    <div v-if="currentView === 'teacher-dashboard'" class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <span class="badge bg-info text-dark px-3 py-1 rounded-pill mb-1 fw-bold">Teacher Portal Active</span>
          <h2 class="fw-bold text-dark m-0">Student Performance &amp; Grade Management</h2>
        </div>
        <button class="btn btn-outline-danger btn-sm rounded-pill px-3" @click="currentView = 'teacher-login'">Sign Out</button>
      </div>
        <!-- Inside your Teacher Dashboard table -->
<div class="card card-custom p-4 shadow-sm mb-4">
  <h5 class="fw-bold mb-3 text-dark"><i class="bi bi-calendar-check text-success me-2"></i> Daily Student Attendance Tracker</h5>
  <div class="table-responsive">
    <table class="table table-hover align-middle small">
      <thead class="table-dark">
        <tr><th>Admission No</th><th>Student Name</th><th>Class</th><th>Attendance Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        <tr v-for="st in studentsList" :key="st.id">
          <td class="fw-bold text-primary">{{ st.admission_number }}</td>
          <td>{{ st.full_name }}</td>
          <td>{{ st.class_name }}</td>
          <td>
            <select v-model="st.attendanceStatus" class="form-select form-select-sm form-control-visible" style="width: 130px;">
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
            </select>
          </td>
          <td><button class="btn btn-primary btn-sm fw-bold px-3" @click="recordStudentAttendance(st)">Mark</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      <div class="card card-custom p-4 shadow-sm mb-4">
        <h5 class="fw-bold mb-3 text-dark"><i class="bi bi-table text-info me-2"></i> All Students Grade Roster</h5>
        <div class="table-responsive">
          <table class="table table-hover align-middle small">
            <thead class="table-dark">
              <tr><th>Admission No</th><th>Student Name</th><th>Class</th><th>Subject</th><th>Score</th><th>Grade</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr v-for="st in studentsList" :key="st.id">
                <td class="fw-bold text-primary">{{ st.admission_number }}</td>
                <td>{{ st.full_name }}</td>
                <td>{{ st.class_name }}</td>
                <td><input type="text" v-model="st.editSubject" class="form-control form-control-sm form-control-visible" placeholder="Subject"></td>
                <td><input type="number" v-model.number="st.editScore" class="form-control form-control-sm form-control-visible" style="width: 80px;" placeholder="Score"></td>
                <td><input type="text" v-model="st.editGrade" class="form-control form-control-sm form-control-visible" style="width: 60px;" placeholder="Grade"></td>
                <td><button class="btn btn-success btn-sm fw-bold" @click="updateStudentMark(st)">Save</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ================== CASHIER LOGIN ================== -->
    <div v-if="currentView === 'cashier-login'" class="container py-5">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-5">
          <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
            <h3 class="fw-black text-white text-center mb-3">CASHIER / BURSAR LOGIN</h3>
            <form @submit.prevent="handleCashierLogin">
              <div class="mb-3">
                <label class="form-label small text-success fw-bold">Cashier Code / Email</label>
                <input type="text" v-model="cashierLoginCode" class="form-control form-control-visible fw-bold" placeholder="CSH-2026-..." required>
              </div>
              <button type="submit" class="btn btn-cashier-portal-glow w-100 py-3 fw-black text-uppercase shadow text-dark">Log In</button>
            </form>
            <button class="btn btn-link text-white mt-3 text-decoration-none small text-center w-100 fw-bold" @click="currentView = 'home'">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== CASHIER DASHBOARD ================== -->
    <div v-if="currentView === 'cashier-dashboard'" class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <span class="badge bg-success px-3 py-1 rounded-pill mb-1 fw-bold">Cashier Portal Active</span>
          <h2 class="fw-bold text-dark m-0">Fee Ledger &amp; Payment Management</h2>
        </div>
        <button class="btn btn-outline-danger btn-sm rounded-pill px-3" @click="currentView = 'cashier-login'">Sign Out</button>
      </div>

      <div class="card card-custom p-4 shadow-sm mb-4 border-start border-success border-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-cash-coin text-success me-2"></i> Record Student Tuition Payment</h5>
        <form @submit.prevent="updateStudentFee">
          <div class="row g-2">
            <div class="col-md-6">
              <label class="form-label small fw-bold">Select Student</label>
              <select v-model="feeForm.studentId" class="form-select form-select-sm form-control-visible" required>
                <option v-for="st in studentsList" :key="st.id" :value="st.id">{{ st.full_name }} ({{ st.admission_number }})</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label small fw-bold">Amount Paid (RWF)</label>
              <input type="number" v-model.number="feeForm.amountPaid" class="form-control form-control-sm form-control-visible" placeholder="Enter new paid amount" required>
            </div>
          </div>
          <button type="submit" class="btn btn-success btn-sm fw-bold px-4 mt-3">Update Fee Record Live</button>
        </form>
      </div>

      <div class="card card-custom p-4 shadow-sm mb-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-list-check text-success me-2"></i> All Students Fee Status</h5>
        <div class="table-responsive">
          <table class="table table-hover align-middle small">
            <thead class="table-dark">
              <tr><th>Admission No</th><th>Student Name</th><th>Class</th><th>Total Fee (RWF)</th><th>Paid Fee (RWF)</th><th>Balance (RWF)</th></tr>
            </thead>
            <tbody>
              <tr v-for="st in studentsList" :key="st.id">
                <td class="fw-bold text-primary">{{ st.admission_number }}</td>
                <td>{{ st.full_name }}</td>
                <td>{{ st.class_name }}</td>
                <td><strong>{{ st.total_fee }}</strong></td>
                <td><strong class="text-success">{{ st.paid_fee }}</strong></td>
                <td><strong class="text-danger">{{ st.total_fee - st.paid_fee }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ================== HEADMASTER LOGIN ================== -->
    <div v-if="currentView === 'headmaster-login'" class="container py-5">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-5">
          <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
            <h3 class="fw-black text-white text-center mb-3">HEADMASTER PORTAL</h3>
            <form @submit.prevent="handleHeadmasterLogin">
              <div class="mb-3">
                <label class="form-label small text-danger fw-bold">Headmaster Access Code</label>
                <input type="text" v-model="headmasterLoginCode" class="form-control form-control-visible fw-bold" placeholder="HM-2026-..." required>
              </div>
              <button type="submit" class="btn btn-headmaster-portal-glow w-100 py-3 fw-black text-uppercase shadow text-white">Log In</button>
            </form>
            <button class="btn btn-link text-white mt-3 text-decoration-none small text-center w-100 fw-bold" @click="currentView = 'home'">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== HEADMASTER DASHBOARD ================== -->
    <div v-if="currentView === 'headmaster-dashboard'" class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <span class="badge bg-danger px-3 py-1 rounded-pill mb-1 fw-bold">Headmaster Hub Active</span>
          <h2 class="fw-bold text-dark m-0">Staff Code Creation &amp; Announcements</h2>
        </div>
        <button class="btn btn-outline-danger btn-sm rounded-pill px-3" @click="currentView = 'headmaster-login'">Sign Out</button>
      </div>

      <!-- 1. Headmaster creates staff codes -->
      <div class="card card-custom p-4 shadow-sm mb-4 border-start border-danger border-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-shield-lock-fill text-danger me-2"></i> Register Staff &amp; Generate Access Codes</h5>
        <form @submit.prevent="registerStaffByHeadmaster">
          <div class="row g-2">
            <div class="col-md-4">
              <label class="form-label small fw-bold">Staff Name</label>
              <input type="text" v-model="staffForm.name" class="form-control form-control-sm form-control-visible" placeholder="e.g. Jean Pierre" required>
            </div>
            <div class="col-md-4">
              <label class="form-label small fw-bold">Role</label>
              <select v-model="staffForm.role" class="form-select form-select-sm form-control-visible" required>
                <option value="Headteacher (DOSI)">Headteacher (DOSI)</option>
                <option value="Cashier">Cashier</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label small fw-bold">Generated Access Code</label>
              <input type="text" v-model="staffForm.code" class="form-control form-control-sm form-control-visible text-uppercase" placeholder="e.g. DOSI-2026-01" required>
            </div>
          </div>
          <button type="submit" class="btn btn-danger btn-sm fw-bold px-4 mt-3 text-white">Create &amp; Save Staff Code</button>
        </form>
      </div>

      <!-- 2. Staff Codes Directory -->
      <div class="card card-custom p-4 shadow-sm mb-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-people-fill text-danger me-2"></i> Active Staff &amp; Access Codes Directory</h5>
        <div class="table-responsive">
          <table class="table table-hover align-middle small">
            <thead class="table-dark">
              <tr><th>Staff Name</th><th>Role</th><th>Access Code</th></tr>
            </thead>
            <tbody>
              <tr v-for="(sf, idx) in staffList" :key="idx">
                <td class="fw-bold">{{ sf.name }}</td>
                <td><span class="badge bg-secondary">{{ sf.role }}</span></td>
                <td class="text-danger fw-bold"><code>{{ sf.code }}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3. Post Announcement Form -->
      <div class="card card-custom p-4 shadow-sm mb-4 border-start border-info border-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-megaphone-fill text-info me-2"></i> Post School Announcement</h5>
        <form @submit.prevent="postAnnouncement">
          <div class="mb-2"><input type="text" v-model="announcementForm.title" class="form-control form-control-sm form-control-visible" placeholder="Announcement Title" required></div>
          <div class="mb-3"><textarea v-model="announcementForm.message" class="form-control form-control-sm form-control-visible" rows="3" placeholder="Announcement message details..." required></textarea></div>
          <button type="submit" class="btn btn-info btn-sm fw-bold px-4 text-white">Broadcast Notice to All Portals</button>
        </form>
      </div>

      <!-- 4. Parent Feedback Feed -->
      <div class="card card-custom p-4 shadow-sm bg-light mb-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-chat-left-quote-fill text-danger me-2"></i> Parent Comments &amp; Feedback Feed</h5>
        <div v-for="ann in announcements.filter(a => a.title.includes('Parent'))" :key="ann.id" class="p-3 bg-white rounded border mb-2 shadow-sm">
          <div class="fw-bold text-danger">{{ ann.title }}</div>
          <p class="mb-0 text-dark small">{{ ann.message }}</p>
          <div class="mt-1 text-muted" style="font-size: 11px;">By: <strong>{{ ann.author }}</strong></div>
        </div>
        <div v-if="announcements.filter(a => a.title.includes('Parent')).length === 0" class="text-muted small">No parent comments shared yet.</div>
      </div>
    </div>

    <!-- ================== HEADTEACHER (DOSI) LOGIN ================== -->
    <div v-if="currentView === 'dosi-login'" class="container py-5">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-5">
          <div class="card login-card-dark p-4 p-md-5 shadow-2xl border-0">
            <h3 class="fw-black text-white text-center mb-3">HEADTEACHER (DOSI) LOGIN</h3>
            <form @submit.prevent="handleDosiLogin">
              <div class="mb-3">
                <label class="form-label small text-info fw-bold">DOSI Access Code (Demo: DOSI-2026-01)</label>
                <input type="text" v-model="dosiLoginCode" class="form-control form-control-visible fw-bold text-uppercase" placeholder="DOSI-2026-01" required>
              </div>
              <button type="submit" class="btn btn-dosi-portal-glow w-100 py-3 fw-black text-uppercase shadow text-white">Log In</button>
            </form>
            <button class="btn btn-link text-white mt-3 text-decoration-none small text-center w-100 fw-bold" @click="currentView = 'home'">← Back to Home</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== HEADTEACHER (DOSI) DASHBOARD ================== -->
    <div v-if="currentView === 'dosi-dashboard'" class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <span class="badge bg-secondary text-white px-3 py-1 rounded-pill mb-1 fw-bold">Headteacher (DOSI) Hub Active</span>
          <h2 class="fw-bold text-dark m-0">Student Registration &amp; Admission Code Creator</h2>
        </div>
        <button class="btn btn-outline-danger btn-sm rounded-pill px-3" @click="currentView = 'dosi-login'">Sign Out</button>
      </div>

      <!-- DOSI creates student admission codes -->
      <div class="card card-custom p-4 shadow-sm mb-4 border-start border-secondary border-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-person-plus-fill text-secondary me-2"></i> Register New Student &amp; Create Admission Code</h5>
        <form @submit.prevent="registerNewStudentByDosi">
          <div class="row g-2">
            <div class="col-md-3">
              <label class="form-label small fw-bold">Full Name</label>
              <input type="text" v-model="studentForm.fullName" class="form-control form-control-sm form-control-visible" placeholder="e.g. Jean Bosco" required>
            </div>
            <div class="col-md-3">
              <label class="form-label small fw-bold">Class / Stream</label>
              <input type="text" v-model="studentForm.className" class="form-control form-control-sm form-control-visible" placeholder="e.g. Senior 4 MCB" required>
            </div>
            <div class="col-md-3">
              <label class="form-label small fw-bold">Create Admission Code</label>
              <input type="text" v-model="studentForm.admissionNumber" class="form-control form-control-sm form-control-visible text-uppercase" placeholder="e.g. SHR-2026-9999" required>
            </div>
            <div class="col-md-3">
              <label class="form-label small fw-bold">Total Tuition (RWF)</label>
              <input type="number" v-model.number="studentForm.totalFee" class="form-control form-control-sm form-control-visible" placeholder="150000" required>
            </div>
          </div>
          <button type="submit" class="btn btn-secondary btn-sm fw-bold px-4 mt-3 text-white">Save Student &amp; Assign Code</button>
        </form>
      </div>

      <div class="card card-custom p-4 shadow-sm mb-4">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-people-fill text-secondary me-2"></i> All School Students &amp; Admission Codes</h5>
        <div class="table-responsive">
          <table class="table table-hover align-middle small">
            <thead class="table-dark">
              <tr><th>Admission Code</th><th>Student Name</th><th>Class</th><th>Total Fee (RWF)</th></tr>
            </thead>
            <tbody>
              <tr v-for="st in studentsList" :key="st.id">
                <td class="fw-bold text-primary">{{ st.admission_number }}</td>
                <td>{{ st.full_name }}</td>
                <td>{{ st.class_name }}</td>
                <td><strong>{{ st.total_fee }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card card-custom p-4 shadow-sm bg-light">
        <h5 class="fw-bold text-dark mb-3"><i class="bi bi-megaphone-fill text-info me-2"></i> School Announcements</h5>
        <div v-for="ann in announcements" :key="ann.id" class="p-3 bg-white rounded border mb-2 shadow-sm">
          <div class="fw-bold text-primary">{{ ann.title }}</div>
          <p class="mb-0 text-dark small">{{ ann.message }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { jsPDF } from 'jspdf';

export default {
  name: 'App',
  data() {
    return {
      currentView: 'home',
      apiUrl: 'http://localhost:5000/api',
      studentLoginForm: { admNo: 'SHR-2026-8942' },
      parentLoginForm: { phone: '0788123456', admNo: 'SHR-2026-8942' },
      teacherLoginCode: 'TCH-2026-9481',
      cashierLoginCode: 'CSH-2026-01',
      headmasterLoginCode: 'HM-2026-01',
      dosiLoginCode: 'DOSI-2026-01',
      activeStudent: null,
      announcements: [
        { id: 1, title: 'Term 1 Examinations Schedule', message: 'Exams start next Monday morning at 8:00 AM sharp.', author: 'Headmaster Office', date: '2026-10-24' }
      ],
      staffList: [
        { name: 'Dr. Kabagema', role: 'Headteacher (DOSI)', code: 'DOSI-2026-01' },
        { name: 'Mutesi Claire', role: 'Cashier', code: 'CSH-2026-01' }
      ],
      studentsList: [
        { id: 1, admission_number: 'SHR-2026-8942', full_name: 'Eric Mugisha', class_name: 'Senior 5 Pure Sciences', total_fee: 150000, paid_fee: 100000, editSubject: 'Advanced Mathematics', editScore: 92, editGrade: 'A' }
      ],
      feeForm: { studentId: 1, amountPaid: 0, bankRef: '' },
      studentForm: { fullName: '', className: '', admissionNumber: 'SHR-2026-', totalFee: 150000 },
      staffForm: { name: '', role: 'Headteacher (DOSI)', code: '' },
      announcementForm: { title: '', message: '' },
      newCommentText: ''
    };
  },
  methods: {
    async recordStudentAttendance(st) {
  try {
    const payload = {
      student_id: st.id,
      status: st.attendanceStatus || 'Present',
      date: new Date().toISOString().slice(0, 10)
    };
    const res = await fetch(`${this.apiUrl}/attendance/record`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      alert(`Attendance marked as '${payload.status}' for ${st.full_name}!`);
    } else {
      alert('Failed to record attendance.');
    }
  } catch (err) {
    alert('Server connection error while saving attendance.');
  }
},
    async registerStaffByHeadmaster() {
      if (this.staffForm.name && this.staffForm.code) {
        try {
          const res = await fetch(`${this.apiUrl}/staff/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              school_id: 1,
              name: this.staffForm.name,
              role: this.staffForm.role,
              code: this.staffForm.code.toUpperCase()
            })
          });
          const data = await res.json();
          if (data.success) {
            this.staffList.push({ ...this.staffForm });
            alert(`Staff member ${this.staffForm.name} saved to MySQL database with code: ${this.staffForm.code}`);
            this.staffForm.name = '';
            this.staffForm.code = '';
          } else {
            alert(data.error || 'Failed to register staff.');
          }
        } catch (err) {
          alert('Server connection error. Stored locally.');
          this.staffList.push({ ...this.staffForm });
        }
      }
    },

    async registerNewStudentByDosi() {
      if (this.studentForm.admissionNumber && this.studentForm.fullName) {
        try {
          const payload = {
            school_id: 1,
            admission_number: this.studentForm.admissionNumber.toUpperCase(),
            full_name: this.studentForm.fullName,
            class_name: this.studentForm.className,
            parent_phone: this.studentForm.parentPhone || '0788000000',
            total_fee: this.studentForm.totalFee
          };
          const res = await fetch(`${this.apiUrl}/dosi/students/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (data.success) {
            this.studentsList.push({
              id: data.studentId,
              admission_number: payload.admission_number,
              full_name: payload.full_name,
              class_name: payload.class_name,
              total_fee: payload.total_fee,
              paid_fee: 0
            });
            alert(`Student ${payload.full_name} registered in MySQL with code: ${payload.admission_number}`);
            this.studentForm.fullName = '';
            this.studentForm.className = '';
            this.studentForm.admissionNumber = 'SHR-2026-';
          } else {
            alert(data.error || 'Failed to register student.');
          }
        } catch (err) {
          alert('Server error connecting to MySQL.');
        }
      }
    },
    async handleStudentLogin() {
      try {
        const res = await fetch(`${this.apiUrl}/students/${this.studentLoginForm.admNo}`);
        const data = await res.json();
        if (data.success) {
          this.activeStudent = data.student;
          this.currentView = 'student-dashboard';
        } else {
          alert('Student not found in database!');
        }
      } catch (err) {
        alert('Server connection error. Make sure node server.js is running.');
      }
    },

    async handleParentLogin() {
      try {
        const res = await fetch(`${this.apiUrl}/students/${this.parentLoginForm.admNo}`);
        const data = await res.json();
        if (data.success && data.student.parent_phone === this.parentLoginForm.phone) {
          this.activeStudent = data.student;
          this.currentView = 'parent-dashboard';
        } else {
          alert('Invalid phone number or admission code.');
        }
      } catch (err) {
        alert('Server connection error.');
      }
    },

    handleTeacherLogin() {
      if (this.teacherLoginCode) {
        this.currentView = 'teacher-dashboard';
      }
    },

    async handleCashierLogin() {
  if (!this.cashierLoginCode) {
    alert('Please enter your Cashier Access Code.');
    return;
  }

  try {
    const res = await fetch(`${this.apiUrl}/staff/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: this.cashierLoginCode.trim(),
        expectedRole: 'Cashier'
      })
    });

    const data = await res.json();

    if (data.success) {
      this.authToken = data.token;
      this.currentView = 'cashier-dashboard';
      this.fetchCashierStudents();
    } else {
      alert(data.message || 'Invalid Cashier access code.');
    }
  } catch (err) {
    alert('Server connection error. Please make sure node server.js is running.');
  }
},
    async fetchCashierStudents() {
      try {
        const res = await fetch(`${this.apiUrl}/cashier/students/1`);
        const data = await res.json();
        if (data.success) {
          this.studentsList = data.students;
        }
      } catch (err) {
        console.log('Using local student list fallback.');
      }
    },

    async updateStudentFeeLive() {
      try {
        const payload = {
          student_id: this.feeForm.studentId,
          amount_paid: this.feeForm.amountPaid,
          bank_reference: this.feeForm.bankRef || 'BK-RCV-2026',
          payment_method: 'Bank Deposit / SACCO'
        };
        const res = await fetch(`${this.apiUrl}/cashier/payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          alert(`Payment of ${this.feeForm.amountPaid} RWF successfully recorded! New Balance: ${data.remaining_balance} RWF`);
          this.feeForm.amountPaid = 0;
          this.feeForm.bankRef = '';
          this.fetchCashierStudents();
        } else {
          alert(data.message);
        }
      } catch (err) {
        const st = this.studentsList.find(s => s.id === this.feeForm.studentId);
        if (st) {
          st.paid_fee = (st.paid_fee || 0) + this.feeForm.amountPaid;
          alert(`Local fee payment updated for ${st.full_name}.`);
          this.feeForm.amountPaid = 0;
        }
      }
    },

    handleHeadmasterLogin() {
      if (this.headmasterLoginCode) {
        this.currentView = 'headmaster-dashboard';
      }
    },

    handleDosiLogin() {
      if (this.dosiLoginCode) {
        this.currentView = 'dosi-dashboard';
      }
    },

    registerStaffByHeadmaster() {
      if (this.staffForm.name && this.staffForm.code) {
        this.staffList.push({ ...this.staffForm });
        alert(`Staff member ${this.staffForm.name} registered successfully with code: ${this.staffForm.code}`);
        this.staffForm.name = '';
        this.staffForm.code = '';
      }
    },

    registerNewStudentByDosi() {
      if (this.studentForm.admissionNumber && this.studentForm.fullName) {
        const newSt = {
          id: this.studentsList.length + 1,
          admission_number: this.studentForm.admissionNumber.toUpperCase(),
          full_name: this.studentForm.fullName,
          class_name: this.studentForm.className,
          total_fee: this.studentForm.totalFee,
          paid_fee: 0,
          editSubject: 'General',
          editScore: 0,
          editGrade: '-'
        };
        this.studentsList.push(newSt);
        alert(`Student ${newSt.full_name} registered successfully with admission code: ${newSt.admission_number}`);
        this.studentForm.fullName = '';
        this.studentForm.className = '';
        this.studentForm.admissionNumber = 'SHR-2026-';
      }
    },

    async updateStudentMark(st) {
      try {
        const payload = {
          student_id: st.id,
          subject: st.editSubject || 'General',
          score: st.editScore || 0,
          grade: st.editGrade || 'Pass',
          remark: 'Updated via Teacher Portal'
        };
        const res = await fetch(`${this.apiUrl}/marks/publish`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          alert(`Marks for ${st.full_name} successfully updated live!`);
        }
      } catch (err) {
        alert('Failed to update student mark.');
      }
    },

    postAnnouncement() {
      if (this.announcementForm.title && this.announcementForm.message) {
        this.announcements.unshift({
          id: Date.now(),
          title: this.announcementForm.title,
          message: this.announcementForm.message,
          author: 'Headmaster Office',
          date: new Date().toISOString().slice(0, 10)
        });
        this.announcementForm.title = '';
        this.announcementForm.message = '';
        alert('Announcement broadcasted to all portals successfully!');
      }
    },

    postParentComment() {
      if (this.newCommentText) {
        this.announcements.unshift({
          id: Date.now(),
          title: `Parent Feedback / Comment`,
          message: this.newCommentText,
          author: `Parent of ${this.activeStudent ? this.activeStudent.full_name : 'Student'}`,
          date: new Date().toISOString().slice(0, 10)
        });
        this.newCommentText = '';
        alert('Comment posted and shared with Headmaster and all portals!');
      }
    },

    downloadPDFReport() {
      const doc = new jsPDF();
      const st = this.activeStudent;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(20, 43, 74);
      doc.text("REPUBLIC OF RWANDA", 105, 15, { align: "center" });
      doc.setFontSize(14);
      doc.text("MINISTRY OF EDUCATION", 105, 22, { align: "center" });
      doc.setFontSize(16);
      doc.setTextColor(30, 58, 138);
      doc.text("GROUPE SCOLAIRE KIGALI — SCHOOLHUB RWANDA", 105, 32, { align: "center" });

      doc.setLineWidth(0.5);
      doc.line(20, 38, 190, 38);

      doc.setFontSize(11);
      doc.setTextColor(50, 50, 50);
      doc.text(`Student Name: ${st.full_name}`, 20, 48);
      doc.text(`Admission Number: ${st.admission_number}`, 20, 55);
      doc.text(`Class / Stream: ${st.class_name}`, 20, 62);
      doc.text(`Academic Term: Term 1, 2026`, 130, 55);

      doc.setFillColor(30, 58, 138);
      doc.rect(20, 70, 170, 10, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.text("Subject Name", 25, 77);
      doc.text("Score / 100", 110, 77);
      doc.text("Grade", 145, 77);
      doc.text("Remark", 168, 77);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(30, 30, 30);
      let startY = 88;

      if (st.marks && st.marks.length > 0) {
        st.marks.forEach((m) => {
          doc.text(m.subject, 25, startY);
          doc.text(`${m.score}`, 110, startY);
          doc.text(m.grade, 145, startY);
          doc.text(m.remark || "-", 168, startY);
          startY += 10;
        });
      } else {
        doc.text("No published marks available yet.", 25, startY);
        startY += 10;
      }

      startY += 15;
      doc.line(20, startY, 190, startY);
      startY += 10;
      doc.text("Headmaster Signature & Stamp:", 20, startY);
      doc.text("DOSI Signature:", 130, startY);

      doc.save(`ReportCard_${st.admission_number}.pdf`);
    }
  }
};
</script>

<style>
.app-background {
  background-color: #f4f7f6;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.navbar-custom {
  background: linear-gradient(135deg, #0d3b66 0%, #001e3d 100%);
}
.hero-bg {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
}
.login-card-dark {
  background: #0f172a !important;
  color: #ffffff !important;
  border-radius: 1rem;
  border: 1px solid #334155 !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}
.form-control-visible {
  background-color: #ffffff !important;
  color: #0f172a !important;
  border: 2px solid #38bdf8 !important;
  font-weight: 700 !important;
}
.form-control-visible::placeholder {
  color: #64748b !important;
  opacity: 1;
}
.form-control-visible:focus {
  background-color: #ffffff !important;
  color: #0f172a !important;
  border-color: #7dd3fc !important;
  box-shadow: 0 0 0 0.25rem rgba(56, 189, 248, 0.4) !important;
}
.btn-student-glow {
  background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
  color: #0f172a;
  border: none;
  transition: all 0.3s ease;
}
.btn-parent-portal-glow {
  background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
  border: none;
  transition: all 0.3s ease;
}
.btn-teacher-portal-glow {
  background: linear-gradient(135deg, #facc15 0%, #ca8a04 100%);
  border: none;
  transition: all 0.3s ease;
}
.btn-cashier-portal-glow {
  background: linear-gradient(135deg, #34d399 0%, #059669 100%);
  border: none;
  transition: all 0.3s ease;
}
.btn-headmaster-portal-glow {
  background: linear-gradient(135deg, #fb7185 0%, #e11d48 100%);
  border: none;
  transition: all 0.3s ease;
  color: #fff !important;
}
.btn-dosi-portal-glow {
  background: linear-gradient(135deg, #64748b 0%, #334155 100%);
  border: none;
  transition: all 0.3s ease;
  color: #fff !important;
}
.card-custom {
  background: #ffffff;
  border-radius: 0.75rem;
  border: none;
}
</style>