import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const COURSES = [
  {
    id: "1",
    title: "Mobile App Development",
    code: "BIT-555",
    teacher: "Mr. Rishabh",
  },
  {
    id: "2",
    title: "Software Engineering",
    code: "BIT-551",
    teacher: "Ms. Nadia Murad",
  },
  {
    id: "3",
    title: "Artificial Intelligence",
    code: "BIT-556",
    teacher: "Ms. Ambreen",
  },
  {
    id: "4",
    title: "IT Infrastructure",
    code: "BIT-554",
    teacher: "Mr. Ghulam Ahmed",
  },
  {
    id: "5",
    title: "Analysis Of Algorithm",
    code: "BIT-552",
    teacher: "Dr. Muhammad Asad Abbasi",
  },
  {
    id: "6",
    title: "Theory Of Computation/Automata",
    code: "BIT-553",
    teacher: "Prof. Muhammad Sharif",
  },
];

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Courses</Text>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <View style={styles.codeBadge}>
              <Text style={styles.codeText}>{item.code}</Text>
            </View>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.teacherName}>Instructor: {item.teacher}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#c1a864", padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  codeBadge: {
    backgroundColor: "#6f2525",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
  },
  codeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  courseInfo: {
    marginLeft: 15,
    justifyContent: "center",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  teacherName: {
    fontSize: 13,
    color: "#666",
  },
});
