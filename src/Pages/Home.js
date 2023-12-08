import React, { useState } from "react";
import Weather from "../components/Weather/Weather.js";
import MySidebar from "../components/MySideBar/MySidebar.jsx";
import { Box } from "@chakra-ui/react";
import "./styles.css";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleWeatherInfoClick = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <Box className="background-container">
        <MySidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onWeatherInfoClick={handleWeatherInfoClick}
        />
        <Weather isSidebarOpen={isSidebarOpen} weatherData={weatherData} />
        {/* <Weather /> */}
      </Box>
    </>
  );
};

export default Home;
