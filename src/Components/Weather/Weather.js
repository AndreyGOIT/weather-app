import React, { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherMap from "../WeatherMap/WeatherMap"; // Импортируйте компонент WeatherMap
import { Flex, Box, Container } from "@chakra-ui/react";
// import sectionBG from "../../images/raindrops-on-a-window-with-a-blue-sky.jpg";

const Weather = () => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);

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
          console.log("API Response:", data);
        });
      } catch (error) {
        // Обработка ошибок
        console.error("API Request Error:", error);
      }
    };

    fetchData();
  }, [apiKey]); // Передаем apiKey в массив зависимостей, чтобы запрос выполнился при его изменении

  // ...

  return (
    <>
      <Box pl={"60px"} pr={"10px"}>
        <Container as={"section"} maxW={"4xl"} py={"20px"} centerContent>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <WeatherInfo weatherData={weatherData} />
            {weatherData && (
              <WeatherMap
                latitude={weatherData.coord.lat}
                longitude={weatherData.coord.lon}
                width={650}
                height={350}
              />
            )}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Weather;
