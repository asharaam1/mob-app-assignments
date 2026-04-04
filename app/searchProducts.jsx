import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ProfessionalSearch = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); // Original Data from API
  const [filteredProducts, setFilteredProducts] = useState([]); // Display Data
  const [searchQuery, setSearchQuery] = useState("");

  // API Call to fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // Real-time Search Logic
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredProducts(products); // Agar search empty hai to saare products dikhao
    } else {
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.header}>Explore Store</Text>

        {/* Search Bar */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#6f2525" />
          <TextInput
            style={styles.input}
            placeholder="Search Products..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch("")}>
              <Ionicons name="close-circle" size={20} color="#6f2525" />
            </TouchableOpacity>
          )}
        </View>

        {/* Loading Spinner */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#6f2525"
            style={{ marginTop: 50 }}
          />
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={styles.noResult}>No products found!</Text>
            }
          />
        )}
      </View>

      {/* Footer Next Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/jobPortal")}
        >
          <Text style={styles.nextText}>Next</Text>
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
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    resizeMode: "contain",
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  productCategory: {
    fontSize: 12,
    color: "#888",
    textTransform: "capitalize",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6f2525",
    marginTop: 4,
  },
  addBtn: {
    backgroundColor: "#6f2525",
    padding: 8,
    borderRadius: 10,
  },
  noResult: {
    textAlign: "center",
    marginTop: 50,
    color: "#6f2525",
    fontSize: 16,
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(193, 168, 100, 0.9)",
  },
  nextBtn: {
    backgroundColor: "#6f2525",
    paddingHorizontal: 35,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfessionalSearch;
