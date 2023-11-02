import React from "react";
import "./WeatherMapStyled.css";

const WeatherMap = ({ latitude, longitude, width, height }) => {
  const mapUrl = `https://openweathermap.org/weathermap?zoom=6&lat=${latitude}&lon=${longitude}&layer=radar`;

  return (
    <div className="map-container">
      <iframe
        title="OpenWeatherMap"
        width={width} // Передаем ширину из пропсов
        height={height} // Передаем высоту из пропсов
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
      ></iframe>
    </div>
  );
};

export default WeatherMap;
