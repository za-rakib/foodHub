import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//main function
export default function About({ route }) {
  //console.log("route", route);
  const { name, image, price, reviews, rating, categories } = route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(".");

  const description = `${formattedCategories} 💳${
    price ? "." + price : ""
  } ${rating}🌟  (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
//sub components
const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.image} />
  );
  const RestaurantName = ({ name }) => (
    <Text style={styles.name}>{name}</Text>
  );
  const RestaurantDescription = ({ description }) => (
    <Text style={styles.description}>{description}</Text>
  );

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: "100%",
      },
      name: {
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15,
      },
      description: {
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 15,
      },
});
