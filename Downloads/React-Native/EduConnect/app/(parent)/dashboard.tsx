import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Header from "@/components/header";

const DashboardParent = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Student Info Card */}
      <View style={styles.studentCard}>
        <View style={styles.studentInfo}>
          <View style={styles.profilePlaceholder} />
          <View>
            <Text style={styles.studentName}>Student Name</Text>
            <Text style={styles.studentClass}>STD    Div</Text>
            <Text style={styles.studentClass}>Roll Number</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Assignment Card */}
      <View style={styles.assignmentCard}>
        <Text style={styles.assignmentTitle}>Assignment Pending</Text>
        <View style={styles.assignmentContent}>
          <View>
            <Text style={styles.subjectText}>Subject1</Text>
            <Text style={styles.dueDate}>Due on 12/12/1212</Text>
            <Text style={styles.teacherText}>by Teacher1</Text>
          </View>
          <Text style={styles.assignmentHeading}>Assignment Heading</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <TouchableOpacity onPress={() => router.push("../overAllAttendance")}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Overall Attendance</Text>
            <Text style={styles.statDetails}>Conducted till: 12/12/1212</Text>
            <Text style={styles.statScore}>197/230</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.statBox} 
          onPress={() => router.push('../testScore')}
        >
          <Text style={styles.statTitle}>Latest test score</Text>
          <Text style={styles.statDetails}>Test date: 12/12/1212</Text>
          <Text style={styles.statScore}>60/100</Text>
        </TouchableOpacity>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Non Academic Progress</Text>
          <FontAwesome name="soccer-ball-o" size={30} color="black" style={styles.sportsIcon} />
        </View>
      </View>

      {/* Contact Teachers Section */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.sectionTitle}>Contact Teachers</Text>
      </TouchableOpacity>

      <View style={styles.teachersContainer}>
        {Array(4).fill(null).map((_, index) => (
          <View key={index} style={styles.teacherCard}>
            <View style={styles.teacherAvatar} />
            <Text style={styles.teacherCardName}>Teacher{index + 1}</Text>
            <Text style={styles.teacherCardSubject}>Subject{index + 1}</Text>
          </View>
        ))}
      </View>

      {/* Modal Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Teacher</Text>

            {/* Call Button */}
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>📞 Call</Text>
            </TouchableOpacity>

            {/* Message Button (Navigates to contactTeachers.tsx) */}
            <TouchableOpacity 
              style={styles.modalButton} 
              onPress={() => {
                setModalVisible(false);  // Close modal before navigation
                router.push('../contactTeachers'); // Navigate to contactTeachers.tsx
              }}
            >
              <Text style={styles.modalButtonText}>💬 Message</Text>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  teachersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  teacherCard: {
    alignItems: 'center',
  },
  teacherAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#E3F2FD',
    borderRadius: 25,
    marginBottom: 5,
  },
  teacherCardName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  teacherCardSubject: {
    fontSize: 11,
    textAlign: 'center',
    color: '#666',
  },
  container: { flex: 1, backgroundColor: '#fff' },
  studentCard: { backgroundColor: '#E3F2FD', marginHorizontal: 15, marginTop: 15, padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  studentInfo: { flexDirection: 'row', alignItems: 'center' },
  profilePlaceholder: { width: 60, height: 60, backgroundColor: '#fff', borderRadius: 5, marginRight: 15 },
  studentName: { fontSize: 16, fontWeight: '500', color: '#000', marginBottom: 4 },
  studentClass: { fontSize: 14, color: '#000', marginBottom: 2 },
  menuButton: { padding: 5 },
  assignmentCard: { backgroundColor: '#E3F2FD', marginHorizontal: 15, marginTop: 15, padding: 15, borderRadius: 10 },
  assignmentTitle: { fontSize: 16, fontWeight: '500', marginBottom: 10 },
  assignmentContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  subjectText: { fontSize: 14, fontWeight: '500', marginBottom: 2 },
  dueDate: { fontSize: 12, color: '#666' },
  teacherText: { fontSize: 12, color: '#666' },
  assignmentHeading: { fontSize: 14, flex: 1, textAlign: 'right' },
  viewMore: { fontSize: 12, color: '#666', marginTop: 8 },
  statsContainer: { flexDirection: 'row', marginHorizontal: 15, marginTop: 15, gap: 10 },
  statBox: { flex: 1, backgroundColor: '#E3F2FD', padding: 10, borderRadius: 10, alignItems: 'center' },
  statTitle: { fontSize: 12, fontWeight: '500', textAlign: 'center', marginBottom: 4 },
  statDetails: { fontSize: 10, color: '#666', textAlign: 'center', marginBottom: 4 },
  statScore: { fontSize: 14, fontWeight: '500' },
  sportsIcon: { marginTop: 5 },
  sectionTitle: { fontSize: 16, fontWeight: '500', marginHorizontal: 15, marginTop: 20, marginBottom: 15 },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: 250, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  modalButton: { backgroundColor: '#E3F2FD', padding: 10, borderRadius: 5, width: '100%', alignItems: 'center', marginTop: 10 },
  modalButtonText: { fontSize: 16, fontWeight: '500' },
  closeButton: { marginTop: 10 },
  closeButtonText: { color: 'red', fontSize: 16, fontWeight: '500' }
});

export default DashboardParent;
