// Students.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/Students.css";

// Interface for the STD box
interface IStudentCard {
  std: number; // e.g., 1 for "STD 1", 2 for "STD 2", etc.
  divisions: number; // number of divisions
  studentsCount: number; // total students in that standard
}

const Students: React.FC = () => {
  // Sample data; replace or fetch from your database/API
  const studentCardData: IStudentCard[] = [
    { std: 1, divisions: 4, studentsCount: 200 },
    { std: 2, divisions: 3, studentsCount: 150 },
    { std: 3, divisions: 5, studentsCount: 220 },
    { std: 4, divisions: 4, studentsCount: 180 },
    { std: 5, divisions: 4, studentsCount: 240 },
  ];

  // Calculate total students from the array
  const totalStudents = studentCardData.reduce(
    (sum, item) => sum + item.studentsCount,
    0
  );

  return (
    <div className="students-page">
      {/* Top "Total Students" Card */}
      <div className="students-header-card">
        <div className="students-header-number">{totalStudents}</div>
        <div className="students-header-label">Total Students</div>
      </div>

      {/* Grid of STD boxes */}
      <div className="students-grid">
        {studentCardData.map((card) => (
          <Link
            key={card.std}
            to={`/student-table/${card.std}`}
            className="students-link"
          >
            <div className="students-card">
              <div className="card-row top-row">
                <span className="std">STD {card.std}</span>
                <span className="divisions">{card.divisions}</span>
                <span className="students-count">{card.studentsCount}</span>
              </div>
              <div className="card-row bottom-row">
                <span className="std-label"></span>
                <span className="divisions-label">Total Divisions</span>
                <span className="students-label">Total Students</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Students;
