// TimeTable.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/TimeTable.css"; // Import CSS for styling

const TimeTable: React.FC = () => {
  return (
    <div className="timetable-container">
      <h1>Timetable</h1>
      <div className="timetable-boxes">
        <Link to="/classtimetable" className="timetable-box">
          <h2>Class Timetable</h2>
          <p>View Class Timetable</p>
        </Link>
        <Link to="/teachertimetable" className="timetable-box">
          <h2>Teacher Timetable</h2>
          <p>View Teacher Timetable</p>
        </Link>
      </div>
    </div>
  );
};

export default TimeTable;
