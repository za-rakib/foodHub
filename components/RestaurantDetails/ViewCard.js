import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { db } from "../../firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

export default function ViewCard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  //  data read from store
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((sum, item) => sum + item, 0);

  // firebase
  const addOrderToFirebase = async () => {
    const newCityRef = doc(collection(db, "orders"));
    const ordersData = {
      items: items,
      restaurantName: restaurantName,
      createAt: Timestamp.fromDate(new Date()),
    };
    await setDoc(newCityRef, ordersData);
    setModalVisible(false);
    navigate.navigate("OrderCompleted");
  };

  // modal checkout
  const checkOutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckOutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalPrice}>$ {total}</Text>
            </View>
            <View style={styles.checkOutButtonContainer}>
              <TouchableOpacity
                style={styles.checkOutButton}
                onPress={() => addOrderToFirebase()}
              >
                <Text style={styles.checkOutButtonText}>Checkout</Text>
                <Text style={styles.checkOutButtonPrice}>
                  ${total ? total : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkOutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.screen}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.component}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.text}>View Card</Text>
              <Text style={styles.text}> ${total}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

//  styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    zIndex: 999,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  component: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 13,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalCheckOutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  subtotalPrice: {
    color: "black",
    marginRight: 10,
    fontSize: 20,
    opacity: 0.7,
  },
  checkOutButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkOutButton: {
    backgroundColor: "#1f1a1a",
    alignItems: "center",
    position: "relative",
    padding: 13,
    width: 300,
    marginTop: 20,
    borderRadius: 30,
    flexDirection: "row",
  },
  checkOutButtonText: {
    color: "white",
    fontSize: 22,
    marginLeft: 30,
  },
  checkOutButtonPrice: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    right: 35,
  },
});
