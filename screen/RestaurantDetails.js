import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Divider from "react-native-divider";
import About from "../components/RestaurantDetails/About";
import MenuItems from "../components/RestaurantDetails/MenuItems";
import ViewCard from "../components/RestaurantDetails/ViewCard";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <>
      <ScrollView>
        <About route={route} />
        <Divider width={1.5} style={{ marginVertical: 10 }} />
        <MenuItems restaurantName={route.params.name} />
      </ScrollView>
      <ViewCard navigation={navigation} restaurantName={route.params.name} />
    </>
  );
}

const styles = StyleSheet.create({});
