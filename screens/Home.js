import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
function Home({ navigation }) {
  return (
    <View>
  <Text>Home Screen</Text>
  <Button title="Go to Form Screen" onPress={() => navigation.navigate('Form')}/>
  </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
