import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/TecaherTimetableDetail.css";

const TeacherTimetableDetail: React.FC = () => {
  const { teacherName } = useParams<{ teacherName: string }>();
  const navigate = useNavigate();

  // Sample timetable data for the teacher
  const timetableData = [
    { time: "9:00-10:00", class: "1A", subject: "Math" },
    { time: "10:00-11:00", class: "2B", subject: "English" },
    { time: "11:00-12:00", class: "3C", subject: "Science" },
    { time: "12:00-1:00", class: "4D", subject: "History" },
    { time: "1:00-2:00", class: "1A", subject: "Art" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter timetable entries based on the search query
  const filteredTimetable = timetableData.filter(
    (entry) =>
      entry.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.time.includes(searchQuery) ||
      entry.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="teacher-timetable-detail">
      <h1>Timetable for {teacherName}</h1>
      <div className="search-back-container">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>
        <input
          type="text"
          placeholder="Search timetable..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Class</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {filteredTimetable.length > 0 ? (
            filteredTimetable.map((entry, index) => (
              <tr key={index}>
                <td>{entry.time}</td>
                <td>{entry.class}</td>
                <td>{entry.subject}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No timetable entries found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTimetableDetail;
