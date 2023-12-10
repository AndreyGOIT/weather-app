import React from "react";
import {
  Box,
  Flex,
  Spinner,
  Grid,
  GridItem,
  Image,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
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

  // Создаем Grid для отображения данных
  const gridItems = [];

  // Обрабатываем первые пять элементов массива - 3-HOURS FORECAST
  for (let i = 0; i < 6 && i < listArray.length; i++) {
    const listItem = listArray[i];

    // Обрабатываем информацию из Данных о дате и времени
    const dateTimeString = listItem.dt_txt;
    const dateTimeObject = new Date(dateTimeString);
    const hours = dateTimeObject.getHours();
    const minutes = dateTimeObject.getMinutes();
    const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;

    const temp = listItem.main.temp;
    const roundedTemp = Math.round(temp);

    const weather = listItem.weather[0];
    const iconType = weather.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconType}.png`;

    // Создаем элемент GridItem и добавляем его в массив
    const gridItem = (
      <GridItem key={i} w="100%" h={"100px"} bg="blue.500">
        <Text color={"white"}>{formattedTime}</Text>
        <Center>
          <Image
            boxSize="50px"
            src={iconUrl}
            alt="Weather Icon"
            objectFit="cover"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Center>
        <Text color={"white"}>{roundedTemp}°</Text>
      </GridItem>
    );

    gridItems.push(gridItem);
  }

  // /*-------ПЕРВЫЙ ЭЛЕМЕНТ МАССИВА---------------*/
  // const firstListItem = listArray[0];
  // // Обрабатываем информацию из Данных о дате и времени
  // const dateTimeString = firstListItem.dt_txt;
  // // Преобразуем строку в объект Date
  // const dateTimeObject = new Date(dateTimeString);
  // // Получаем часы и минуты из объекта Date
  // const hours = dateTimeObject.getHours();
  // const minutes = dateTimeObject.getMinutes();
  // // Формируем строку времени в желаемом формате (HH:mm)
  // const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
  //   minutes < 10 ? "0" : ""
  // }${minutes}`;
  // // Округляем температуру до целого значения
  // const temp = firstListItem.main.temp;
  // const roundedTemp = Math.round(temp);
  // // Иконка для погодных условий
  // const firstItemWeather = firstListItem.weather;
  // const iconType = firstItemWeather[0].icon;
  // const iconUrl = `https://openweathermap.org/img/wn/${iconType}.png`;

  // Создаем Grid для отображения данных - 5-DAYS FORECAST
  const gridItems5Days = [];

  // Обрабатываем первый элемент
  if (listArray.length > 0) {
    const firstListItem = listArray[0];

    // Обрабатываем информацию из Данных о дате и времени
    // const dateTimeString = firstListItem.dt_txt;

    // // Преобразовываем строку в объект Date
    // const dateObject = new Date(dateTimeString);

    // // Получаем день недели (0 - воскресенье, 1 - понедельник, и так далее)
    // const dayOfWeek = dateObject.getDay();

    // // Массив с названиями дней недели
    // // const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    // const daysOfWeek = [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wensday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    // ];

    // // Извлекаем название дня недели из массива
    // const dayOfWeekName = daysOfWeek[dayOfWeek];

    // console.log(dayOfWeekName); // Выводит сокращенное название дня недели (например, 'Чт' для четверга)

    // const dateTimeObject = new Date(dateTimeString);
    // const hours = dateTimeObject.getHours();
    // const minutes = dateTimeObject.getMinutes();
    // const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    //   minutes < 10 ? "0" : ""
    // }${minutes}`;

    const minTemp = firstListItem.main.temp_min;
    const roundedMinTemp = Math.round(minTemp);
    const maxTemp = firstListItem.main.temp_max;
    const roundedMaxTemp = Math.round(maxTemp);

    const weather = firstListItem.weather[0];
    const weatherDescription = weather.description;
    const iconType = weather.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconType}.png`;
    const wind = firstListItem.wind.speed;

    // Создаем элемент GridItem и добавляем его в массив
    const gridItem = (
      <GridItem key={0} w="100%" h={"40px"} bg="blue.500">
        <Flex align={"center"} justify={"space-between"} px={2}>
          <Text color={"white"}>Today</Text>
          <Divider orientation="vertical" color={"white"} />
          <Text color={"white"}>{weatherDescription}</Text>
          <Image
            boxSize="50px"
            src={iconUrl}
            alt="Weather Icon"
            objectFit="cover"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <Text color={"white"}>
            <ArrowDownIcon boxSize={6} />
            {roundedMinTemp}° temperature {roundedMaxTemp}°
            <ArrowUpIcon boxSize={6} />
          </Text>
          <Text color={"white"}>wind: {wind} m/s</Text>
        </Flex>
      </GridItem>
    );

    gridItems5Days.push(gridItem);
  }

  // Обрабатываем элементы с индексами 7, 15, 23, 31 и 39
  for (let i = 7; i < listArray.length; i += 8) {
    const listItem = listArray[i];

    // Обрабатываем информацию из Данных о дате и времени
    const dateTimeString = listItem.dt_txt;
    // Преобразовываем строку в объект Date
    const dateObject = new Date(dateTimeString);

    // Получаем день недели (0 - воскресенье, 1 - понедельник, и так далее)
    const dayOfWeek = dateObject.getDay();

    // Массив с названиями дней недели
    // const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wensday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Извлекаем название дня недели из массива
    const dayOfWeekName = daysOfWeek[dayOfWeek];

    console.log(dayOfWeekName); // Выводит сокращенное название дня недели (например, 'Чт' для четверга)

    const minTemp = listItem.main.temp_min;
    const roundedMinTemp = Math.round(minTemp);
    const maxTemp = listItem.main.temp_max;
    const roundedMaxTemp = Math.round(maxTemp);

    const weather = listItem.weather[0];
    const weatherDescription = weather.description;
    const iconType = weather.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconType}.png`;
    const wind = listItem.wind.speed;

    // Создаем элемент GridItem и добавляем его в массив
    const gridItem = (
      <GridItem key={i} w="100%" h={"40px"} bg="blue.500">
        <Flex align={"center"} justify={"space-between"} px={2}>
          <Box justifyContent={"flex-start"} color={"white"} w={"100px"}>
            {dayOfWeekName}
          </Box>
          <Divider orientation={"vertical"} bg={"white"} height={7} />
          <Box color={"white"} w={"100px"}>
            {weatherDescription}
          </Box>
          {/* <Text color={"white"}>{weatherDescription}</Text> */}
          <Image
            boxSize="50px"
            src={iconUrl}
            alt="Weather Icon"
            objectFit="cover"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <Text color={"white"}>
            <ArrowDownIcon boxSize={6} />
            {roundedMinTemp}° temperature {roundedMaxTemp}°
            <ArrowUpIcon boxSize={6} />
          </Text>
          <Text color={"white"}>wind: {wind} m/s</Text>
        </Flex>
      </GridItem>
    );

    gridItems5Days.push(gridItem);
  }

  return (
    <div className="weather-container">
      HourlyWeather
      <Flex justify={"center"} gap={2}>
        <Box borderWidth="1px" borderRadius="lg" py={2} px={1} w={"40%"}>
          3-hours forecast
          <Grid templateColumns="repeat(6, 1fr)" gap={2}>
            {gridItems}
          </Grid>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" py={2} px={1} w={"60%"}>
          5-days forecast
          <Grid templateRows="repeat(6, 1fr)" gap={1}>
            {gridItems5Days}
          </Grid>
        </Box>
      </Flex>
    </div>
  );
};

export default HourlyWeather;
