import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84ff045ff659866878158ecff63b7963`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather:", error));
  };

  const displayWeather = () => {
    if (!weatherData) return null;
    const { name } = weatherData;

    const { icon, description } = weatherData.weather[0];
    const { temp, humidity, temp_max, temp_min } = weatherData.main;
    const { speed } = weatherData.wind;
    const { visibility } = weatherData;

    return (
      <View className="bg-sky-600" style="flex items-center">
        <View className="flex-row justify-between bg-sky-600">
          <Text className="capitalize font-bold text-2xl mt-8 text-white">
            {description}
          </Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${icon}.png` }}
            style={{ width: 90, height: 90 }}
          />
        </View>
        <View className="flex-row justify-start bg-sky-600">
          <Image
            source={require("./assets/location-pin.png")}
            className="w-5 h-5 mt-1 "
          />
          <Text className="text-white ml-3 text-base">{name}</Text>
        </View>
        <View className="flex-row justify-start bg-sky-600">
          <Text className="text-white">{Math.floor(temp)}°C</Text>
          <Text className="text-white">{speed} km/h</Text>
          <Text className="text-white"> {humidity}%</Text>
          <Text className="text-white">{visibility / 1000} km</Text>
        </View>

        <Text className="text-white">High: {Math.floor(temp_max)}°C</Text>
        <Text className="text-white">Low: {Math.floor(temp_min)}°C</Text>
      </View>
    );
  };

  return (
    <View className="bg-sky-600 min-h-screen flex flex-col justify-center items-center p-5">
      <View className="flex-row justify-between bg-sky-600 w-11/12 pt-4 pb-4 pr-1 pl-1 mb-5">
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="Enter city"
          className="bg-white p-3 rounded mb-4 w-11/12 mr-3"
        />
        <TouchableOpacity onPress={fetchWeather}>
          <Image
            source={require("./assets/search-icon.png")}
            className="w-8 h-8 mt-1 "
          />
        </TouchableOpacity>
      </View>

      <View className="bg-sky-600 p-5 w-11/12 rounded-lg">
        {displayWeather()}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
