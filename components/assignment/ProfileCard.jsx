import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProfileCard = ({ name, bio, avatarUrl, followerCount }) => {
  //   const DATA = {
  //     id: "1",
  //     name: "Sarah Jenkins",
  //     bio: "Full-stack Developer & UI Enthusiast. Love to build apps with React Native.",
  //     avatarUrl:
  //       "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  //     followerCount: "12.5K",
  //   };

  return (
    <View style={styles.card}>
      {/* Profile Image with Border */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.bioText} numberOfLines={2}>
          {bio}
        </Text>

        {/* Follower Count Section */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.countText}>{followerCount}</Text>
            <Text style={styles.label}>Followers</Text>
          </View>

          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followBtnText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: "#6f2525",
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#6f2525",
    borderRadius: 40,
    padding: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  bioText: {
    fontSize: 13,
    color: "#666",
    marginVertical: 4,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  statBox: {
    flexDirection: "column",
  },
  countText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f2525",
  },
  label: {
    fontSize: 10,
    color: "#888",
    textTransform: "uppercase",
  },
  followBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
  },
  followBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ProfileCard;
