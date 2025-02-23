import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from "@/components/header";
import { useRouter } from 'expo-router';

const messages = [
  { id: 1, sender: 'ABC XYZ', message: 'abcdefghijklmnopqrstuvwxyz' },
  { id: 2, sender: 'ABC XYZ', message: 'abcdefghijklmnopqrstuvwxyz' },
  { id: 3, sender: 'ABC XYZ', message: 'abcdefghijklmnopqrstuvwxyz' },
];

const Messages = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Messages</Text>

      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((msg, index) => (
          <TouchableOpacity 
            key={msg.id} 
            style={[styles.messageBox, index % 2 !== 0 && styles.alternate]}
            onPress={() => router.push({ pathname: "/ChatPage", params: { } })}
          >
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.sender}>{msg.sender}</Text>
              <Text style={styles.message} numberOfLines={1}>{msg.message}</Text> {/* Limit text to one line */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 15,
  },
  messageContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Android shadow
  },
  alternate: {
    backgroundColor: '#E8F3FF',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
});

export default Messages;
