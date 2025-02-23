import React from "react";
import CollapsiblePanel from "../components/CollapsablePanel";
import "../css/Dashboard.css"; // Import the custom CSS file
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Top row of boxes: 3 columns */}
      <div className="dashboard">
        <div className="dashboard-grid-3">
          <Link to="./students">
            <div className="dashboard-box">
              <div className="dashboard-number">5000</div>
              <div className="dashboard-label">Total Students</div>
            </div>
          </Link>
          <Link to="./teachers">
            <div className="dashboard-box">
              <div className="dashboard-number">100</div>
              <div className="dashboard-label">Total Teachers</div>
            </div>
          </Link>
          <Link to={"./timetable"}>
            <div className="dashboard-box">
              <div className="dashboard-number">TimeTables</div>
              <div className="dashboard-label">View Timetables</div>
            </div>
          </Link>
        </div>

        {/* Second row of boxes: 2 columns */}
        <div className="dashboard-grid-2">
          <Link to={"./avggrades"}>
            <div className="dashboard-box">
              <div className="dashboard-number">62%</div>
              <div className="dashboard-label">Avg Grades</div>
            </div>
          </Link>
          <Link to={"./avgattendance"}>
            <div className="dashboard-box">
              <div className="dashboard-number">80%</div>
              <div className="dashboard-label">Avg Attendance</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="full-width-sections">
        <CollapsiblePanel title="Upcoming Parent-Teacher Meetings">
          <p>Details about upcoming meetings.</p>
        </CollapsiblePanel>
        <CollapsiblePanel title="Exam & Assignment Deadlines">
          <p>Information about upcoming exams and assignments.</p>
        </CollapsiblePanel>
        <CollapsiblePanel title="School Announcements">
          <p>Latest announcements from the school.</p>
        </CollapsiblePanel>
      </div>
    </div>
  );
};

export default Dashboard;
