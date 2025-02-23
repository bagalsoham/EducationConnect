import { Tabs } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t } = useTranslation();
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
          borderTopColor: "#E0E0E0",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false, // Hide header globally for all screens
      }}
    >
      {/* Dashboard Tab */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Messages Tab - Ensure there's only ONE messages tab */}
      <Tabs.Screen
        name="messages" // Ensure this matches your actual screen file name
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Event Tab */}
      <Tabs.Screen
        name="event"
        options={{
          title: "Event",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="teacherProfile"
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
