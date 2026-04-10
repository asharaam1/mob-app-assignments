import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    degree: "",
    university: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    Alert.alert(
      "Success!",
      "Your application has been submitted successfully.",
    );
    router.push("/"); // Submit ke baad home page pa chala jayega
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Job Application</Text>

        {/* Step Indicator (Visual Progress) */}
        <View style={styles.indicatorContainer}>
          {[1, 2, 3].map((s) => (
            <View key={s} style={styles.indicatorWrapper}>
              <View style={[styles.circle, step >= s && styles.activeCircle]}>
                <Text
                  style={[styles.circleText, step >= s && styles.activeText]}
                >
                  {s}
                </Text>
              </View>
              {s < 3 && (
                <View style={[styles.line, step > s && styles.activeLine]} />
              )}
            </View>
          ))}
        </View>

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <View style={styles.formCard}>
            <Text style={styles.stepTitle}>Step 1: Personal Info</Text>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="03xx-xxxxxxx"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
            />
          </View>
        )}

        {/* Step 2: Education Info */}
        {step === 2 && (
          <View style={styles.formCard}>
            <Text style={styles.stepTitle}>Step 2: Education</Text>
            <Text style={styles.label}>Degree</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. BS Computer Science"
              value={formData.degree}
              onChangeText={(text) =>
                setFormData({ ...formData, degree: text })
              }
            />
            <Text style={styles.label}>University</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. FAST, NUST, KU"
              value={formData.university}
              onChangeText={(text) =>
                setFormData({ ...formData, university: text })
              }
            />
          </View>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <View style={styles.formCard}>
            <Text style={styles.stepTitle}>Step 3: Review Details</Text>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryItem}>
                <Text style={styles.bold}>Name:</Text> {formData.name}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.bold}>Phone:</Text> {formData.phone}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.bold}>Degree:</Text> {formData.degree}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.bold}>University:</Text>{" "}
                {formData.university}
              </Text>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Submit Application</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Navigation Buttons */}
        <View style={styles.navigationRow}>
          {step > 1 && (
            <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
              <Ionicons name="arrow-back" size={20} color="#6f2525" />
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
          )}

          {step < 3 && (
            <TouchableOpacity style={styles.nextStepBtn} onPress={nextStep}>
              <Text style={styles.nextStepBtnText}>Next Step</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
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
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6f2525",
    textAlign: "center",
    marginBottom: 30,
  },
  // Step Indicator Styles
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  indicatorWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6f2525",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activeCircle: {
    backgroundColor: "#6f2525",
  },
  circleText: {
    color: "#6f2525",
    fontWeight: "bold",
  },
  activeText: {
    color: "#fff",
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: "#6f2525",
    opacity: 0.3,
  },
  activeLine: {
    opacity: 1,
  },
  // Form Styles
  formCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4a1919",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  // Summary Styles
  summaryBox: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryItem: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "#6f2525",
  },
  // Button Styles
  navigationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  backBtnText: {
    color: "#6f2525",
    fontWeight: "bold",
    fontSize: 16,
  },
  nextStepBtn: {
    backgroundColor: "#6f2525",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 10,
  },
  nextStepBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: "#2e7d32",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default MultiStepForm;
