import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ASSIGNMENTS = [
  { id: "1", title: "To-Do List App", route: "/todoApp" },
  { id: "2", title: "Student Registration Form", route: "/stForm" },
  { id: "3", title: "Notice Board Screen", route: "/noticeBoard" },
  { id: "4", title: "Dark Mode Toggle", route: "/darkLightMode" },
  { id: "5", title: "Item Quantity Counter", route: "/itemQuantityCounter" },
  { id: "6", title: "Student Portal Tab Navigation", route: "/(tabs)" },
  { id: "7", title: "Countdown Timer", route: "/fitnessApp" },
  { id: "8", title: "Profile Card Component", route: "/profileScreen" },
  { id: "9", title: "Real-Time Search Bar", route: "/searchProducts" },
  { id: "10", title: "Multi-Step Application Form", route: "/multiStepForm" },
  { id: "11", title: "Student Marks Analyser", route: "/marksAnalyser" },
  { id: "12", title: "Password Strength Checker", route: "/passwordChecker" },
  { id: "13", title: "Book List Sorter", route: "/bookSorter" },
  { id: "14", title: "Quiz Score Calculator", route: "/quizApp" },
  { id: "15", title: "Bill Splitting Calculator", route: "/billSplitter" },
];

export default function AssignmentsScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(item.route)}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.idText}>{item.id}</Text>
        </View>
        <Text style={styles.assignmentTitle}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#6f2525" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Assignments Hub</Text>
        <Text style={styles.headerSubtitle}>BBSUL Student Portal Tasks</Text>
      </View>

      <FlatList
        data={ASSIGNMENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1a864",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 25,
    backgroundColor: "#6f2525",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#c1a864",
    textAlign: "center",
    marginTop: 4,
    fontWeight: "500",
  },
  listPadding: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#6f2525",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  idText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
  assignmentTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4a1919",
    flex: 1,
  },
});
