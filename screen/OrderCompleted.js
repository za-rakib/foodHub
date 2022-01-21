import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import MenuItems from "../components/RestaurantDetails/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        image:
          "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
        title: "Pizza",
        description:
          "A flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread",
        price: "$20.25",
      },
    ],
  });
  //  data read from store
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((sum, item) => sum + item, 0);

  //console.log("Items", items);

  //  data read from  firebase
  //   const querySnapshot = getDocs(collection(db, "orders"));
  //   console.log("querySnapshot", querySnapshot);
  //   useEffect(async () => {
  //     const querySnapshot = await getDocs(collection(db, "orders"));
  // console.log("querySnapshot in", querySnapshot);
  //  querySnapshot.forEach((doc) => {
  // console.log("doc", doc);
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  //   const finalData = []
  //   finalData = (doc.data().createAt.seconds).sort();
  //   console.log("Final data", finalData);

  // .onSnapshot((snapshot) => {
  //   snapshot.doc.map((doc) => {
  //     setLastOrder(doc.data());
  //   });
  // });
  // });

  // const db = firebase.firestore();
  // const unsubscribe = db
  //   .collection("orders")
  //   .orderBy("createdAt", "desc")
  //   .limit(1)
  //   .onSnapshot((snapshot) => {
  //     snapshot.doc.map((doc) => {
  //       setLastOrder(doc.data());
  //     });
  //   });
  // return unsubscribe;
  // }, []);

  // main function
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <LottieView
            style={styles.animationOne}
            source={require("../assets/animations/check-mark-success.json")}
            autoPlay
            speed={0.5}
            loop={false}
          />
          <Text style={styles.text}>
            Your order at {restaurantName} has been placed for ${total}{" "}
          </Text>
          <ScrollView>
            {
              <MenuItems
                style={styles.menuItems}
                foods={items}
                hideCheckBox={true}
              />
            }

            <LottieView
              style={styles.animationTwo}
              source={require("../assets/animations/cooking.json")}
              autoPlay
              speed={0.5}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen: {
    margin: 10,
    alignItems: "center",
    height: "100%",
  },
  animationOne: {
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  animationTwo: {
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 20,
  },
  menuItems: {
    marginTop: 30,
  },
});
