import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null); // Interval ID ko save karne ke liye
  const router = useRouter();

  // Timer logic: Jab seconds 0 ho jaye to alert dikhaye aur timer stop kare
  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerRef.current);
      setIsActive(false);
      Alert.alert("Time Up!", "Well Done! 💪", [
        { text: "OK", onPress: resetTimer },
      ]);
    }
  }, [seconds]);

  const startTimer = () => {
    if (isActive) return; // Pehle se chal raha ho to kuch na kare
    setIsActive(true);
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setSeconds(60);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FITNESS TIMER</Text>

      <View style={styles.timerCircle}>
        <Text style={styles.timerText}>{seconds}</Text>
        <Text style={styles.unitText}>Seconds left</Text>
      </View>

      <View style={styles.controlsRow}>
        {/* Start Button */}
        {!isActive ? (
          <TouchableOpacity style={styles.controlBtn} onPress={startTimer}>
            <Text style={styles.btnText}>START</Text>
          </TouchableOpacity>
        ) : (
          /* Pause Button (Sirf tab dikhe jab active ho) */
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#4a1919" }]}
            onPress={pauseTimer}
          >
            <Text style={styles.btnText}>PAUSE</Text>
          </TouchableOpacity>
        )}

        {/* Reset Button */}
        <TouchableOpacity style={styles.resetBtn} onPress={resetTimer}>
          <Text style={styles.resetBtnText}>RESET</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/")}
        >
          <Text style={styles.nextBtnText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1a864",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 40,
    letterSpacing: 2,
  },
  timerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: "#6f2525",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  timerText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#6f2525",
  },
  unitText: {
    fontSize: 14,
    color: "#4a1919",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  controlsRow: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  controlBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 30,
    minWidth: 120,
    alignItems: "center",
  },
  resetBtn: {
    borderWidth: 2,
    borderColor: "#6f2525",
    paddingHorizontal: 35,
    paddingVertical: 13,
    borderRadius: 30,
    minWidth: 120,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  resetBtnText: {
    color: "#6f2525",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    right: 20,
  },
  nextBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  nextBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CountdownTimer;
