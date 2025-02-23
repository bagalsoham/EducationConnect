import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const overAllAttendance = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        <Text style={styles.backText}>Attendance</Text>
      </TouchableOpacity>

      {/* Overall Attendance Card */}
      <View style={styles.overallCard}>
        <View style={styles.circle} />
        <Text style={styles.overallText}>Overall Attendance</Text>
        <Text style={styles.scoreText}>197/230</Text>
      </View>

      {/* Subject Attendance Cards */}
      <View style={styles.subjectContainer}>
        <View style={styles.subjectCard}>
          <View style={styles.circle} />
          <Text style={styles.subjectText}>subject</Text>
          <Text style={styles.scoreText}>37/40</Text>
        </View>

        <View style={styles.subjectCard}>
          <View style={styles.circle} />
          <Text style={styles.subjectText}>subject</Text>
          <Text style={styles.scoreText}>30/40</Text>
        </View>

        <View style={[styles.subjectCard, { alignSelf: 'center' }]}>
          <View style={styles.circle} />
          <Text style={styles.subjectText}>subject</Text>
          <Text style={styles.scoreText}>30/40</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default overAllAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  overallCard: {
    backgroundColor: '#D9ECFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#4A90E2',
    marginBottom: 10,
  },
  overallText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subjectCard: {
    backgroundColor: '#D9ECFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
  },
  subjectText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
