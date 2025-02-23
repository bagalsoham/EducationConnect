import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import Header from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Event = () => {
  const { t } = useTranslation("common");
  const [modalVisible, setModalVisible] = useState(false);

  const classes = ["Class 1", "Class 2", "Class 3"];
  const students = ["Student 1", "Student 2", "Student 3"];

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Event Title */}

        {/* Notification Input & Button */}
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder={t("Send Notification")}
            placeholderTextColor="gray"
            editable={false}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>{t("Select Whom to send")}</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Event Section */}
        <Text style={styles.sectionTitle}>{t("Upcoming Event")}</Text>
        <View style={styles.box}>
          <Text style={styles.noEventText}>{t("No Upcoming events")}</Text>
        </View>

        {/* Modal Overlay */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{t("Send")}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={28} color="red" />
                </TouchableOpacity>
              </View>

              {/* Search Box */}
              <TextInput style={styles.searchBox} placeholder={t("Search")} />

              {/* Class List */}
              <Text style={styles.sectionTitle}>{t("Classes")}</Text>
              <FlatList
                data={classes}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <View style={styles.listItem}>
                    <Text style={styles.itemText}>{item}</Text>
                    <View style={styles.buttonGroup}>
                      <TouchableOpacity style={styles.selectButton}>
                        <Text>{t("Select")}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.sendButton}>
                        <Text>{t("Send")}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />

              {/* People List */}
              <Text style={styles.sectionTitle}>{t("People")}</Text>
              <FlatList
                data={students}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <View style={styles.listItem}>
                    <Text style={styles.itemText}>{item}</Text>
                    <View style={styles.buttonGroup}>
                      <TouchableOpacity style={styles.selectButton}>
                        <Text>{t("Select")}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.sendButton}>
                        <Text>{t("Send")}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  box: {
    backgroundColor: "#D6EAF8",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    color: "gray",
  },
  button: {
    backgroundColor: "#0066CC",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noEventText: {
    textAlign: "center",
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchBox: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D6EAF8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 5,
  },
  selectButton: {
    backgroundColor: "#ADD8E6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: "#0066CC",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Event;
