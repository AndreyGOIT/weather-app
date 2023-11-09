import React from "react";
import "./WeatherInfoStyled.css";
import { Grid, GridItem, Box, Flex, Center } from "@chakra-ui/react";
import { Heading, Text, Image } from "@chakra-ui/react";

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

  const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };

  const weatherDescription = weather[0].description;
  const roundedTemp = Math.round(temp); // Округляем значение temp до целого числа

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const visibilityKm = visibility / 1000; // Переводим видимость из метров в километры
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(
    "en-US",
    timeOptions
  ); // Преобразуем время в формат времени
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(
    "en-US",
    timeOptions
  ); // Преобразуем время в формат времени

  const currentDate = new Date();
  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // timeZoneName: "short",
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="weather-container">
      <Box color={"white"}>
        <Heading as="h2" size="md" noOfLines={1}>
          {name}, {country}
        </Heading>
        <Center>
          <Flex>
            <Image boxSize="100px" src={iconUrl} alt="Weather Icon" />
            <Text as="b" fontSize="6xl">
              {roundedTemp}°C
            </Text>
          </Flex>
        </Center>
        <Text>{weatherDescription}</Text>
      </Box>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" minH="10" color={"white"}>
            <p className="current-date">{formattedDate}</p>
            <p>Feels like: {feels_like}°C</p>
            <p>Temp min: {temp_min}°C</p>
            <p>Temp max: {temp_max}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Visibility: {visibilityKm} km</p>
          </GridItem>
          <GridItem w="100%" minH="10" color={"white"}>
            <p>Wind Speed: {speed} m/s</p>
            <p>Wind Gusts: {gust} m/s</p>
            <p>Wind Direction: {windDirection}</p>
            <p>Sunrise: {sunriseTime}</p>
            <p>Sunset: {sunsetTime}</p>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default WeatherInfo;
