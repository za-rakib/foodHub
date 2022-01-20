import React,{useState} from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Divider from "react-native-divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

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

//main function
export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (items, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CARD",
      payload: {
        ...items,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  //console.log("Card Item", cartItems);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.screen}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightGray", borderRadius: 20 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={1} style={{ marginHorizontal: 30 }} />
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
