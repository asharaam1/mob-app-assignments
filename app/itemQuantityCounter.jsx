import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ItemCounter from "@/components/assignment/ItemCounter";

const PRODUCTS = [
  {
    id: "1",
    name: "Zinger Burger",
    price: "Rs. 550",
    description: "Crispy chicken fillet with lettuce & mayo.",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Chicken Biryani",
    price: "Rs. 450",
    description: "Spicy basmati rice with tender chicken.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Club Sandwich",
    price: "Rs. 400",
    description: "Classic 3-layer sandwich with fries.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Margherita Pizza",
    price: "Rs. 800",
    description: "Cheesy delight with fresh basil and tomato.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Beef Steak",
    price: "Rs. 1200",
    description: "Juicy grilled beef steak with pepper sauce.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Shawarma Roll",
    price: "Rs. 300",
    description: "Middle Eastern wrap with chicken & garlic sauce.",
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "7",
    name: "Fish & Chips",
    price: "Rs. 650",
    description: "Crispy fried fish served with golden fries.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Veggie Salad",
    price: "Rs. 350",
    description: "Fresh greens with olives, cucumbers & feta.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "9",
    name: "Pasta Alfredo",
    price: "Rs. 700",
    description: "Creamy white sauce pasta with mushrooms.",
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "10",
    name: "Grilled Chicken",
    price: "Rs. 900",
    description: "Tender grilled chicken with herb seasoning.",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "11",
    name: "Chocolate Brownie",
    price: "Rs. 250",
    description: "Rich chocolate brownie with fudge topping.",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "12",
    name: "Falooda",
    price: "Rs. 200",
    description: "Traditional sweet drink with vermicelli & ice cream.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "13",
    name: "French Fries",
    price: "Rs. 180",
    description: "Crispy golden fries with ketchup.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=400&auto=format&fit=crop",
  },
];

const FoodMenu = () => {
  const router = useRouter();

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <View style={styles.counterContainer}>
        <ItemCounter initialQuantity={0} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ width: 40 }} />
        <Text style={styles.headerTitle}>Delicious Menu</Text>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => router.push("/checkout")}
        >
          <Ionicons name="cart" size={28} color="#6f2525" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.nextText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1a864",
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6f2525",
  },
  cartBtn: {
    position: "relative",
    padding: 5,
  },
  badge: {
    position: "absolute",
    right: -2,
    top: -2,
    backgroundColor: "#8b0000",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 12,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    paddingHorizontal: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  desc: {
    fontSize: 11,
    color: "#666666",
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f2525",
  },
  counterContainer: {
    justifyContent: "center",
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
  },
  nextText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FoodMenu;
