import { getForecastData } from "../Services/weatherService";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherForecast = () => {
  const [location, setLocation] = useState(""); // Default location can be set if needed
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecast = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getForecastData(location);
      setForecastData(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    fetchForecast();
  };

  useEffect(() => {
    fetchForecast(); // Fetch forecast for default location on mount
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Weather Forecast</h1>
      <div className="input-group mb-3  ">
        <input
          type="text"
          className="form-control rounded"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
        &nbsp;
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {forecastData && (
        <div className=" mt-4 bg-transparent">
          <div className="card-body ">
            <h5
              className="card-title text-center text-white  "
              style={{ fontSize: 40 }}
            >
              {forecastData.city.name}
            </h5>
            <ul className="list-group list-group-flush ">
              {forecastData.list.slice(0, 5).map((item, index) => (
                <li
                  key={index}
                  className="list-group-item bg-transparent text-white"
                >
                  <div>
                    <strong>Date:</strong>{" "}
                    {new Date(item.dt * 1000).toLocaleDateString()}
                  </div>
                  <div>
                    <strong>Temperature:</strong> {item.main.temp}°C
                  </div>
                  <div>
                    <strong>Weather:</strong> {item.weather[0].description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
