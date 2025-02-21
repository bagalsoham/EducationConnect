import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the navigation types
type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const countryCodes = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "China", code: "+86" },
];

const LoginScreen: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>EDUCONNECT</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login with Phone</Text>

        <View style={styles.phoneContainer}>
          <View style={styles.countryPicker}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={(itemValue) => setSelectedCountry(itemValue)}
              style={styles.picker}
            >
              {countryCodes.map((country) => (
                <Picker.Item 
                  key={country.code} 
                  label={`${country.name} (${country.code})`} 
                  value={country.code} 
                />
              ))}
            </Picker>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#666"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Verify & Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF8C42",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#E6F3FF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  loginText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  phoneContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  countryPicker: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "40%",
    marginRight: 10,
    height: 50,
    justifyContent: "center",
  },
  picker: {
    height: 50,
  },
  phoneInput: {
    flex: 1,
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 2,
  },
  button: {
    height: 50,
    backgroundColor: "#A8E6CE",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  resendButton: {
    marginTop: 15,
    alignItems: "center",
  },
  resendText: {
    color: "#666",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;