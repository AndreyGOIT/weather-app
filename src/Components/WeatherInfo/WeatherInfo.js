import React from "react";
import "./WeatherInfoStyled.css";

const getWindDirection = (degree) => {
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];

  const index = Math.round(degree / 45) % 8;
  return directions[index];
};

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const {
    name,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed, gust },
    visibility,
    sys: { country, sunrise, sunset },
  } = weatherData;

  const windDirection = getWindDirection(weatherData.wind.deg);

  const weatherDescription = weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const visibilityKm = visibility / 1000; // Переводим видимость из метров в километры
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(); // Преобразуем время в формат времени
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(); // Преобразуем время в формат времени

  return (
    <div className="weather-container">
      <h2>
        Weather in {name}, {country}
      </h2>
      <div className="weather-details">
        <img src={iconUrl} alt="Weather Icon" />
        <p>{weatherDescription}</p>
        <p>Temperature: {temp}°C</p>
        <p>Feels like: {feels_like}°C</p>
        <p>Temp min: {temp_min}°C</p>
        <p>Temp max: {temp_max}°C</p>

        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {speed} m/s</p>
        <p>Wind Gusts: {gust} m/s</p>
        <p>Wind Direction: {windDirection}</p>
        <p>Visibility: {visibilityKm} km</p>
        <p>Sunrise: {sunriseTime}</p>
        <p>Sunset: {sunsetTime}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
