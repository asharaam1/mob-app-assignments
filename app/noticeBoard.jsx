import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // my created Mocki API dummy data available at /data/db.json
  const API_URL = "https://mocki.io/v1/df5c30d3-e8be-4242-afc8-d8ad6986456b";

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setNotices(data.notices);
    } catch (err) {
      Alert.alert("Error", "Failed to load custom notices.");
    } finally {
      setLoading(false);
    }
  };

  const renderNotice = ({ item }) => (
    <View style={styles.noticeCard}>
      {/* Category Tag */}
      <View style={styles.tagRow}>
        <Text style={styles.categoryTag}>{item.category}</Text>
        <Text style={styles.forText}>For: {item.for}</Text>
      </View>

      <Text style={styles.noticeTitle}>{item.title}</Text>

      <Text style={styles.noticeBody}>{item.content}</Text>

      <View style={styles.cardFooter}>
        <Text style={styles.dateText}>
          Posted: {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6f2525" />
        <Text style={styles.loadingLabel}>Loading University Data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>UNIVERSITY NOTICES</Text>

      <FlatList
        data={notices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotice}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/darkLightMode")}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    textAlign: "center",
    marginBottom: 20,
    color: "#6f2525",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c1a864",
  },
  loadingLabel: {
    marginTop: 10,
    color: "#6f2525",
    fontWeight: "bold",
  },
  noticeCard: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    padding: 15,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: "#6f2525",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(111, 37, 37, 0.1)",
  },
  tagRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryTag: {
    fontSize: 10,
    backgroundColor: "#6f2525",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    fontWeight: "bold",
    overflow: "hidden",
  },
  forText: {
    fontSize: 10,
    color: "#4a1919",
    fontWeight: "600",
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4a1919",
    marginBottom: 5,
  },
  noticeBody: {
    fontSize: 14,
    color: "#333",
    lineHeight: 18,
  },
  cardFooter: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "rgba(111, 37, 37, 0.2)",
    paddingTop: 5,
  },
  dateText: {
    fontSize: 10,
    color: "#6f2525",
    fontStyle: "italic",
    textAlign: "right",
  },
  btn: {
    paddingHorizontal: 25,
    height: 40,
    backgroundColor: "#6f2525",
    justifyContent: "center",
    borderRadius: 5,
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

export default NoticeBoard;
