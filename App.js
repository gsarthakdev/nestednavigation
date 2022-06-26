import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation"
import Home from "./screens/Home";
import Form from "./screens/Form";
import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}  />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Form">
      <Stack.Screen name="Form" component={Form} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
