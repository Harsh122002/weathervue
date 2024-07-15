import axios from "axios";

const API_KEY = "597e87c9d3028607dc43aea16a78b9cb";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = (location) => {
  return axios.get(
    `${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
};

export const getForecastData = (location) => {
  return axios.get(
    `${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`
  );
};
