import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Divider from "react-native-divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";

//fake data
const foods = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    title: "Steak",
    description: "A steak is a meat generally sliced across the muscle fibers.",
    price: "$30",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
    title: "Pizza",
    description:
      "A flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread",
    price: "$20",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    title: "Steak",
    description: "A steak is a meat generally sliced across the muscle fibers.",
    price: "$30",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    title: "Steakhhhhhh",
    description: "A steak is a meat generally sliced across the muscle fibers.",
    price: "$30",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    title: "Steak",
    description: "A steak is a meat generally sliced across the muscle fibers.",
    price: "$30",
  },
];

//main function
export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.screen}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightGray", borderRadius: 20 }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={1}
            style={{ marginHorizontal: 30 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

//sub components
const FoodInfo = (props) => (
  <View style={styles.info}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image source={{ uri: props.food.image }} style={styles.image} />
  </View>
);

//style Sheet
const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  info: {
    justifyContent: "space-evenly",
    width: 240,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginLeft: 10,
  },
});
