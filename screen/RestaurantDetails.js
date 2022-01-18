import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Divider from "react-native-divider";
import About from "../components/RestaurantDetails/About";
import MenuItems from '../components/RestaurantDetails/MenuItems';
import ViewCard from "../components/RestaurantDetails/ViewCard";

export default function RestaurantDetails({ route }) {
  return (
    <ScrollView>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 10 }} />
      <MenuItems />
      <ViewCard/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
