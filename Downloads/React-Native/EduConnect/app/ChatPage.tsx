import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ChatPage = () => {
  const { id, name, subject } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerProfile}>
          <View style={styles.smallProfileImage} />
          <View>
            <Text style={styles.headerName}>{name || 'Teacher1'}</Text>
            <Text style={styles.headerSubject}>{subject || 'Subject'}</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.profileImageLarge} />
        <Text style={styles.teacherName}>{name || 'Teacher1'}</Text>
        <Text style={styles.subjectText}>{subject || 'Subject'}</Text>
        <Text style={styles.askDoubts}>Ask Doubts</Text>
      </View>

      {/* Chat Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask Doubts"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.voiceButton}>
          <Text style={styles.voiceButtonText}>🎤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#E8F3FF',
    padding: 15,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  headerSubject: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  profileImageLarge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E8E8E8',
    marginBottom: 20,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  subjectText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  askDoubts: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  voiceButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  voiceButtonText: {
    fontSize: 20,
  },
});

export default ChatPage;