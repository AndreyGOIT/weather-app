// import React, { useState } from "react";
// import Sidebar from "../Components/Sidebar/Sidebar";
// import WeatherCard from "../Components/WeatherCard/WeatherCard";
import Weather from "../Components/Weather/Weather";
// import { Center } from "@chakra-ui/react";
// import SimpleSidebar from "../Components/SimpleSidebar/SimpleSidebar";
import MySidebar from "../Components/MySideBar/MySidebar.jsx";
import { Flex, Box } from "@chakra-ui/react";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [cities, setCities] = useState([]); // Список городов
  // const [selectedCity, setSelectedCity] = useState(null); // Выбранный город

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSearch = (query) => {
  //   // Здесь вы можете сделать запрос к API для поиска городов
  //   // и обновить состояние `cities` с найденными городами.
  //   setCities(query.cities);
  // };

  // const handleCityClick = (city) => {
  //   // Обработка клика на город в Sidebar
  //   // Здесь вы можете обновить `selectedCity` или выполнить другие действия.
  //   setSelectedCity(city);
  // };

  return (
    <>
      <Flex justify={"space-between"} gap={2}>
        <Box>
          <MySidebar />
        </Box>
        {/* <SimpleSidebar /> */}
        {/* <Sidebar
        isOpen={isOpen}
        onToggle={toggleSidebar}
        cities={cities}
        onCityClick={handleCityClick}
        onSearch={handleSearch}
      /> */}
        <Box>
          <Weather />
        </Box>
        {/* <Center>{selectedCity ? <WeatherCard /> : <Weather />}</Center> */}
      </Flex>
    </>
  );
};

export default Home;
