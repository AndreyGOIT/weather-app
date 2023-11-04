import React from "react";
import "./WeatherMapStyled.css";
import { Box } from "@chakra-ui/react";

const WeatherMap = ({ latitude, longitude, width, height }) => {
  const mapUrl = `https://openweathermap.org/weathermap?zoom=6&lat=${latitude}&lon=${longitude}&layer=radar`;

  const mapContainerStyle = {
    // marginTop: "-80px", // Сдвигаем карту вверх на 80px
    overflow: "hidden", // Обрезаем все, что не помещается в контейнере
  };

  return (
    <Box>
      <div className="map-container" style={mapContainerStyle}>
        <iframe
          title="OpenWeatherMap"
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapUrl}
        ></iframe>
      </div>
    </Box>
  );
};

export default WeatherMap;
