import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons, Ionicons,AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { 
          backgroundColor: "#FFF", 
          paddingBottom: 5, 
          height: 60, 
          borderTopWidth: 1, 
          borderTopColor: "#E0E0E0" 
        },
        tabBarLabelStyle: { 
          fontSize: 12, 
          fontWeight: "500" 
        },
        headerShown: false, // Hide header globally for all screens
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Announcements Tab */}
      <Tabs.Screen
        name="notification"
        options={{
          title: "Announcement",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="campaign" size={24} color={color} />
          ),
        }}
      />

      {/* Chat Tab */}
      <Tabs.Screen
        name="contactTeachers"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />

      
    </Tabs>
  );
}
