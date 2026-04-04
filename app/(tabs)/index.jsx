import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const stats = [
    {
      label: "Attendance",
      value: "85%",
      icon: "calendar",
    },
    {
      label: "Current GPA",
      value: "3.64",
      icon: "school",
    },
    {
      label: "Assignments",
      value: "15",
      icon: "document-text",
      link: "/assignments",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.greeting}>Hello, Asha!</Text>
        <Text style={styles.subGreeting}>Welcome back to your portal.</Text>
      </View>

      <View style={styles.statsRow}>
        {stats.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.statCard}
            onPress={() => {
              if (item.link) {
                router.push(item.link);
              }
            }}
          >
            <Ionicons name={item.icon} size={24} color="#6f2525" />
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activityItem}>
          <Ionicons name="notifications" size={20} color="#6f2525" />
          <Text style={styles.activityText}>
            Mid-term exams schedule posted.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1a864",
    padding: 20,
  },
  welcomeBox: {
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6f2525",
  },
  subGreeting: {
    fontSize: 16,
    color: "#4a1919",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "30%",
    borderWidth: 1,
    borderColor: "#6f2525",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6f2525",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 10,
    color: "#4a1919",
  },
  section: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 20,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#6f2525",
  },
  activityText: {
    color: "#4a1919",
    fontSize: 14,
  },
});
