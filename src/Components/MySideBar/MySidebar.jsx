import React, { useState, useEffect } from "react";
import {
  Text,
  Center,
  Image,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Flex,
  Box,
} from "@chakra-ui/react";
import styles from "./MySidebar.module.css";

const MySidebar = ({ isSidebarOpen, toggleSidebar, onWeatherInfoClick }) => {
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

        if (data.cod && data.cod !== 200) {
          throw new Error(
            `OpenWeather API error! Code: ${data.cod}, Message: ${data.message}`
          );
        }

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

  const roundedTemp = weatherInfo ? Math.round(weatherInfo.main.temp) : null; // Округляем значение temp до целого числа
  const roundedMinTemp = weatherInfo
    ? Math.round(weatherInfo.main.temp_min)
    : null;
  const roundedMaxTemp = weatherInfo
    ? Math.round(weatherInfo.main.temp_max)
    : null;

  const handleWeatherInfoClick = () => {
    // Обработчик нажатия на окошко с информацией о погоде
    // Здесь можно добавить логику для отображения подробных данных о погоде на главной странице сайта
    if (weatherInfo) {
      onWeatherInfoClick(weatherInfo);
    }
  };

  const handleCloseWeatherCard = () => {
    setWeatherInfo(null);
    setCity("");
  };

  return (
    // <div
    //   className={
    //     isSidebarOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar
    //   }
    // >
    // <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
    <div>
      {isSidebarOpen ? (
        <>
          <div
            className={`${styles.crossIcon} ${styles.visible}`}
            onClick={toggleSidebar}
          >
            ✕
          </div>
          <Heading as="h3" size="xl" ml={5} mb={3} color="white">
            Weather
          </Heading>
          <div className={styles.menu}>
            <input
              type="text"
              placeholder="🔍  Search for a city or airport"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ width: "100%", paddingLeft: "5px" }}
            />
            {weatherInfo && (
              <div
                className={styles.weatherInfo}
                onClick={handleWeatherInfoClick}
              >
                <Center>
                  <Card color={"white"} bgColor={"gray.400"} w={"210px"} pb={2}>
                    {/* Абсолютное позиционирование для крестика */}
                    <div
                      className={styles.closeIconContainer}
                      onClick={handleCloseWeatherCard}
                    >
                      ✕
                    </div>
                    <CardHeader py={0} pl={2}>
                      <Flex justify={"space-between"} align={"center"} gap={3}>
                        <Heading as="h4" size="md">
                          {weatherInfo.name}
                        </Heading>
                        <Image
                          boxSize="40px"
                          src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
                          alt="Weather Icon"
                          objectFit="cover"
                        />
                        <Text fontSize="3xl">{roundedTemp}°</Text>
                      </Flex>
                    </CardHeader>
                    <CardBody py={4} pl={2}></CardBody>
                    <Box px={2} w={"100%"}>
                      <Flex justify={"space-between"}>
                        <Text>{weatherInfo.weather[0].description}</Text>
                        <Text fontSize={"md"}>
                          L:{roundedMinTemp}° H:{roundedMaxTemp}°
                        </Text>
                      </Flex>
                    </Box>
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
