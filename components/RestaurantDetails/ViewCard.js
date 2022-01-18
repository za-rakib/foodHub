import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ViewCard() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.component}>
          <Text style={styles.text}>View Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    flexDirection: 'row',
    position: "absolute",
    bottom: 100,
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
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});


