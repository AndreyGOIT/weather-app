import React, { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherMap from "../WeatherMap/WeatherMap";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import { Flex, Box } from "@chakra-ui/react";
import { BoxContainer } from "../Container/index";

// const Weather = ({ isSidebarOpen, weatherData }) => {
const Weather = ({ isSidebarOpen }) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataHourly, setWeatherDataHourly] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Получаем геопозицию пользователя
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Отправляем запрос к OpenWeather API с использованием полученных координат
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setWeatherData(data); // Устанавливаем полученные данные в состояние
          // Запрос на получение прогноза по часам
          const response2 = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          );

          if (!response2.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data2 = await response2.json();
          setWeatherDataHourly(data2);
          console.log("API Response:", data);
          console.log("API Response2 (часовой прогноз):", data2);
        });
      } catch (error) {
        // Обработка ошибок
        console.error("API Request Error:", error);
      }
    };

    if (!weatherData) {
      fetchData();
    }
  }, [apiKey, weatherData]); // Передаем apiKey в массив зависимостей, чтобы запрос выполнился при его изменении

  return (
    <>
      <Box ml={isSidebarOpen ? "250px" : "50px"} pr={"10px"}>
        {/* <Box> */}
        <BoxContainer>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <WeatherInfo weatherData={weatherData} />
            <HourlyWeather weatherDataHourly={weatherDataHourly} />
            {weatherData && (
              <WeatherMap
                latitude={weatherData.coord.lat}
                longitude={weatherData.coord.lon}
              />
            )}
          </Flex>
        </BoxContainer>
      </Box>
    </>
  );
};

export default Weather;
