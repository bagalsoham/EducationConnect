import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

// Example interface for a Student's Attendance
interface AttendanceData {
  studentId: string;
  name: string;
  attendance: number; // Percentage
}

const Attendance: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [currentAttendance, setCurrentAttendance] = useState<number>(0);
  const { id } = useParams<{ id: string }>(); // For parents, `id` refers to their child's ID
  const userRole = "admin"; // Assuming the role is determined by the authentication system. For example purposes, we can use "admin", "parent"

  // Fetch the attendance data (this could be an API call)
  useEffect(() => {
    // Admin will see all students' attendance
    if (userRole === "admin") {
      axios
        .get("/api/attendance")
        .then((response) => {
          setAttendanceData(response.data);
        })
        .catch((err) => {
          console.error("Error fetching attendance data", err);
        });
    } else if (userRole === "parent" && id) {
      // Parent will see only their child's attendance
      axios
        .get(`/api/attendance/${id}`)
        .then((response) => {
          setAttendanceData([response.data]); // Assuming single child's data for parent
        })
        .catch((err) => {
          console.error("Error fetching attendance data for parent", err);
        });
    }
  }, [id, userRole]);

  // Update attendance for a student (admin functionality)
  const updateAttendance = (studentId: string, newAttendance: number) => {
    axios
      .put(`/api/attendance/${studentId}`, { attendance: newAttendance })
      .then(() => {
        setAttendanceData((prevState) =>
          prevState.map((student) =>
            student.studentId === studentId
              ? { ...student, attendance: newAttendance }
              : student
          )
        );
      })
      .catch((err) => {
        console.error("Error updating attendance", err);
      });
  };

  // Render Admin's attendance data with edit functionality
  const renderAdminView = () => {
    return (
      <Grid container spacing={3}>
        {attendanceData.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.studentId}>
            <Card>
              <CardContent>
                <Typography variant="h6">{student.name}</Typography>
                <Typography variant="body1">
                  Attendance: {student.attendance}%
                </Typography>
                <TextField
                  label="Update Attendance"
                  type="number"
                  value={currentAttendance}
                  onChange={(e) => setCurrentAttendance(Number(e.target.value))}
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  onClick={() =>
                    updateAttendance(student.studentId, currentAttendance)
                  }
                >
                  Update Attendance
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  // Render Parent's attendance data (view-only)
  const renderParentView = () => {
    return (
      <Grid container spacing={3}>
        {attendanceData.map((student) => (
          <Grid item xs={12} key={student.studentId}>
            <Card>
              <CardContent>
                <Typography variant="h6">{student.name}</Typography>
                <Typography variant="body1">
                  Attendance: {student.attendance}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Attendance
      </Typography>
      {userRole === "admin" ? renderAdminView() : renderParentView()}
    </Container>
  );
};

export default Attendance;
