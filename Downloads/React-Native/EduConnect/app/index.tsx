import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter(); // Expo Router Hook

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>EDUCONNECT</Text>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          maxLength={10}
        />

        {/* OTP Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#666"
          keyboardType="numeric"
          maxLength={4}
        />

        {/* Login Parent Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/(parent)/dashboard')}>
          <Text style={styles.loginButtonText}>Login Parent</Text>
        </TouchableOpacity>

        {/* Login Teacher Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/(teachers)/dashboard')}>
          <Text style={styles.loginButtonText}>Login Teachers</Text>
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
  logoContainer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF8C42',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#A8E6CE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;
