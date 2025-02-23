// /components/header.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { useTranslation } from "react-i18next";

const languageOptions = [
  {
    code: "en",
    short: "En",
    full: "English",
    flagUri: "https://flagcdn.com/w320/gb.png",
  },
  {
    code: "hi",
    short: "Hi",
    full: "हिन्दी",
    flagUri: "https://flagcdn.com/w320/in.png",
  },
  {
    code: "mr",
    short: "Mr",
    full: "मराठी",
    flagUri: "https://flagcdn.com/w320/in.png",
  },
  {
    code: "gu",
    short: "Gu",
    full: "ગુજરાતી",
    flagUri: "https://flagcdn.com/w320/in.png",
  },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions.find((opt) => opt.code === i18n.language) ||
      languageOptions[0]
  );

  const changeLanguage = (langOption: {
    code: string;
    short: string;
    full: string;
    flagUri: string;
  }) => {
    setSelectedLanguage(langOption);
    i18n.changeLanguage(langOption.code);
    setModalVisible(false);
  };

  return (
    <View style={styles.header}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{t("EDUCONNECT")}</Text>
      </View>

      {/* Language Display */}
      <TouchableOpacity
        style={styles.languageDisplay}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.languageShort}>{selectedLanguage.short}</Text>
        <Image
          source={{ uri: selectedLanguage.flagUri }}
          style={styles.flagIcon}
        />
      </TouchableOpacity>

      {/* Language Selection Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={languageOptions}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => changeLanguage(item)}
                >
                  <Image
                    source={{ uri: item.flagUri }}
                    style={styles.modalFlag}
                  />
                  <Text style={styles.modalText}>{item.full}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: { padding: 5 },
  logo: { fontSize: 16, fontWeight: "bold", color: "#FF8C42" },
  languageDisplay: { flexDirection: "row", alignItems: "center" },
  languageShort: { fontSize: 14, marginRight: 5 },
  flagIcon: { width: 20, height: 15 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 200,
    padding: 10,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  modalFlag: { width: 30, height: 20, marginRight: 10 },
  modalText: { fontSize: 16 },
});

export default Header;
