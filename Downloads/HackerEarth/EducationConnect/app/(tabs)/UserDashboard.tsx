import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

const Dashboard = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>EDUCONNECT</Text>
        </View>
        <View style={styles.langSelector}>
          <Text>EN</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.studentName}>Student Name</Text>
            <Text style={styles.studentDetails}>STD   DIV</Text>
            <Text style={styles.studentDetails}>Roll Number</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text>...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Assignment Pending</Text>
          <View style={styles.assignmentCard}>
            <Text style={styles.subjectText}>Subject1</Text>
            <Text style={styles.assignmentTitle}>Assignment Heading</Text>
            <Text style={styles.teacherText}>by Teacher1</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Inside statsContainer */}
        <View style={styles.statsContainer}>
          <TouchableOpacity
            style={styles.statCard}
            onPress={() => navigation.navigate('AttendanceScreen')}
          >
            <View style={styles.circularProgress}>
              <Text style={styles.statNumber}>197/230</Text>
            </View>
            <Text style={styles.statLabel}>Overall Attendance</Text>
            <Text style={styles.statDate}>Conducted till 12/12/12</Text>
          </TouchableOpacity>

          {/* Updated Test Score Card */}
          <TouchableOpacity
            style={styles.statCard}
            onPress={() => navigation.navigate('TestScreen')}
          >
            <View style={styles.circularProgress}>
              <Text style={styles.statNumber}>60/100</Text>
            </View>
            <Text style={styles.statLabel}>Latest test score</Text>
            <Text style={styles.statDate}>Test date: 12/12/12</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FF8C42",
  },
  langSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#E6F3FF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  profileInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '600',
  },
  studentDetails: {
    fontSize: 14,
    color: '#666',
  },
  moreButton: {
    padding: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  assignmentCard: {
    backgroundColor: '#E6F3FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  subjectText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  teacherText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  viewMore: {
    color: '#FF8C42',
    fontSize: 14,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#E6F3FF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  circularProgress: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  statDate: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  teachersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  teacherCard: {
    width: '45%',
    backgroundColor: '#E6F3FF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  teacherAvatar: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 8,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  teacherSubject: {
    fontSize: 14,
    color: '#666',
  },
  examSection: {
    padding: 16,
    backgroundColor: '#E6F3FF',
    margin: 16,
    borderRadius: 12,
  },
  examItem: {
    marginBottom: 8,
  },
  examText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Dashboard;