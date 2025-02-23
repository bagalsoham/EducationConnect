import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const StudentDetails = () => {
  const router = useRouter();
  const { name, rollNo } = useLocalSearchParams(); // Get student details from navigation params

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <FontAwesome onPress={() => router.back()} name="arrow-left" size={20} color="black" />
        <Text style={styles.headerText}>Contact</Text>
      </View>

      {/* Student Profile */}
      <View style={styles.profileCard}>
        <View style={styles.profileImage} />
        <View>
          <Text style={styles.studentName}>{name}</Text>
          <Text style={styles.rollNumber}>{rollNo}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Call Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Message Parent</Text>
        </TouchableOpacity>
      </View>

      {/* Attendance & Performance */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <FontAwesome name="pie-chart" size={30} color="#4A90E2" />
          <Text style={styles.infoText}>Attendance</Text>
          <Text style={styles.infoValue}>37/40</Text>
        </View>
        <View style={styles.infoCard}>
          <FontAwesome name="bar-chart" size={30} color="#4A90E2" />
          <Text style={styles.infoText}>Academic Performance</Text>
          <Text style={styles.infoValue}>Last Conducted: 12/12/1212</Text>
        </View>
      </View>

      {/* Assignments */}
      <View style={styles.assignmentCard}>
        <FontAwesome name="book" size={30} color="#4A90E2" />
        <Text style={styles.infoText}>Assignments</Text>
        <Text style={styles.infoValue}>0 pending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginRight: 15,
  },
  studentName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  rollNumber: {
    color: '#fff',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#E8F3FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  infoValue: {
    fontSize: 12,
    color: '#333',
  },
  assignmentCard: {
    backgroundColor: '#E8F3FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default StudentDetails;
