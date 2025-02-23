import React from "react";
import { useParams, Link } from "react-router-dom";
import "../css/studentTable.css";

// Interface for each division
interface IDivision {
  name: string;
  studentsCount: number;
}

// Interface for each standard's data
interface IStdData {
  std: number;
  divisions: IDivision[];
}

// Sample data for all standards
const allStdData: IStdData[] = [
  {
    std: 1,
    divisions: [
      { name: "Div A", studentsCount: 50 },
      { name: "Div B", studentsCount: 50 },
      { name: "Div C", studentsCount: 50 },
      { name: "Div D", studentsCount: 50 },
    ],
  },
  {
    std: 2,
    divisions: [
      { name: "Div A", studentsCount: 40 },
      { name: "Div B", studentsCount: 60 },
      { name: "Div C", studentsCount: 50 },
    ],
  },
  {
    std: 3,
    divisions: [
      { name: "Div A", studentsCount: 45 },
      { name: "Div B", studentsCount: 55 },
      { name: "Div C", studentsCount: 70 },
      { name: "Div D", studentsCount: 80 },
      { name: "Div E", studentsCount: 50 },
    ],
  },
  // Add more standards as needed...
];

const StudentTable: React.FC = () => {
  const { stdId } = useParams();
  const currentStdId = parseInt(stdId || "1", 10);

  // Find the current standard's data
  const currentStdData = allStdData.find((item) => item.std === currentStdId);

  if (!currentStdData) {
    return (
      <div className="student-table-page">
        <h2>No data found for STD {stdId}</h2>
      </div>
    );
  }

  // Calculate total divisions & total students for this standard
  const totalDivisions = currentStdData.divisions.length;
  const totalStudents = currentStdData.divisions.reduce(
    (sum, div) => sum + div.studentsCount,
    0
  );

  // Determine the next/previous standard for arrow navigation
  const currentIndex = allStdData.findIndex(
    (item) => item.std === currentStdId
  );
  const prevStdData = allStdData[currentIndex - 1];
  const nextStdData = allStdData[currentIndex + 1];

  return (
    <div className="student-table-page">
      {/* Top bar with back button, arrows, and STD info */}
      <div className="top-bar">
        {/* Back button: goes straight to Students.tsx */}
        <Link to="/students" className="back-button">
          &larr; Back
        </Link>

        {/* Previous arrow (disabled if none) */}
        {prevStdData ? (
          <Link to={`/student-table/${prevStdData.std}`} className="arrow">
            &lt;
          </Link>
        ) : (
          <span className="arrow-disabled">&lt;</span>
        )}

        {/* Current STD info */}
        <div className="std-info">
          <span className="std-name">STD {currentStdData.std}</span>
          <span className="std-divisions">{totalDivisions}</span>
          <span className="std-students">{totalStudents}</span>
          <div className="std-labels">
            <span className="std-label">Total Divisions</span>
            <span className="std-label">Total students</span>
          </div>
        </div>

        {/* Next arrow (disabled if none) */}
        {nextStdData ? (
          <Link to={`/student-table/${nextStdData.std}`} className="arrow">
            &gt;
          </Link>
        ) : (
          <span className="arrow-disabled">&gt;</span>
        )}
      </div>

      {/* Division grid */}
      <div className="division-grid">
        {currentStdData.divisions.map((div, index) => (
          <Link
            key={index}
            to={`/student-display/${currentStdData.std}/${div.name}`}
            className="division-card-link"
          >
            <div className="division-card">
              <div className="division-name">{div.name}</div>
              <div className="division-label">Total students</div>
              <div className="division-count">{div.studentsCount}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentTable;
