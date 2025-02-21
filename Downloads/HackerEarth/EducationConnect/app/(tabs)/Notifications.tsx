import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

interface LanguageOption {
  code: string;
  flag: string;
}

const UserDashboard: React.FC = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages: LanguageOption[] = [
    { code: "EN", flag: "🇬🇧" },
    // Add more languages as needed
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>EDUCONNECT</Text>
        <TouchableOpacity 
          style={styles.languageSelector}
          onPress={() => setShowLanguages(!showLanguages)}
        >
          <Text style={styles.languageText}>{selectedLang}</Text>
          <Text style={styles.flagText}>{languages[0].flag}</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Upcoming Events Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Event</Text>
          <View style={styles.eventCard}>
            <Text style={styles.noEventText}>No Upcoming events</Text>
          </View>
        </View>

        {/* Notices Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notices</Text>
          
          {/* Notice Cards */}
          {[
            { title: "Exam TimeTable", subtitle: "Timetable for upcoming exams", date: "02/21/24" },
            { title: "Fees Payment Reciept", subtitle: "Fees Reciept", date: "02/21/24" },
            { title: "Admission Date", subtitle: "Admission Form", date: "02/21/24" },
            { title: "Tomorrow Holiday", subtitle: "On account of festival", date: "02/21/24" }
          ].map((notice, index) => (
            <View key={index} style={styles.noticeCard}>
              <View style={styles.noticeContent}>
                <Text style={styles.noticeTitle}>{notice.title}</Text>
                <Text style={styles.noticeDate}>ADDED ON {notice.date}</Text>
                <Text style={styles.noticeSubtitle}>{notice.subtitle}</Text>
              </View>
              <TouchableOpacity style={styles.shareButton}>
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8C42",
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  languageText: {
    marginRight: 8,
    fontSize: 16,
  },
  flagText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  eventCard: {
    backgroundColor: "#E6F3FF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  noEventText: {
    color: "#666",
  },
  noticeCard: {
    backgroundColor: "#E6F3FF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noticeContent: {
    flex: 1,
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  noticeDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  noticeSubtitle: {
    fontSize: 14,
    color: "#333",
  },
  shareButton: {
    padding: 8,
  },
});

export default UserDashboard;