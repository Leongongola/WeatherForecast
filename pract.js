import React from "react";
import { StatusBar, View, Text, Image } from "react-native";

const App = () => {
  return (
    <View className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      {/* Calgary Weather */}
      <View className="bg-white p-6 rounded-lg shadow-md w-80">
        <Text className="text-2xl font-semibold mb-4">Calgary Weather</Text>
        <Text className="text-gray-600 mb-4">April 8, 2024</Text>
        <View className="flex justify-between">
          <View className="flex items-center">
            <Text className="text-3xl mr-2">☀️</Text>
            <Image
              source={require("./assets/Cloudy.png")} // Replace './path/to/your/image.png' with the actual path to your image file
              style={{ width: 200, height: 200 }} // Adjust the width and height as needed
            />
            <Text>Sunny</Text>
          </View>
          <Text className="text-2xl">14°C</Text>
        </View>
        {/* Add hourly forecast here */}
        {/* Add daily forecast here */}
      </View>

      {/* Vancouver Weather */}
      <View className="bg-white p-6 rounded-lg shadow-md w-80 mt-4">
        <Text className="text-2xl font-semibold mb-4">Vancouver Weather</Text>
        <Text className="text-gray-600 mb-4">April 8, 2024</Text>
        <View className="flex justify-between">
          <View className="flex items-center">
            <Text className="text-3xl mr-2">🌧️</Text>
            <Text>Rainy</Text>
          </View>
          <Text className="text-2xl">10°C</Text>
        </View>
        {/* Add hourly forecast here */}
        {/* Add daily forecast here */}
      </View>

      {/* Toronto Weather */}
      <View className="bg-white p-6 rounded-lg shadow-md w-80 mt-4">
        <Text className="text-2xl font-semibold mb-4">Toronto Weather</Text>
        <Text className="text-gray-600 mb-4">April 8, 2024</Text>
        <View className="flex justify-between">
          <View className="flex items-center">
            <Text className="text-3xl mr-2">🌨️</Text>
            <Text>Snowy</Text>
          </View>
          <Text className="text-2xl">1°C</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
