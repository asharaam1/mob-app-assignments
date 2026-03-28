import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Validation: 8 chars, 1 number, 1 symbol
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  const isFormValid =
    name.trim() !== "" && email.trim().includes("@") && isPasswordValid;

  const handleSubmit = () => {
    if (isFormValid) {
      Alert.alert("Success", "Registration Successful!");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>STUDENT FORM</Text>

        {/* Name Field */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#6f252588"
        />

        {/* Email Field */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="example@mail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#6f252588"
        />

        {/* Password Field */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[
            styles.input,
            password.length > 0 && !isPasswordValid && styles.inputError,
          ]}
          placeholder="Must be strong"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#6f252588"
        />

        {/* Error Hint */}
        {password.length > 0 && !isPasswordValid && (
          <Text style={styles.errorHint}>8+ chars, 1 number, 1 symbol</Text>
        )}

        <TouchableOpacity
          style={[styles.btn, !isFormValid && styles.btnDisabled]}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/assignments")}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#c1a864",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 25,
    color: "#6f2525",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 5,
    marginLeft: 2,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: "#6f2525",
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
  },
  inputError: {
    borderColor: "#8b0000",
  },
  errorHint: {
    color: "#6f2525",
    fontSize: 11,
    marginTop: -12,
    marginBottom: 12,
    fontStyle: "italic",
  },
  btn: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: "#6f2525",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnDisabled: {
    opacity: 0.4,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default StudentForm;
