import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/header";
import "../../i18n";
import { useTranslation } from "react-i18next";

const NotificationScreen = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const notices = [
    {
      title: t("Exam TimeTable"),
      description: t("Timetable for upcoming exams"),
      date: "01/01/23",
    },
    {
      title: t("Fees Payment Receipt"),
      description: t("Fees Receipt"),
      date: "01/01/23",
    },
    {
      title: t("Admission Date"),
      description: t("Admission Form"),
      date: "01/01/23",
    },
    {
      title: t("Tomorrow Holiday"),
      description: t("On account of festival"),
      date: "01/01/23",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* Upcoming Events Section */}
      <Text style={styles.sectionTitle}>{t("Upcoming Event")}</Text>
      <View style={styles.eventCard}>
        <Text style={styles.noEventText}>{t("No Upcoming events")}</Text>
      </View>

      {/* Notices Section */}
      <Text style={styles.sectionTitle}>{t("Notices")}</Text>
      {notices.map((notice, index) => (
        <View key={index} style={styles.noticeCard}>
          <View style={styles.noticeContent}>
            <Text style={styles.noticeTitle}>{notice.title}</Text>
            <Text style={styles.noticeDate}>
              {t("Posted on")} {notice.date}
            </Text>
            <Text style={styles.noticeDescription}>{notice.description}</Text>
          </View>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareText}>{t("Share")}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  eventCard: {
    backgroundColor: "#E3F2FD",
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  noEventText: {
    fontSize: 14,
    color: "#666",
  },
  noticeCard: {
    backgroundColor: "#E3F2FD",
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noticeContent: {
    flex: 1,
  },
  noticeTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  noticeDate: {
    fontSize: 10,
    color: "#666",
    marginBottom: 2,
  },
  noticeDescription: {
    fontSize: 12,
    color: "#333",
  },
  shareButton: {
    marginLeft: 10,
  },
  shareText: {
    fontSize: 12,
    color: "#666",
  },
});

export default NotificationScreen;
