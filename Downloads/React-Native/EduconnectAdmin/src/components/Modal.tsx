import React, { useState, useEffect } from "react";

interface Student {
  id?: number;
  name: string;
  grade: string;
  email: string;
}

interface Teacher {
  id?: number;
  name: string;
  subject: string;
  email: string;
}

interface ModalProps {
  student?: Student | null;
  teacher?: Teacher | null;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
}

const Modal: React.FC<ModalProps> = ({
  student,
  teacher,
  onClose,
  onSubmit,
}) => {
  // Determine if we are handling a student form or teacher form.
  const isStudent = typeof teacher === "undefined";
  const initialData = student ||
    teacher || { name: "", email: "", grade: "", subject: "" };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [student, teacher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h3 className="text-xl mb-4">
          {student || teacher ? "Edit" : "Add"}{" "}
          {isStudent ? "Student" : "Teacher"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          {isStudent ? (
            <div className="mb-4">
              <label className="block mb-1">Grade</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />
            </div>
          )}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
