import React from "react";
import WindDirection from "../WindDirection/WindDirection"; // Путь к компоненту WindDirection

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
import { wrap } from "framer-motion";

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

  const roundedWindSpeed = speed.toFixed(1);
  const roundedWindGust = gust.toFixed(1);

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
  const currentTime = new Date().toLocaleTimeString("en-US", timeOptions); // Преобразуем время в формат времени

  const currentDate = new Date();
  const options = { weekday: "short", month: "long", day: "numeric" };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="weather-container">
      <Box color={"white"} mb={3}>
        <Center>
          <VStack>
            <Flex h={20}>
              <Text as="b" fontSize="8xl">
                {roundedTemp}°
              </Text>
              <Image
                boxSize="150px"
                src={iconUrl}
                alt="Weather Icon"
                objectFit="cover"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Flex>
            <Flex height={"100px"} align={"center"} gap={3}>
              <VStack>
                <Heading as="h2" size="xl" noOfLines={1}>
                  {name}, {country}
                </Heading>
                <Text>{formattedDate}</Text>
              </VStack>
              <Text fontSize="7xl">{currentTime}</Text>
            </Flex>
            <Flex h={5} alignItems={"center"} gap={10}>
              <Text as={"b"}>{weatherDescription}</Text>
              <Text as={"b"}> feels like: {roundedFeelsLikeTemp}°C</Text>
            </Flex>
          </VStack>
        </Center>
      </Box>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" minH="10" color={"white"}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              py={4}
              textAlign="left"
              pl={4}
            >
              <VStack gap={2} align={"start"}>
                <p>
                  Temperature:
                  <ArrowDownIcon /> {roundedTempMin}°C <ArrowUpIcon />{" "}
                  {roundedTempMax}
                  °C
                </p>

                <p>Pressure: {pressure} hPa</p>
                <p>Humidity: {humidity} %</p>
                <p>Visibility: {visibilityKm} km</p>
              </VStack>
            </Box>
          </GridItem>
          <GridItem w="100%" minH="10" color={"white"}>
            <Box borderWidth="1px" borderRadius="lg" py={2}>
              <p>Wind Direction: {windDirection}</p>

              <Flex justify={"center"} align={"center"}>
                <div className="image-container">
                  <Flex justify={"center"} align={"center"}>
                    <WindDirection degree={weatherData.wind.deg} />
                  </Flex>
                </div>
              </Flex>
              <Flex justify={"center"} gap={4} wrap={wrap}>
                <p>Wind Speed: {roundedWindSpeed} m/s</p>
                <p>Wind Gusts: {roundedWindGust} m/s</p>
              </Flex>
            </Box>
          </GridItem>
          <GridItem w="100%" minH="10" color={"white"}>
            <Box borderWidth="1px" borderRadius="lg" py={4}>
              <SunIcon boxSize={8} />
              <p>Sunrise: {sunriseTime}</p>
              <Divider my={2} />
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
