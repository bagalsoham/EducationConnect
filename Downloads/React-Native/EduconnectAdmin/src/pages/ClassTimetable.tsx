// ClassTimetable.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/ClassTimetable.css";

const ClassTimetable: React.FC = () => {
  // Example list of classes
  const classes = ["1A", "2B", "3C", "4D"];

  return (
    <div className="class-timetable-container">
      <div className="top-bar">
        {/* Back button: goes straight to Students.tsx */}
        <Link to="/timetable" className="back-button">
          &larr; Back
        </Link>
      </div>
      <h1>Class Timetable</h1>

      <div className="class-list">
        {classes.map((cls) => (
          <Link key={cls} to={`/classtimetable/${cls}`} className="class-item">
            {cls}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassTimetable;
