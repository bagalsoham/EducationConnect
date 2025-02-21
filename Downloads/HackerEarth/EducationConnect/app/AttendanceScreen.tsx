import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressCircle } from 'react-native-svg-charts'; 
import { useNavigation } from '@react-navigation/native';

interface SubjectAttendance {
  subject: string;
  attended: number;
  total: number;
}

const AttendanceScreen = () => {
  const navigation = useNavigation();

  const totalClasses = 230;
  const presentClasses = 197;
  const attendancePercentage = (presentClasses / totalClasses) * 100;

  const subjects: SubjectAttendance[] = [
    { subject: 'Mathematics', attended: 37, total: 40 },
    { subject: 'Science', attended: 30, total: 40 },
    { subject: 'English', attended: 30, total: 40 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Header */}

        {/* Overall Attendance */}
        <View style={styles.overallCard}>
          <ProgressCircle
            style={styles.progressCircle}
            progress={attendancePercentage / 100}
            progressColor={'#3b82f6'}
          />
          <Text style={styles.attendanceCount}>
            {presentClasses}/{totalClasses}
          </Text>
          <Text style={styles.percentageText}>{attendancePercentage.toFixed(1)}%</Text>
          <Text style={styles.cardTitle}>Overall Attendance</Text>
        </View>

        {/* Subject-wise Attendance */}
        <View style={styles.subjectContainer}>
          {subjects.map((subject, index) => (
            <View key={index} style={styles.subjectCard}>
              <ProgressCircle
                style={styles.progressCircleSmall}
                progress={subject.attended / subject.total}
                progressColor={'#3b82f6'}
              />
              <Text style={styles.subjectTitle}>{subject.subject}</Text>
              <Text style={styles.attendanceCount}>
                {subject.attended}/{subject.total}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#3b82f6',
    fontWeight: '600',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  overallCard: {
    backgroundColor: '#E6F3FF',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  progressCircle: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  progressCircleSmall: {
    height: 70,
    width: 70,
    marginBottom: 5,
  },
  attendanceCount: {
    fontSize: 18,
    fontWeight: '600',
  },
  percentageText: {
    fontSize: 16,
    color: '#666',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subjectCard: {
    width: '40%',
    backgroundColor: '#E6F3FF',
    padding: 16,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  subjectTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
});

export default AttendanceScreen;
