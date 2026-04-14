import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const BookSorter = () => {
  const router = useRouter();

  const initialBooks = [
    { id: "1", title: "React Native Guide", author: "John Doe", year: "2021" },
    {
      id: "2",
      title: "JavaScript Essentials",
      author: "Jane Smith",
      year: "2019",
    },
    { id: "3", title: "Alpha Coding", author: "Alan Turing", year: "2023" },
    { id: "4", title: "Mastering Expo", author: "Evan Bacon", year: "2022" },
    { id: "5", title: "Z-Library Secrets", author: "Unknown", year: "2018" },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [isAscending, setIsAscending] = useState(true);

  const sortBooks = () => {
    const sortedData = [...books].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      // Logic check: Agar ascending true hai toh toggle karke Descending (Z-A) karo
      if (isAscending) {
        return titleA < titleB ? 1 : -1;
      } else {
        return titleA > titleB ? 1 : -1;
      }
    });

    setBooks(sortedData);
    setIsAscending(!isAscending);
  };

  useEffect(() => {
    // Initial load par A-Z sort
    const initialSort = [...books].sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
    );
    setBooks(initialSort);
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.header}>Library Books</Text>

        <TouchableOpacity style={styles.sortBtn} onPress={sortBooks}>
          {/* In icons ka support har version mein hota hai */}
          <MaterialCommunityIcons
            name={
              isAscending
                ? "sort-alphabetical-ascending"
                : "sort-alphabetical-descending"
            }
            size={24}
            color="#fff"
          />
          <Text style={styles.sortBtnText}>
            {isAscending ? "Sorted: A to Z" : "Sorted: Z to A"}
          </Text>
        </TouchableOpacity>

        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <View style={styles.bookIcon}>
                <Ionicons name="book" size={24} color="#6f2525" />
              </View>
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookMeta}>
                  {item.author} • {item.year}
                </Text>
              </View>
            </View>
          )}
        />
      </View>

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
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 20,
    textAlign: "center",
  },
  sortBtn: {
    flexDirection: "row",
    backgroundColor: "#6f2525",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    elevation: 5,
  },
  sortBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  bookCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  bookIcon: {
    backgroundColor: "rgba(111, 37, 37, 0.1)",
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
  },
  bookMeta: {
    fontSize: 13,
    color: "#666",
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

export default BookSorter;
