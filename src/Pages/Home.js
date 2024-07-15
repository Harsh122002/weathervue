import React, { useState } from "react";
import { getWeatherData } from "../Services/weatherService";
import WeatherCard from "../Components/WeatherCard";

const Home = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await getWeatherData(location);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
        Search
      </button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
