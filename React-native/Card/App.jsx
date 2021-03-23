import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "./components/Slider";

const images = [
  "https://images.pexels.com/photos/2772918/pexels-photo-2772918.jpeg?auto=compre=500",
  "https://images.pexels.com/photos/1877005/pexels-photo-1877005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/5994821/pexels-photo-5994821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/7175547/pexels-photo-7175547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];
export default class Slider extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Hello Slider</Text>
        <Slider images={images} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
