import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MarksAnalyser = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState(""); // User input store karne ke liye
  const [stats, setStats] = useState({ highest: 0, lowest: 0, average: 0 });

  // Calculation Logic Function
  const calculateMarks = () => {
    Keyboard.dismiss(); // Keyboard band karne ke liye

    // String ko array mein badalna: "50, 60" -> [50, 60]
    const marksArray = inputText
      .split(",")
      .map((m) => parseFloat(m.trim()))
      .filter((m) => !isNaN(m)); // Khali ya galat inputs nikalne ke liye

    if (marksArray.length === 0) {
      alert("Please enter valid marks separated by commas!");
      return;
    }

    const highest = Math.max(...marksArray);
    const lowest = Math.min(...marksArray);
    const sum = marksArray.reduce((acc, curr) => acc + curr, 0);
    const average = (sum / marksArray.length).toFixed(2);

    setStats({ highest, lowest, average });
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <Ionicons name="analytics" size={60} color="#6f2525" />
        <Text style={styles.header}>Marks Analyser</Text>

        {/* Input Section */}
        <View style={styles.inputCard}>
          <Text style={styles.label}>Enter Marks (separated by commas):</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 55, 78, 90, 43"
            placeholderTextColor="#8b7355"
            keyboardType="numeric"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.calcBtn} onPress={calculateMarks}>
            <Text style={styles.calcBtnText}>Analyse Now</Text>
          </TouchableOpacity>
        </View>

        {/* Results Section */}
        <View style={styles.resultsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Highest</Text>
            <Text style={[styles.statValue, { color: "#2e7d32" }]}>
              {stats.highest}
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Lowest</Text>
            <Text style={[styles.statValue, { color: "#c62828" }]}>
              {stats.lowest}
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Average</Text>
            <Text style={styles.statValue}>{stats.average}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/assignments")}
        >
          <Text style={styles.nextText}>Back to List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#c1a864",
  },
  container: {
    padding: 20,
    paddingTop: 60,
    alignItems: "center",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 25,
  },
  inputCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    elevation: 5,
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    color: "#6f2525",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#c1a864",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#4a1919",
    marginBottom: 15,
  },
  calcBtn: {
    backgroundColor: "#6f2525",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  calcBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultsContainer: {
    width: "100%",
    gap: 15,
  },
  statBox: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 18,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6f2525",
  },
  statLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4a1919",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6f2525",
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MarksAnalyser;
