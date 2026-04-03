import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ProfileCard from "../components/assignment/ProfileCard";
import { useRouter } from "expo-router";

export default function ProfilesScreen() {
  const router = useRouter();
  const DATA = {
    id: "1",
    name: "Sarah Jenkins",
    bio: "Full-stack Developer & UI Enthusiast. Love to build apps with React Native.",
    avatarUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    followerCount: "12.5K",
  };
  const DATA2 = [
    {
      id: "3",
      name: "M. Hassan",
      bio: "Student at University. Learning App Development with Expo & Firebase.",
      avatarUrl:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      followerCount: "2.4K",
    },
  ];

  return (
    <View style={styles.page}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Community Profiles</Text>

        {/* Card 1: Static Props Rendering */}
        <ProfileCard
          name={DATA.name}
          bio={DATA.bio}
          avatarUrl={DATA.avatarUrl}
          followerCount={DATA.followerCount}
        />

        {/* Card 2: Hardcoded Props Rendering*/}
        <ProfileCard
          name="Alex Thompson"
          bio="Digital Artist and Photographer. Capturing moments through the lens."
          avatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
          followerCount="8.9K"
        />

        {/* Card 3: (Dynamic List Rendering) mapping method to render multiple cards */}
        {DATA2.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            bio={profile.bio}
            avatarUrl={profile.avatarUrl}
            followerCount={profile.followerCount}
          />
        ))}

        {/*   Other Methods to render components/cards: - Conditional Rendering - Children Props - API Data Rendering - Higher-Order Component - Render Props Pattern (API fetch data once) */}
      </ScrollView>
      {/* Navigation Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/searchProducts")} //This will be our next project page.
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#c1a864",
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6f2525",
    textAlign: "center",
    marginBottom: 30,
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(193, 168, 100, 0.9)",
  },
  nextBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 30,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  nextText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
