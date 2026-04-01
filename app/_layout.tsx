import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
        <Stack.Screen name="stForm" options={{ headerTitle: "Student Form" }} />
        <Stack.Screen name="noticeBoard" options={{ headerTitle: "Notice Board" }} />
        <Stack.Screen name="darkLightMode" options={{ headerTitle: "Dark/Light Mode" }} />
        <Stack.Screen name="itemQuantityCounter" options={{ headerTitle: "Item Quantity" }} />
        <Stack.Screen name="assignments" options={{ headerTitle: "Todo App" }} />
      </Stack>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
  );
}
