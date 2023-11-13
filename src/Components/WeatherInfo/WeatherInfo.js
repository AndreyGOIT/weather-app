import React from "react";
import "./WeatherInfoStyled.css";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Center,
  VStack,
  Divider,
} from "@chakra-ui/react";
import {
  SunIcon,
  MoonIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";
import { Heading, Text, Image, Spinner } from "@chakra-ui/react";

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
    return (
      <>
        <p>Loading...</p>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </>
    );
  }

  const {
    name,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed, gust },
    visibility,
    sys: { country, sunrise, sunset },
  } = weatherData;

  const windDirection = getWindDirection(weatherData.wind.deg);

  const timeOptions = { hour12: false, hour: "2-digit", minute: "2-digit" };

  const weatherDescription = weather[0].description;

  const roundedTemp = Math.round(temp); // Округляем значение temp до целого числа
  const roundedFeelsLikeTemp = Math.round(feels_like); // Округляем значение temp до целого числа
  const roundedTempMin = Math.round(temp_min); // Округляем значение temp до целого числа
  const roundedTempMax = Math.round(temp_max); // Округляем значение temp до целого числа

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
    timeZoneName: "short",
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="weather-container">
      <Box color={"white"}>
        <Center>
          <VStack>
            <Flex>
              <Text as="b" fontSize="8xl">
                {roundedTemp}°
              </Text>
              <Image
                boxSize="150px"
                src={iconUrl}
                alt="Weather Icon"
                objectFit="cover"
              />
            </Flex>
            <Flex align={"center"} gap={3}>
              <VStack>
                <Heading as="h2" size="xl" noOfLines={1}>
                  {name}, {country}
                </Heading>
                <p className="current-date">{formattedDate}</p>
              </VStack>
              <Text fontSize="6xl">16:22</Text>
            </Flex>
            <Flex alignItems={"center"} gap={10}>
              <Text>{weatherDescription}</Text>
              <Text> feels like: {roundedFeelsLikeTemp}°C</Text>
            </Flex>
          </VStack>
        </Center>
      </Box>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" minH="10" color={"white"}>
            <Box borderWidth="1px" borderRadius="lg">
              <p>
                Temperature:
                <ArrowDownIcon /> {roundedTempMin}°C <ArrowUpIcon />{" "}
                {roundedTempMax}
                °C
              </p>

              <p>Pressure: {pressure} hPa</p>
              <p>Humidity: {humidity} %</p>
              <p>Visibility: {visibilityKm} km</p>
            </Box>
          </GridItem>
          <GridItem w="100%" minH="10" color={"white"}>
            <Box borderWidth="1px" borderRadius="lg">
              <p>Wind Speed: {speed} m/s</p>
              <p>Wind Gusts: {gust} m/s</p>
              <p>Wind Direction: {windDirection}</p>
            </Box>
          </GridItem>
          <GridItem w="100%" minH="10" color={"white"}>
            <Box borderWidth="1px" borderRadius="lg">
              <SunIcon boxSize={8} />
              <p>Sunrise: {sunriseTime}</p>
              <Divider />
              <p>Sunset: {sunsetTime}</p>
              <MoonIcon boxSize={8} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default WeatherInfo;
