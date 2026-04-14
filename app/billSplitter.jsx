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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const BillSplitter = () => {
  const router = useRouter();

  // States for inputs
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("0"); // Default tip 0
  const [result, setResult] = useState(null);

  // Calculation Logic
  const calculateShare = () => {
    Keyboard.dismiss();

    const billAmt = parseFloat(bill);
    const numPeople = parseInt(people);
    const tipPct = parseFloat(tip) || 0;

    // Validation: Bill and People must be valid
    if (isNaN(billAmt) || billAmt <= 0) {
      alert("Please enter a valid bill amount.");
      return;
    }
    if (isNaN(numPeople) || numPeople < 1) {
      alert("Number of people must be at least 1.");
      return;
    }

    // Formula: share = (bill + (bill * tip / 100)) / people
    const totalTip = (billAmt * tipPct) / 100;
    const totalBill = billAmt + totalTip;
    const share = totalBill / numPeople;

    setResult({
      perPerson: share.toFixed(2),
      totalWithTip: totalBill.toFixed(2),
    });
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerIcon}>
          <MaterialCommunityIcons
            name="calculator-variant"
            size={60}
            color="#6f2525"
          />
        </View>
        <Text style={styles.header}>Bill Splitter</Text>

        <View style={styles.card}>
          {/* Bill Amount Input */}
          <Text style={styles.label}>Total Bill Amount (Rs.)</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="cash-outline" size={20} color="#6f2525" />
            <TextInput
              style={styles.input}
              placeholder="0.00"
              keyboardType="decimal-pad"
              value={bill}
              onChangeText={setBill}
            />
          </View>

          {/* Number of People Input */}
          <Text style={styles.label}>Number of People</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="people-outline" size={20} color="#6f2525" />
            <TextInput
              style={styles.input}
              placeholder="How many people?"
              keyboardType="number-pad"
              value={people}
              onChangeText={setPeople}
            />
          </View>

          {/* Tip Percentage Input */}
          <Text style={styles.label}>Tip Percentage (%)</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="percent-outline"
              size={20}
              color="#6f2525"
            />
            <TextInput
              style={styles.input}
              placeholder="Optional tip"
              keyboardType="number-pad"
              value={tip}
              onChangeText={setTip}
            />
          </View>

          <TouchableOpacity style={styles.calcBtn} onPress={calculateShare}>
            <Text style={styles.calcBtnText}>Calculate Share</Text>
          </TouchableOpacity>
        </View>

        {/* Result Display */}
        {result && (
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Each Person Pays:</Text>
            <Text style={styles.resultValue}>Rs.{result.perPerson}</Text>
            <View style={styles.divider} />
            <Text style={styles.totalSubText}>
              Total with tip: Rs.{result.totalWithTip}
            </Text>
          </View>
        )}
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
  headerIcon: {
    marginBottom: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 8,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c1a864",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 45,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  calcBtn: {
    backgroundColor: "#6f2525",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },
  calcBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultCard: {
    backgroundColor: "#6f2525",
    width: "100%",
    padding: 25,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    elevation: 10,
  },
  resultLabel: {
    color: "#c1a864",
    fontSize: 16,
    fontWeight: "600",
  },
  resultValue: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    marginVertical: 5,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "rgba(193, 168, 100, 0.3)",
    marginVertical: 10,
  },
  totalSubText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(193, 168, 100, 0.9)",
  },
  nextBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 25,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BillSplitter;
