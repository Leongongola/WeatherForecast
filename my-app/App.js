import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
const PlaceholderImage = require("./assets/icon.png");

export default function App() {
  return (
    <View className="flex-1 text-7xl items-center justify-center bg-blue-200 ">
      <Text className="text-lime-500"></Text>
      <Text className="">Weather</Text>
      <Image source={PlaceholderImage} />
      <StatusBar style="auto" />
    </View>
  );
}
