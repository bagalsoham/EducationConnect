// Teachers.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/teachers.css";

// Interface describing a teacher
interface ITeacher {
  _id: string; // MongoDB document ID
  name: string;
  teacherId: string;
  classAssigned: string;
  subject: string;
  phone: string;
}

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // For adding a new teacher
  const [isAddingTeacher, setIsAddingTeacher] = useState(false);
  const [newTeacherName, setNewTeacherName] = useState("");
  const [newTeacherId, setNewTeacherId] = useState("");
  const [newTeacherClass, setNewTeacherClass] = useState("");
  const [newTeacherSubject, setNewTeacherSubject] = useState("");
  const [newTeacherPhone, setNewTeacherPhone] = useState("");

  // For editing an existing teacher
  const [editingTeacherId, setEditingTeacherId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editTeacherId, setEditTeacherId] = useState("");
  const [editClass, setEditClass] = useState("");
  const [editSubject, setEditSubject] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // 1. Fetch teachers from the server on component mount
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get<ITeacher[]>(
        "http://localhost:5000/api/teachers"
      );
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  // Derived data
  const totalTeachers = teachers.length;
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handlers for adding a new teacher
  const handleAddTeacher = () => {
    setIsAddingTeacher(true);
    // Reset fields
    setNewTeacherName("");
    setNewTeacherId("");
    setNewTeacherClass("");
    setNewTeacherSubject("");
    setNewTeacherPhone("");
  };

  const handleSaveNewTeacher = async () => {
    try {
      const newTeacher = {
        name: newTeacherName,
        teacherId: newTeacherId,
        classAssigned: newTeacherClass,
        subject: newTeacherSubject,
        phone: newTeacherPhone,
      };

      // POST to server
      const response = await axios.post<ITeacher>(
        "http://localhost:5000/api/teachers",
        newTeacher
      );

      // Append new teacher to state
      setTeachers([...teachers, response.data]);
      setIsAddingTeacher(false);
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const handleCancelNewTeacher = () => {
    setIsAddingTeacher(false);
  };

  // Handlers for editing an existing teacher
  const handleEditTeacher = (teacher: ITeacher) => {
    setEditingTeacherId(teacher._id);
    setEditName(teacher.name);
    setEditTeacherId(teacher.teacherId);
    setEditClass(teacher.classAssigned);
    setEditSubject(teacher.subject);
    setEditPhone(teacher.phone);
  };

  const handleSaveEditTeacher = async () => {
    if (!editingTeacherId) return;

    try {
      const updatedTeacher = {
        name: editName,
        teacherId: editTeacherId,
        classAssigned: editClass,
        subject: editSubject,
        phone: editPhone,
      };

      // PUT to server
      const response = await axios.put<ITeacher>(
        `http://localhost:5000/api/teachers/${editingTeacherId}`,
        updatedTeacher
      );

      // Update local state
      setTeachers((prev) =>
        prev.map((t) => (t._id === editingTeacherId ? response.data : t))
      );

      setEditingTeacherId(null);
    } catch (error) {
      console.error("Error editing teacher:", error);
    }
  };

  const handleCancelEditTeacher = () => {
    setEditingTeacherId(null);
  };

  // Handler for deleting a teacher
  const handleDeleteTeacher = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      setTeachers((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="teachers-page">
      <div className="top-bar">
        {/* Back button: goes straight to Students.tsx */}
        <Link to="/" className="back-button">
          &larr; Back
        </Link>
      </div>
      {/* Top Panel: Show total teachers */}
      <div className="top-panel">
        <div className="info-card">
          <h2>Total Teachers: {totalTeachers}</h2>
        </div>
      </div>

      {/* Controls: Add Teacher & Search */}
      <div className="controls">
        <button onClick={handleAddTeacher}>Add Teacher</button>
        <input
          type="text"
          placeholder="Search Teacher"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add New Teacher Form */}
      {isAddingTeacher && (
        <div className="add-teacher-form">
          <h3>Add New Teacher</h3>
          <label>
            Name:
            <input
              type="text"
              value={newTeacherName}
              onChange={(e) => setNewTeacherName(e.target.value)}
            />
          </label>
          <label>
            Teacher ID:
            <input
              type="text"
              value={newTeacherId}
              onChange={(e) => setNewTeacherId(e.target.value)}
            />
          </label>
          <label>
            Class Assigned:
            <input
              type="text"
              value={newTeacherClass}
              onChange={(e) => setNewTeacherClass(e.target.value)}
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              value={newTeacherSubject}
              onChange={(e) => setNewTeacherSubject(e.target.value)}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={newTeacherPhone}
              onChange={(e) => setNewTeacherPhone(e.target.value)}
            />
          </label>
          <div>
            <button onClick={handleSaveNewTeacher}>Save</button>
            <button onClick={handleCancelNewTeacher}>Cancel</button>
          </div>
        </div>
      )}

      {/* Teachers Table */}
      <table className="teachers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Teacher ID</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Phone</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher) => {
            const isEditing = editingTeacherId === teacher._id;
            return (
              <tr key={teacher._id}>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    teacher.name
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editTeacherId}
                      onChange={(e) => setEditTeacherId(e.target.value)}
                    />
                  ) : (
                    teacher.teacherId
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editClass}
                      onChange={(e) => setEditClass(e.target.value)}
                    />
                  ) : (
                    teacher.classAssigned
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editSubject}
                      onChange={(e) => setEditSubject(e.target.value)}
                    />
                  ) : (
                    teacher.subject
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                    />
                  ) : (
                    teacher.phone
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <>
                      <button onClick={handleSaveEditTeacher}>Save</button>
                      <button onClick={handleCancelEditTeacher}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditTeacher(teacher)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteTeacher(teacher._id)}>
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
    </div>
  );
};

export default Teachers;
