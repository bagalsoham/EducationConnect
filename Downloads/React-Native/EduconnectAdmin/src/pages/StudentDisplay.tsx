import React, { useState, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/studentDisplay.css";

interface IStudent {
  id: number;
  name: string;
  age: number;
}

const StudentDisplay: React.FC = () => {
  // Retrieve standard and division from URL parameters
  const { std, division } = useParams<{ std: string; division: string }>();

  // Initial sample student data
  const [students, setStudents] = useState<IStudent[]>([
    { id: 1, name: "Alice Johnson", age: 10 },
    { id: 2, name: "Bob Smith", age: 11 },
    { id: 3, name: "Charlie Brown", age: 10 },
    { id: 4, name: "Diana Prince", age: 11 },
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // States for the add student form inputs
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentAge, setNewStudentAge] = useState("");

  // Handle adding a new student
  const handleAddStudent = (e: FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newStudentAge) return;
    const newId =
      students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
    const ageNumber = parseInt(newStudentAge, 10);
    const newStudent: IStudent = {
      id: newId,
      name: newStudentName,
      age: ageNumber,
    };
    setStudents([...students, newStudent]);
    // Reset form fields
    setNewStudentName("");
    setNewStudentAge("");
  };

  // Filter students based on the search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-display-page">
      {/* Top Panel with Info Card */}
      <div className="top-panel">
        <div className="info-card">
          <div>
            <strong>Standard:</strong> {std} - {division}
          </div>
          <div>
            <strong>Total Students:</strong> {students.length}
          </div>
          {/* Example button; you can replace or remove it as needed */}
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>

      {/* Controls for searching and adding students */}
      <div className="controls">
        <button
          onClick={() => {
            /* You can toggle form visibility here if desired */
          }}
        >
          Add Student
        </button>
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Student Form */}
      <form className="add-student-form" onSubmit={handleAddStudent}>
        <label>
          Student Name:
          <input
            type="text"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={newStudentAge}
            onChange={(e) => setNewStudentAge(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
        <button
          type="reset"
          onClick={() => {
            setNewStudentName("");
            setNewStudentAge("");
          }}
        >
          Clear
        </button>
      </form>

      {/* Student Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No students found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Back Link */}
      <div className="back-link">
        <Link to={`/student-table/${std}`}>Back to Student Table</Link>
      </div>
    </div>
  );
};

export default StudentDisplay;
