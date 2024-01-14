import React, { useState, useEffect } from "react";
import "../styles/Weather.css"; // Import the CSS file



const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "454041ea7e6b537bbedaee0c9bbc0592";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.main && data.main.temp && data.weather && data.weather[0].description) {
          setWeatherData(data);
        } else {
          console.error("Invalid weather data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div className="weatherContainer">
      {weatherData ? (
        <>
          <h3>Stockholm, SH</h3>
            <p>Condition: {weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>

        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;