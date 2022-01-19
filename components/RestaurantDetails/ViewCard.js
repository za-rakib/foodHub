import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCard() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((sum, item) => sum + item, 0);

  //   const totalUsd = total.toLocaleString("en", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  //console.log("total", totalUsd);
  return (
    <>
      {total ? (
        <View style={styles.screen}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.component}>
              <Text style={styles.text}>View Card</Text>
              <Text style={styles.text}> ${total}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    zIndex: 999,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  component: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 13,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
  },
});
