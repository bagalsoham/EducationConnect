import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons"; // For the three-dot menu

const TeacherProfile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.logo} />
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>EN</Text>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg" }} style={styles.flag} />
        </View>
      </View>

      {/* Teacher Profile Card */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={{ uri: "https://via.placeholder.com/80" }} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.teacherName}>Teacher Name</Text>
            <Text style={styles.teacherId}>ID</Text>
          </View>
          <Entypo name="dots-three-vertical" size={18} color="black" style={styles.menuIcon} />
        </View>
      </View>

      {/* Settings Options */}
      <TouchableOpacity style={styles.optionCard}>
        <Text style={styles.optionTitle}>App language</Text>
        <Text style={styles.optionText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard}>
        <Text style={styles.optionTitle}>Contact Team Support</Text>
        <Text style={styles.optionText}>1800 - 123 - 123</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeacherProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: "contain",
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  flag: {
    width: 20,
    height: 15,
    resizeMode: "cover",
  },
  card: {
    backgroundColor: "#B3D8FF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teacherId: {
    fontSize: 14,
    color: "#555",
  },
  menuIcon: {
    padding: 10,
  },
  optionCard: {
    backgroundColor: "#D9ECFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
  },
});
