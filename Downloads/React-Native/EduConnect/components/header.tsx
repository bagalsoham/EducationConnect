import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>EDUCONNECT</Text>
      </View>

      {/* Language Selector */}
      <View style={styles.languageSelector}>
        <Text style={styles.languageText}>EN</Text>
        <Image
          source={{ uri: "https://flagcdn.com/w320/gb.png" }}
          style={styles.flagIcon}
        />
      </View>
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
    backgroundColor: "#fff", // Add background if needed
  },
  logoContainer: {
    padding: 5,
  },
  logo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8C42",
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    fontSize: 14,
    marginRight: 5,
  },
  flagIcon: {
    width: 20,
    height: 15,
  },
});

export default Header;
