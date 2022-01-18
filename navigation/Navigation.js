import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import RestaurantDetails from "../screen/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
const Stack = createNativeStackNavigator();
// const store = configureStore();

export default function Navigation() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({});
