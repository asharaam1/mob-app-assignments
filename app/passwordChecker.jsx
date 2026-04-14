import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");

  // 1. Pure JavaScript Function for Strength Evaluation
  const evaluateStrength = (pass) => {
    if (pass.length === 0)
      return { label: "Enter Password", color: "#8b7355", width: "0%" };

    const hasDigit = /\d/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

    // Strong: > 10 chars + digit + special
    if (pass.length > 10 && hasDigit && hasSpecial) {
      return { label: "Strong", color: "#2e7d32", width: "100%" };
    }

    // Medium: 6 to 10 chars + digit
    if (pass.length >= 6 && hasDigit) {
      return { label: "Medium", color: "#ef6c00", width: "60%" };
    }

    // Weak: Default / less than 6
    return { label: "Weak", color: "#c62828", width: "30%" };
  };

  const strength = evaluateStrength(password);

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.iconCircle}>
          <Ionicons name="shield-checkmark" size={50} color="#6f2525" />
        </View>

        <Text style={styles.header}>Security Check</Text>
        <Text style={styles.subHeader}>
          Check your password strength in real-time
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>Create Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#6f2525"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Type your password..."
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Strength Indicator Bar */}
          <View style={styles.barContainer}>
            <View style={[styles.barBackground, { width: "100%" }]}>
              <View
                style={[
                  styles.barActive,
                  { width: strength.width, backgroundColor: strength.color },
                ]}
              />
            </View>
            <Text style={[styles.strengthText, { color: strength.color }]}>
              {strength.label}
            </Text>
          </View>

          {/* Requirements Checklist */}
          <View style={styles.checklist}>
            <Requirement
              met={password.length >= 6}
              text="At least 6 characters"
            />
            <Requirement
              met={/\d/.test(password)}
              text="At least one digit (0-9)"
            />
            <Requirement
              met={/[!@#$%^&*]/.test(password)}
              text="One special character (Strong only)"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Reusable Requirement Component
const Requirement = ({ met, text }) => (
  <View style={styles.requirementItem}>
    <Ionicons
      name={met ? "checkmark-circle" : "ellipse-outline"}
      size={16}
      color={met ? "#2e7d32" : "#8b7355"}
    />
    <Text
      style={[styles.requirementText, { color: met ? "#2e7d32" : "#4a1919" }]}
    >
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#c1a864",
  },
  container: {
    padding: 25,
    paddingTop: 60,
    alignItems: "center",
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.4)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6f2525",
  },
  subHeader: {
    fontSize: 14,
    color: "#4a1919",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    elevation: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c1a864",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  barContainer: {
    marginTop: 20,
  },
  barBackground: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 3,
    overflow: "hidden",
  },
  barActive: {
    height: "100%",
    borderRadius: 3,
  },
  strengthText: {
    textAlign: "right",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
  checklist: {
    marginTop: 20,
    gap: 8,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  requirementText: {
    fontSize: 13,
  },
});

export default PasswordChecker;
