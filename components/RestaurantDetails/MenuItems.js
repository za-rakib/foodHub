import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Divider from "react-native-divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

//main function
export default function MenuItems({
  restaurantName,
  foods,
  hideCheckBox,
  marginLeft,
}) {
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
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightGray", borderRadius: 20 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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
    <Text style={styles.description}>{props.food.description}</Text>
    <Text style={styles.price}>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{
        height: 80,
        width: 80,
        borderRadius: 10,
        marginLeft: marginLeft,
      }}
    />
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
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
});
