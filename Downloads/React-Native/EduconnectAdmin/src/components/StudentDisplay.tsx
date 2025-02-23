import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/studentDisplay.css";

// Interface for student data
interface IStudent {
  id: number;
  name: string;
  rollNo: number;
  phoneNumber: string;
}

// Sample initial data for demonstration
const initialStudents: IStudent[] = [
  { id: 1, name: "John Doe", rollNo: 123, phoneNumber: "1234567890" },
  { id: 2, name: "Jane Smith", rollNo: 124, phoneNumber: "0987654321" },
];

// Component
const StudentDisplay: React.FC = () => {
  // Grab URL parameters
  const { stdId, divisionName } = useParams();
  const standardNumber = parseInt(stdId || "1", 10);

  // Local state
  const [teacherName, setTeacherName] = useState("ABC DEF");
  const [isEditingTeacher, setIsEditingTeacher] = useState(false);

  const [students, setStudents] = useState<IStudent[]>(initialStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  // Temporary states for new/edit student data
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentRollNo, setNewStudentRollNo] = useState("");
  const [newStudentPhone, setNewStudentPhone] = useState("");

  const [editingStudentId, setEditingStudentId] = useState<number | null>(null);
  const [editingStudentName, setEditingStudentName] = useState("");
  const [editingStudentRollNo, setEditingStudentRollNo] = useState("");
  const [editingStudentPhone, setEditingStudentPhone] = useState("");

  // Derived data
  const totalStudents = students.length;

  // Handle teacher name editing
  const handleEditTeacherName = () => {
    setIsEditingTeacher(true);
  };

  const handleSaveTeacherName = () => {
    setIsEditingTeacher(false);
  };

  // Handle search
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle add student
  const handleAddStudent = () => {
    setIsAddingStudent(true);
    // Reset fields
    setNewStudentName("");
    setNewStudentRollNo("");
    setNewStudentPhone("");
  };

  const handleSaveNewStudent = () => {
    // Create new student with a unique ID
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    const newStudent: IStudent = {
      id: newId,
      name: newStudentName,
      rollNo: parseInt(newStudentRollNo, 10),
      phoneNumber: newStudentPhone,
    };
    setStudents([...students, newStudent]);
    setIsAddingStudent(false);
  };

  const handleCancelNewStudent = () => {
    setIsAddingStudent(false);
  };

  // Handle edit student
  const handleEditStudent = (student: IStudent) => {
    setEditingStudentId(student.id);
    setEditingStudentName(student.name);
    setEditingStudentRollNo(student.rollNo.toString());
    setEditingStudentPhone(student.phoneNumber);
  };

  const handleSaveEditStudent = () => {
    setStudents((prev) =>
      prev.map((stu) =>
        stu.id === editingStudentId
          ? {
              ...stu,
              name: editingStudentName,
              rollNo: parseInt(editingStudentRollNo, 10),
              phoneNumber: editingStudentPhone,
            }
          : stu
      )
    );
    setEditingStudentId(null);
  };

  const handleCancelEditStudent = () => {
    setEditingStudentId(null);
  };

  // Handle delete student
  const handleDeleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((stu) => stu.id !== id));
  };

  return (
    <div className="student-display-page">
      {/* Top Panel */}
      <div className="top-panel">
        <div className="info-card">
          <div>Std {standardNumber}</div>
          <div>Div {divisionName}</div>
          <div>Total Students: {totalStudents}</div>
          <div>
            Teacher:{" "}
            {isEditingTeacher ? (
              <input
                type="text"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            ) : (
              teacherName
            )}
          </div>
          {isEditingTeacher ? (
            <button onClick={handleSaveTeacherName}>Save Teacher Name</button>
          ) : (
            <button onClick={handleEditTeacherName}>Edit Teacher Name</button>
          )}
        </div>
      </div>

      {/* Controls: Add Student & Search */}
      <div className="controls">
        <button onClick={handleAddStudent}>Add Student</button>
        <input
          type="text"
          placeholder="Search Student"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add New Student Form */}
      {isAddingStudent && (
        <div className="add-student-form">
          <h3>Add New Student</h3>
          <label>
            Student Name:
            <input
              type="text"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
            />
          </label>
          <label>
            Roll No.:
            <input
              type="number"
              value={newStudentRollNo}
              onChange={(e) => setNewStudentRollNo(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={newStudentPhone}
              onChange={(e) => setNewStudentPhone(e.target.value)}
            />
          </label>
          <div>
            <button onClick={handleSaveNewStudent}>Save</button>
            <button onClick={handleCancelNewStudent}>Cancel</button>
          </div>
        </div>
      )}

      {/* Student Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No.</th>
            <th>Phone Number</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((stu) => {
            const isEditing = editingStudentId === stu.id;
            return (
              <tr key={stu.id}>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editingStudentName}
                      onChange={(e) => setEditingStudentName(e.target.value)}
                    />
                  ) : (
                    stu.name
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editingStudentRollNo}
                      onChange={(e) => setEditingStudentRollNo(e.target.value)}
                    />
                  ) : (
                    stu.rollNo
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editingStudentPhone}
                      onChange={(e) => setEditingStudentPhone(e.target.value)}
                    />
                  ) : (
                    stu.phoneNumber
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <>
                      <button onClick={handleSaveEditStudent}>Save</button>
                      <button onClick={handleCancelEditStudent}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditStudent(stu)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteStudent(stu.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Link back to StudentTable (optional, or you can rely on browser back) */}
      <div className="back-link">
        <Link to={`/student-table/${standardNumber}`}>Back to Divisions</Link>
      </div>
    </div>
  );
};

export default StudentDisplay;
