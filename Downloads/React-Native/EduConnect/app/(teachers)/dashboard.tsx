import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Header from "@/components/header";

const DashboardTeacher = () => {
  const router = useRouter();

  const timetableData = [
    { class: 'Class A', time: '9:00 AM', subject: 'Mathematics' },
    { class: 'Class B', time: '10:00 AM', subject: 'Science' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* Teacher Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <View style={styles.profileImage} />
          <View style={styles.profileText}>
            <Text style={styles.teacherName}>Teacher Name</Text>
            <Text style={styles.teacherId}>ID</Text>
            <Text style={styles.classText}>Class: B</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuDots}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* View Class Details Button */}
      <TouchableOpacity
        style={styles.viewDetailsButton}
        onPress={() => router.push('../detailedClass')}
      >
        <Text style={styles.viewDetailsText}>View Class Details</Text>
      </TouchableOpacity>

      {/* Statistics Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>79</Text>
          <Text style={styles.statLabel}>Total Assigned{'\n'}Students</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Unread Parent{'\n'}Messages</Text>
        </View>
      </View>

      {/* Timetable Section */}
      <View style={styles.timetableSection}>
        <Text style={styles.sectionTitle}>Today's TimeTable</Text>
        <View style={styles.timetableHeader}>
          <Text style={styles.columnHeader}>Class</Text>
          <Text style={styles.columnHeader}>Time</Text>
          <Text style={styles.columnHeader}>Subject</Text>
        </View>
        {timetableData.map((item, index) => (
          <View key={index} style={styles.timetableRow}>
            <Text style={styles.timetableText}>{item.class}</Text>
            <Text style={styles.timetableText}>{item.time}</Text>
            <Text style={styles.timetableText}>{item.subject}</Text>
          </View>
        ))}
      </View>

      {/* Student Performance Cards */}
      <View style={styles.performanceContainer}>
        <TouchableOpacity style={styles.performanceCard}>
          <Text style={styles.performanceText}>Top Students</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.performanceCard}>
          <Text style={styles.performanceText}>Students who are{'\n'}Struggling</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Events */}
      <View style={styles.eventsContainer}>
        <View style={styles.eventItem}>
          <Text style={styles.eventText}>• Exam Name - Date</Text>
        </View>
        <View style={styles.eventItem}>
          <Text style={styles.eventText}>• PTM - Date</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileCard: {
    backgroundColor: '#E8F3FF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 15,
  },
  profileText: {
    gap: 2,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  teacherId: {
    fontSize: 14,
    color: '#666',
  },
  classText: {
    fontSize: 14,
    color: '#666',
  },
  menuButton: {
    padding: 5,
  },
  menuDots: {
    fontSize: 24,
    color: '#666',
  },
  viewDetailsButton: {
    backgroundColor: '#E8F3FF',
    margin: 15,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#E8F3FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  timetableSection: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  timetableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  columnHeader: {
    flex: 1,
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  timetableRow: {
    flexDirection: 'row',
    backgroundColor: '#E8F3FF',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  timetableText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  performanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    gap: 15,
  },
  performanceCard: {
    flex: 1,
    backgroundColor: '#E8F3FF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  performanceText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  eventsContainer: {
    backgroundColor: '#E8F3FF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  eventItem: {
    marginVertical: 5,
  },
  eventText: {
    fontSize: 14,
    color: '#000',
  },
});

export default DashboardTeacher;