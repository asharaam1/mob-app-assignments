import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ItemCounter = ({ initialQuantity = 0 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <View style={styles.counterRow}>
      <TouchableOpacity 
        style={styles.miniBtn} 
        onPress={() => quantity > 0 && setQuantity(quantity - 1)}
      >
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.quantityText}>{quantity}</Text>

      <TouchableOpacity 
        style={styles.miniBtn} 
        onPress={() => setQuantity(quantity + 1)}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#6f2525",
    paddingHorizontal: 5,
  },
  miniBtn: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6f2525",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#333333",
  },
});

export default ItemCounter;