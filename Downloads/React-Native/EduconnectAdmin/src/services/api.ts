export interface Student {
  id: number;
  name: string;
  grade: string;
  email: string;
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
}

// Sample data stored in memory
let students: Student[] = [
  { id: 1, name: "Alice Johnson", grade: "5", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", grade: "6", email: "bob@example.com" },
];

let teachers: Teacher[] = [
  {
    id: 1,
    name: "Mr. Anderson",
    subject: "Mathematics",
    email: "anderson@example.com",
  },
  { id: 2, name: "Ms. Davis", subject: "English", email: "davis@example.com" },
];

export const getStudents = async (): Promise<Student[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(students), 500));
};

export const addStudent = async (
  student: Omit<Student, "id">
): Promise<Student> => {
  return new Promise((resolve) => {
    const newStudent = { ...student, id: Date.now() };
    students.push(newStudent);
    setTimeout(() => resolve(newStudent), 500);
  });
};

export const updateStudent = async (student: Student): Promise<Student> => {
  return new Promise((resolve) => {
    students = students.map((s) => (s.id === student.id ? student : s));
    setTimeout(() => resolve(student), 500);
  });
};

export const deleteStudent = async (id: number): Promise<void> => {
  return new Promise((resolve) => {
    students = students.filter((s) => s.id !== id);
    setTimeout(() => resolve(), 500);
  });
};

export const getTeachers = async (): Promise<Teacher[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(teachers), 500));
};

export const addTeacher = async (
  teacher: Omit<Teacher, "id">
): Promise<Teacher> => {
  return new Promise((resolve) => {
    const newTeacher = { ...teacher, id: Date.now() };
    teachers.push(newTeacher);
    setTimeout(() => resolve(newTeacher), 500);
  });
};

export const updateTeacher = async (teacher: Teacher): Promise<Teacher> => {
  return new Promise((resolve) => {
    teachers = teachers.map((t) => (t.id === teacher.id ? teacher : t));
    setTimeout(() => resolve(teacher), 500);
  });
};

export const deleteTeacher = async (id: number): Promise<void> => {
  return new Promise((resolve) => {
    teachers = teachers.filter((t) => t.id !== id);
    setTimeout(() => resolve(), 500);
  });
};
