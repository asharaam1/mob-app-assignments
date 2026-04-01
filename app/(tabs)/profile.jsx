import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const menuItems = [
    { name: "My Results", icon: "trophy-outline" },
    { name: "Fee Details", icon: "card-outline" },
    { name: "Settings", icon: "settings-outline" },
    { name: "Assigments", icon: "document-text", link: "/assignments" },
    { name: "Logout", icon: "log-out-outline", color: "#8b0000" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={60} color="#c1a864" />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#dcdcdc",
              borderRadius: 12,
              padding: 4,
            }}
          >
            <Ionicons name="folder-outline" size={16} color="#c1a864" />
          </View>
        </View>
        <Text style={styles.userName}>Asha Ram</Text>
        <Text style={styles.userID}>Reg ID: BBSU/IT/BSIT/24/025</Text>
      </View>

      <View style={styles.menuBox}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.link) {
                router.push(item.link);
              }
            }}
          >
            <View style={styles.menuLeft}>
              <Ionicons
                name={item.icon}
                size={22}
                color={item.color || "#6f2525"}
              />
              <Text
                style={[styles.menuText, { color: item.color || "#4a1919" }]}
              >
                {item.name}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#6f2525" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1a864",
    padding: 20,
  },
  headerBox: {
    alignItems: "center",
    marginVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6f2525",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6f2525",
  },
  userID: {
    fontSize: 14,
    color: "#4a1919",
    fontStyle: "italic",
  },
  menuBox: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 15,
    padding: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#6f2525",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
