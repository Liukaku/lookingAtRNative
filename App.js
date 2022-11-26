import { StatusBar } from "expo-status-bar";
import react from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/header/header";

export default function App() {
  const [text, changeText] = react.useState("Placeholder");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <Text>{text}</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.textInput}
          onChangeText={changeText}
          value={text}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    height: 20,
  },
});
