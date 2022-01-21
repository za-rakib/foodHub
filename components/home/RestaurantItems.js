import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//fake data
export const localRestaurants = [
  {
    name: "Meat sharing platter",
    image_url:
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1233,
    rating: 4.6,
  },
  {
    name: "Roasted Brussels Sprouts Salad",
    image_url:
      "https://images.getbento.com/accounts/79416dac6744e5896d428cd16e2e574c/media/images/61665PBK-0026.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1233,
    rating: 4.9,
  },
  {
    name: "Salmon",
    image_url:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    categories: ["Cafe", "Hotel"],
    price: "$$",
    reviews: 1233,
    rating: 4.4,
  },
  {
    name: "Roast chicken",
    image_url:
      "https://www.4rsmokehouse.com/wp-content/uploads/2021/10/Thanksgiving-Smoked-Turkey-2-scaled.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1233,
    rating: 4.2,
  },
];

//main function
export default function RestaurantItems({
  restaurantsData,
  searchValue,
  navigation,
  setSearchValue,
}) {
  return (
    <>
      {restaurantsData
        .filter((restaurant) => {
          if (searchValue === "") {
            return restaurant;
          } else if (
            restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return restaurant;
          }
        })
        .map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={styles.container}
            onPress={() => {
              navigation.navigate("RestaurantDetails", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              });
            }
        }
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </TouchableOpacity>
        ))}
    </>
  );
}

//image component
const RestaurantImage = ({ image }) => (
  <>
    <Image style={styles.image} source={{ uri: image }} />
    <TouchableOpacity style={styles.icon}>
      <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
    </TouchableOpacity>
  </>
);
//info component
const RestaurantInfo = ({ name, rating }) => (
  <View style={styles.text}>
    <View>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 16 }}>
        {name}
      </Text>
      <Text style={{ color: "gray", fontSize: 13 }}>30-35 . min</Text>
    </View>
    <View style={styles.rating}>
      <Text>{rating}</Text>
    </View>
  </View>
);

// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 23,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  rating: {
    height: 30,
    width: 30,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
