import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const themeContainer = {
    backgroundColor: isDarkMode ? "#6f2525" : "#c1a864",
  };

  const themeText = {
    color: isDarkMode ? "#c1a864" : "#6f2525",
  };

  const themeBorder = {
    borderColor: isDarkMode ? "#c1a864" : "#6f2525",
  };

  const themeButton = {
    backgroundColor: isDarkMode ? "#c1a864" : "#6f2525",
  };

  const themeButtonText = {
    color: isDarkMode ? "#6f2525" : "#ffffff",
  };

  return (
    <SafeAreaView style={[styles.container, themeContainer]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View style={styles.content}>
        <Text style={[styles.header, themeText]}>
          {isDarkMode ? "Dark Mode is ON" : "Light Mode is ON"}
        </Text>

        <Text style={[styles.description, themeText]}>
          Toggle the switch below to change the app's theme. Dynamic styles will
          update the background and text color instantly.
        </Text>

        <View style={[styles.row, themeBorder]}>
          <Text style={[styles.label, themeText]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#9a9a30" }}
            thumbColor={isDarkMode ? "#c1a864" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, themeButton]}
          onPress={() => router.push("/itemQuantityCounter")}
        >
          <Text style={[styles.btnText, themeButtonText]}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn: {
    paddingHorizontal: 25,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
  },
});

export default DarkModeToggle;
