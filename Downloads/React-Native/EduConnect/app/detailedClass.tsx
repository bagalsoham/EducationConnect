import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Header from "@/components/header";
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const DetailedClass = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample student data
  const students = Array(13).fill(null).map((_, index) => ({
    rollNo: `Roll No.`,
    name: 'Student Name',
    number: 'Number'
  }));
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />

      {/* Class Header */}
      <View style={styles.classHeader}>
        <FontAwesome onPress={() => router.back()} name="arrow-left" size={20} color="black" />
        <Text style={styles.classTitle}>Class: X</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Roll No.</Text>
        <Text style={[styles.headerCell, styles.nameCell]}>Student Name</Text>
        <Text style={styles.headerCell}>Number</Text>
      </View>

      {/* Student List */}
      <ScrollView style={styles.tableContainer}>
        {students.map((student, index) => (
          <View 
            key={index} 
            style={[
              styles.tableRow,
              index === students.length - 1 && styles.lastRow
            ]}
          >
            <Text style={styles.cell}>{student.rollNo}</Text>
            <Text style={[styles.cell, styles.nameCell]}>{student.name}</Text>
            <Text style={styles.cell}>{student.number}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  classHeader: {
    backgroundColor: '#4A90E2',
    padding: 15,
    margin: 15,
    borderRadius: 8,
  },
  classTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  searchContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  tableContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 10,
    marginHorizontal: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerCell: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  nameCell: {
    flex: 2,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#E8F3FF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lastRow: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cell: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
});

export default DetailedClass;