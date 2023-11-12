import React from "react";
import "./WeatherMapStyled.css";
import { Box } from "@chakra-ui/react";
import { BoxContainer } from "../Container/index";

const WeatherMap = ({ latitude, longitude }) => {
  const mapUrl = `https://openweathermap.org/weathermap?zoom=6&lat=${latitude}&lon=${longitude}&layer=radar`;

  const mapContainerStyle = {
    marginTop: "-80px", // Сдвигаем карту вверх на 80px
    overflow: "hidden", // Обрезаем все, что не помещается в контейнере
    height: "400px",
  };

  return (
    <BoxContainer>
      <Box style={mapContainerStyle}>
        <iframe
          title="OpenWeatherMap"
          width={"100%"}
          height={"100%"}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapUrl}
        ></iframe>
      </Box>
    </BoxContainer>
  );
};

export default WeatherMap;
