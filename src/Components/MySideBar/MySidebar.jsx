import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Image,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import styles from "./MySidebar.module.css";

const MySidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    let debounceTimeout;

    const fetchData = async () => {
      try {
        // Проверяем, есть ли значение city перед отправкой запроса
        if (!city) {
          setWeatherInfo(null); // Очищаем weatherInfo, чтобы не отображать предыдущие данные
          return;
        }

        // Отправляем запрос к OpenWeather API с использованием полученных координат
        console.log(city);
        console.log(apiKey);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setWeatherInfo(data);

        console.log("newAPI Response:", data);
        // console.log("WeatherInfo:", weatherInfo);
      } catch (error) {
        // Обработка ошибок
        console.error("API Request Error:", error);
      }
    };

    // Используем debounce для задержки выполнения fetchData на 500 миллисекунд после завершения ввода
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchData();
    }, 500);

    // Очистка таймаута при каждом изменении ввода
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [city, apiKey]);

  // const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`;

  const handleWeatherInfoClick = () => {
    // Обработчик нажатия на окошко с информацией о погоде
    // Здесь можно добавить логику для отображения подробных данных о погоде на главной странице сайта
  };
  const handleCloseWeatherCard = () => {
    setWeatherInfo(null);
    setCity("");
  };

  return (
    <div
      className={
        isSidebarOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar
      }
    >
      {isSidebarOpen ? (
        <>
          <div
            className={`${styles.crossIcon} ${styles.visible}`}
            onClick={toggleSidebar}
          >
            ✕
          </div>
          <div className={styles.menu}>
            <input
              type="text"
              placeholder=" Input city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {weatherInfo && (
              <div
                className={styles.weatherInfo}
                onClick={handleWeatherInfoClick}
              >
                <Center>
                  <Card color={"white"} bgColor={"red.700"}>
                    <Flex justifyContent={"flex-end"} pr={2}>
                      <Box onClick={handleCloseWeatherCard}>✕</Box>
                    </Flex>

                    <CardHeader py={0}>
                      <Flex align={"center"} gap={3}>
                        <Heading size={2}>{weatherInfo.name}</Heading>
                        <Image
                          boxSize="50px"
                          src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
                          alt="Weather Icon"
                          objectFit="cover"
                        />
                      </Flex>
                    </CardHeader>
                    <CardBody py={0}>
                      <Box>Temperature: {weatherInfo.main.temp}°C</Box>
                      <Box>
                        Weather condition: {weatherInfo.weather[0].description}
                      </Box>
                    </CardBody>
                    {/* <Box>
                      {weatherInfo.name}:
                    </Box>
                    <br />
                    <br /> */}
                  </Card>
                </Center>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={styles.hamburgerIcon} onClick={toggleSidebar}>
          ☰
        </div>
      )}
    </div>
  );
};

export default MySidebar;
