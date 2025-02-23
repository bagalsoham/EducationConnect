import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Header from "@/components/header";
import "../../i18n";
import { useTranslation } from "react-i18next";

const teachers = [
  { id: "1", name: "Teacher A", subject: "Mathematics" },
  { id: "2", name: "Teacher B", subject: "Science" },
  { id: "3", name: "Teacher C", subject: "English" },
  { id: "4", name: "Teacher D", subject: "History" },
];

const ContactTeachers = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/ChatPage",
                params: { id: item.id, name: item.name, subject: item.subject },
              })
            }
          >
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.teacherName}>{item.name}</Text>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.askForDoubts}>{t("Ask For Doubts")}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ContactTeachers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  textContainer: {
    marginLeft: 15,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subject: {
    fontSize: 14,
    color: "#555",
  },
  askForDoubts: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 5,
  },
});
