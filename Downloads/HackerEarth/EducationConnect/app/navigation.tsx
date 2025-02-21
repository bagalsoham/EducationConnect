import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./(tabs)/index";
import UserDashboard from "./(tabs)/UserDashboard";
import AttendanceScreen from "./AttendanceScreen";
import TestScreen from "./TestScreen"; // Import TestScreen

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} options={{ headerShown: false }} />

        {/* Attendance Screen with Back Button */}
        <Stack.Screen 
          name="AttendanceScreen" 
          component={AttendanceScreen} 
          options={({ navigation }) => ({
            title: "Attendance",
            headerStyle: { backgroundColor: "#3b82f6" },
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
        />

        {/* Test Screen with Back Button */}
        <Stack.Screen 
          name="TestScreen" 
          component={TestScreen} 
          options={({ navigation }) => ({
            title: "Test Score",
            headerStyle: { backgroundColor: "#3b82f6" },
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;