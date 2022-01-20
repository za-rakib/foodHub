import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function OrderItem({ item }) {

  const { title, price } = item;

  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderText}>{title}</Text>
      <Text style={styles.orderPrice}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13,
    borderBottomColor: "#999",
    borderBottomWidth: 3,
  },
  orderText: {
    fontWeight: "700",
    fontSize: 16,
  },
  orderPrice: {
    opacity: 0.9,
    fontSize: 16,
  },
});
