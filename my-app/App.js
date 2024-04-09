import React from "react";
import { StatusBar, View, Text, Image } from "react-native";

const App = () => {
  return (
    <View className="bg-slate-300 min-h-screen flex flex-col justify-center items-center">
      <View className="flex-row justify-between bg-slate-300  w-11/12 pt-4 pb-4 pr-1 pl-1 mb-5">
        <Image
          source={require("./assets/hamburger-menu.png")}
          style={{ width: 35, height: 35 }}
        />
        <Text className="text-2xl">Weather</Text>
        <Image
          source={require("./assets/search-icon.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View className="bg-white p-5 w-11/12 rounded-lg">
        <Text>Party Cloudy</Text>
        <View className="flex-row">
          <Text>April 21, 2024</Text>
        </View>
        <View className="flex-row justify-around ">
          <Text>2pm</Text>
          <Text>3pm</Text>
          <Text>4pm</Text>
          <Text>5pm</Text>
          <Text>6pm</Text>
        </View>
        <View className="flex-row justify-around">
          <Image
            source={require("./assets/clouds/cloud-windy.png")}
            style={{ width: 65, height: 65 }}
          />
          <Image
            source={require("./assets/lighting/lighting.png")}
            style={{ width: 65, height: 65 }}
          />
          <Image
            source={require("./assets/moon/Moon.png")}
            style={{ width: 65, height: 65 }}
          />
          <Image
            source={require("./assets/rain/rain-drops.png")}
            style={{ width: 65, height: 65 }}
          />
          <Image
            source={require("./assets/sun/Sun.png")}
            style={{ width: 65, height: 65 }}
          />
        </View>
        <View className="flex-row justify-around ">
          <Text>28°C</Text>
          <Text>13°C</Text>
          <Text>4°C</Text>
          <Text>9°C</Text>
          <Text>17°C</Text>
        </View>
      </View>
      <View>
        <Text>Forecast</Text>
      </View>
      <View className="bg-white p-5 w-11/12 mt-4 rounded-lg"></View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
