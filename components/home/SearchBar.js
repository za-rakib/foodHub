import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ setSearchValue, searchValue }) {
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        blurOnSubmit
        autoCorrect={false}
        keyboardType="default"
        onChangeText={setSearchValue}
        value={searchValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "#eee",
    color: "black",
    width: "100%",
    padding: 10,
    borderRadius: 50,
    fontSize: 16,
    alignItems: "center",
  },
});
