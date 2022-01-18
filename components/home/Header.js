import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.header}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, setActiveTab, activeTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 50,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? "white" : "black",
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
