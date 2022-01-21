import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Divider from "react-native-divider";
import { SafeAreaView } from "react-native-safe-area-context";
import About from "../components/RestaurantDetails/About";
import MenuItems from "../components/RestaurantDetails/MenuItems";
import ViewCard from "../components/RestaurantDetails/ViewCard";

//fake data
const foods = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
    title: "Steak",
    description: "A steak is a meat generally sliced across the muscle fibers.",
    price: "$30.50",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
    title: "Pizza",
    description:
      "A flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread",
    price: "$20.25",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
    title: "Cake",
    description:
      "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked.",
    price: "$12.50",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
    title: "Cheese Burger",
    description: "A cheeseburger is a hamburger topped with cheese. ",
    price: "$15.75",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_960_720.jpg",
    title: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
    price: "$18",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <About route={route} />
          <Divider width={1.5} style={{ marginVertical: 10 }} />
          <MenuItems restaurantName={route.params.name} foods={foods} />
        </ScrollView>
        <ViewCard navigation={navigation} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
