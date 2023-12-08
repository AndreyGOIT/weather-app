import React from "react";
import {
  Box,
  Flex,
  Spinner,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import "./HourlyWeatherStyled.css";

const HourlyWeather = ({ weatherDataHourly }) => {
  if (!weatherDataHourly) {
    return (
      <>
        <p>Loading...</p>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gray.500"
          size="xl"
        />
      </>
    );
  }
  // Извлекаем массив из ключа list
  const listArray = weatherDataHourly.list;
  // Теперь у вас есть доступ к данным внутри массива
  console.log(listArray);

  /*-------ПЕРВЫЙ ЭЛЕМЕНТ МАССИВА---------------*/
  const firstListItem = listArray[0];
  // Обрабатываем информацию из Данных о дате и времени
  const dateTimeString = firstListItem.dt_txt;
  // Преобразуем строку в объект Date
  const dateTimeObject = new Date(dateTimeString);
  // Получаем часы и минуты из объекта Date
  const hours = dateTimeObject.getHours();
  const minutes = dateTimeObject.getMinutes();
  // Формируем строку времени в желаемом формате (HH:mm)
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  // Округляем температуру до целого значения
  const temp = firstListItem.main.temp;
  const roundedTemp = Math.round(temp);
  // Иконка для погодных условий
  const firstItemWeather = firstListItem.weather;
  const iconType = firstItemWeather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconType}.png`;

  return (
    <div className="weather-container">
      HourlyWeather
      <Flex justify={"center"} gap={2}>
        <Box borderWidth="1px" borderRadius="lg" py={2} px={1} w={"50%"}>
          3-hours forecast
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h={"100px"} bg="blue.500">
              <Text color={"white"}>{formattedTime}</Text>
              <Image
                boxSize="50px"
                src={iconUrl}
                alt="Weather Icon"
                objectFit="cover"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Text color={"white"}>{roundedTemp}°</Text>
            </GridItem>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Grid>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" py={2} px={1} w={"50%"}>
          5-days forecast
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Grid>
        </Box>
      </Flex>
    </div>
  );
};

export default HourlyWeather;
