import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>EDUCONNECT</Text>
        </View>
        <View style={styles.langSelector}>
          <Text>EN</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.studentName}>Student Name</Text>
            <Text style={styles.studentDetails}>07348632487632</Text>
            <Text style={styles.studentDetails}>Class   Div</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text>...</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.itemTitle}>Fees and Payment</Text>
          <Text style={styles.itemSubtitle}>Due 12 Dec</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.itemTitle}>App language</Text>
          <Text style={styles.itemSubtitle}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.itemTitle}>Timetables and Documents</Text>
          <Text style={styles.itemSubtitle}>Get the Schedule</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <Text style={styles.logo}>EDUCONNECT</Text>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.itemTitle}>Contact Team Support</Text>
          <Text style={styles.itemSubtitle}>1800 - 123 - 123</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.itemTitle}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6F3FF',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FF8C42",
  },
  langSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#E6F3FF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  profileInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '600',
  },
  studentDetails: {
    fontSize: 14,
    color: '#666',
  },
  moreButton: {
    padding: 8,
  },
  menuItem: {
    backgroundColor: '#E6F3FF',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    alignItems: 'center',
    paddingVertical: 24,
  }
});

export default UserProfile;