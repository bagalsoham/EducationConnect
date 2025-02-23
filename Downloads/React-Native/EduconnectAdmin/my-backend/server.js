// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 2. CONNECT TO MONGODB
// Replace the connection string with your actual MongoDB URI
mongoose
  .connect("mongodb://127.0.0.1:27017/mySchoolDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 3. CREATE A SCHEMA AND MODEL FOR TEACHERS
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacherId: { type: String, required: true, unique: true },
  classAssigned: { type: String, required: true },
  subject: { type: String, required: true },
  phone: { type: String, required: true },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

// 4. ROUTES

// a) Get all teachers
app.get("/api/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// b) Create a new teacher
app.post("/api/teachers", async (req, res) => {
  try {
    const { name, teacherId, classAssigned, subject, phone } = req.body;
    const newTeacher = new Teacher({
      name,
      teacherId,
      classAssigned,
      subject,
      phone,
    });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// c) Update a teacher
app.put("/api/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, teacherId, classAssigned, subject, phone } = req.body;

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      id,
      { name, teacherId, classAssigned, subject, phone },
      { new: true }
    );

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// d) Delete a teacher
app.delete("/api/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// 5. START THE SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
