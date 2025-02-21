import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface TestItem {
  date: string;
  subjects: string;
  score: number;
  total: number;
}

const testData: TestItem[] = [
  { date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 70, total: 100 },
  { date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 40, total: 100 },
  { date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 70, total: 100 },
  { date: "12/12/1212", subjects: "Sub1, Sub2, Sub3", score: 70, total: 100 },
];

const TestScreen: React.FC = () => {
  const navigation = useNavigation();

  const getColor = (score: number) => {
    if (score >= 70) return "#007AFF"; // Blue
    if (score >= 50) return "#FFA500"; // Orange
    return "#FF3B30"; // Red
  };

  const renderItem = ({ item }: { item: TestItem }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Conducted</Text>
        <Text style={styles.value}>{item.date}</Text>
        <Text style={styles.label}>Subjects</Text>
        <Text style={styles.value}>{item.subjects}</Text>
      </View>
      <View style={[styles.scoreContainer, { backgroundColor: getColor(item.score) }]}>
        <Text style={styles.scoreText}>{item.score}</Text>
        <Text style={styles.totalText}>{item.total}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <FlatList data={testData} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  backButton: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9EFFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
    marginBottom: 5,
  },
  scoreContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  totalText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});

export default TestScreen;
