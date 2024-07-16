import React, { useState } from "react";
import { getWeatherData } from "../Services/weatherService";
import WeatherCard from "../Components/WeatherCard";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Simple Weather </h1>

      <div className="input-group mb-3">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="form-control rounded"
        />{" "}
        &nbsp;
        <div className="input-group-append">
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
