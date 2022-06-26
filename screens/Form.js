import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native"

function Form() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Form Screen</Text>
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
}

// function onClickHandler({navigation}) {
//   navigation.replace("Drawer");
// }

export default Form;

const styles = StyleSheet.create({});
