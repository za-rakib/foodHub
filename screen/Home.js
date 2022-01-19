import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Divider from "react-native-divider";
import BottomTab from "../components/home/BottomTab";
import Categories from "../components/home/Categories";
import Header from "../components/home/Header";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

//api key
const YELP_API_KEY =
  "1_QrRDI4ACswgHGGEmpgg4fTFWYVHjqnc2jqTeczvDxl5rbM32iPuCW-izuTgl1yC6er1H8zvz_v_ASmzBGgJBidlf-x83fI_HYWB5nNGIf631CQ9e2jhF-eCJuXYXYx";

export default function Home({ navigation }) {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const [searchValue, setSearchValue] = useState("");
  //console.log(searchValue)
  //console.log("searchValue", searchValue);
  const getRestaurantFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Jacksonville";

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((data) => setRestaurantsData(data.businesses));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [setRestaurantsData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantsData={restaurantsData}
          searchValue={searchValue}
          navigation={navigation}
        />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    padding: 13,
    marginTop: 60,
  },
});
