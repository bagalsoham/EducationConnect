import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "@/components/header";
import "../../i18n";
import { useTranslation } from "react-i18next";

const ParentStudent = () => {
  const { t } = useTranslation();
  const MoreIcon = () => (
    <View style={styles.moreIconContainer}>
      <View style={styles.moreDot} />
      <View style={styles.moreDot} />
      <View style={styles.moreDot} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.studentName}>{t("Student Name")}</Text>
          <Text style={styles.studentId}>07346632487632</Text>
          <Text style={styles.classInfo}>{t("Class   Div")}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <MoreIcon />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>{t("Fees and Payment")}</Text>
          <Text style={styles.menuSubtitle}>{t("Due 12 Dec")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>{t("App language")}</Text>
          <Text style={styles.menuSubtitle}>{t("English")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>{t("Timetables and Documents")}</Text>
          <Text style={styles.menuSubtitle}>{t("Get the Schedule")}</Text>
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.logoContainer}>
          {/* <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          /> */}
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>{t("Contact Team Support")}</Text>
          <Text style={styles.menuSubtitle}>1800 - 123 - 123</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, styles.logoutItem]}
          onPress={() => console.log("Logging out...")}
        >
          <Text style={styles.menuTitle}>{t("Logout")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: "#E8F3FF",
    padding: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  profileInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 2,
  },
  studentId: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 2,
  },
  classInfo: {
    fontSize: 14,
    color: "#666666",
  },
  moreButton: {
    padding: 5,
  },
  moreIconContainer: {
    flexDirection: "column", // ✅ Fixed issue
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
  },
  moreDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#666666",
    marginVertical: 2,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
  menuItem: {
    backgroundColor: "#E8F3FF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: "#666666",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  logo: {
    width: 150,
    height: 40,
  },
  logoutItem: {
    marginTop: 5,
  },
});

export default ParentStudent;
