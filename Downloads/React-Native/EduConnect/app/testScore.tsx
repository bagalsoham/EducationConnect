import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Importing icons
import { useRouter } from 'expo-router';

const testData: { id: string; date: string; subjects: string; score: number; total: number }[] = [
  { id: "1", date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 70, total: 100 },
  { id: "2", date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 40, total: 100 },
  { id: "3", date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 70, total: 100 },
  { id: "4", date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 70, total: 100 },
];

// Function to determine score color
const getScoreColor = (score: number): string => {
  if (score >= 70) return "#4CAF50"; // Green for high scores
  if (score >= 50) return "#FFC107"; // Yellow for medium scores
  return "#F44336"; // Red for low scores
};

const TestScore = () => {
  const navigation = useNavigation();
  const router = useRouter()
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>📌 Test</Text>
        <View style={{ width: 24 }} /> {/* Empty space to balance flex layout */}
      </View>

      <FlatList
        data={testData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Left section */}
            <View style={styles.leftSection}>
              <Text style={styles.label}>Conducted</Text>
              <Text style={styles.value}>{item.date}</Text>
            </View>

            {/* Middle section */}
            <View style={styles.middleSection}>
              <Text style={styles.label}>Subjects</Text>
              <Text style={styles.value}>{item.subjects}</Text>
            </View>

            {/* Right section - Score */}
            <View style={[styles.scoreCircle, { backgroundColor: getScoreColor(item.score) }]}>
              <Text style={styles.scoreText}>{item.score}</Text>
              <Text style={styles.totalScoreText}>{item.total}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFC",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#DDEEFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  leftSection: {
    flex: 1,
  },
  middleSection: {
    flex: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  scoreCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  totalScoreText: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
});

export default TestScore;
