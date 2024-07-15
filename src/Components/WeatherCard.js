import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
