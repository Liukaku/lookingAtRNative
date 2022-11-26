import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return <View style={styles.headerBar}></View>;
};

const styles = StyleSheet.create({
  headerBar: {
    width: "100%",
    backgroundColor: "rgba(65, 128, 180, 1)",
    color: "red",
    position: "absolute",
    top: 0,
    height: "5%",
  },
});

export default Header;
