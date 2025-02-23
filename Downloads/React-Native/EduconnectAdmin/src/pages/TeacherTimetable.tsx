// TeacherTimetable.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/TeacherTimetable.css";

const TeacherTimetable: React.FC = () => {
  // Example list of teachers
  const teachers = ["Mr. Smith", "Ms. Johnson", "Mr. Williams", "Mrs. Davis"];

  return (
    <div className="teacher-timetable-container">
      <div className="top-bar">
        {/* Back button: goes straight to Students.tsx */}
        <Link to="/timetable" className="back-button">
          &larr; Back
        </Link>
      </div>
      <h1>Teacher Timetable</h1>
      <div className="teacher-list">
        {teachers.map((teacher, index) => (
          <Link
            key={index}
            to={`/teachertimetable/${encodeURIComponent(teacher)}`}
            className="teacher-item"
          >
            {teacher}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherTimetable;
