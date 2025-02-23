import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Teachers from "./pages/Teachers";
import AvgAttendance from "./pages/AvgAttendance";
import AvgGrades from "./pages/AvgGrades";
import TimeTable from "./pages/TimeTable";
import StudentTable from "./pages/StudentTable";
import ClassTimetable from "./pages/ClassTimetable";
import TeacherTimetable from "./pages/TeacherTimetable";
import TeacherTimetableDetail from "./pages/TeacherTimetableDetail";
import ClassTimetableDetail from "./pages/ClassTimetableDetail";
import StudentDisplay from "./components/StudentDisplay";

function App() {
  return (
    <Router>
      {/* If you do NOT want a sidebar, remove the flex container & Sidebar */}
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <Header />
          <div
            className="p-4 overflow-auto bg-gray-50"
            style={{ marginTop: "90px" }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/student-table/:stdId" element={<StudentTable />} />
              <Route path="/events" element={<Events />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/avgattendance" element={<AvgAttendance />} />
              <Route path="/avggrades" element={<AvgGrades />} />
              <Route path="/timetable" element={<TimeTable />} />
              <Route path="/classtimetable" element={<ClassTimetable />} />
              <Route path="/teachertimetable" element={<TeacherTimetable />} />
              <Route
                path="/teachertimetable/:teacherName"
                element={<TeacherTimetableDetail />}
              />
              <Route
                path="/classtimetable/:classId"
                element={<ClassTimetableDetail />}
              />
              <Route
                path="/student-display/:std/:division"
                element={<StudentDisplay />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
