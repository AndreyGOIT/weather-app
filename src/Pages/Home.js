import React, { useState } from "react";
import Weather from "../components/Weather/Weather.js";
import MySidebar from "../components/MySideBar/MySidebar.jsx";
import { Box } from "@chakra-ui/react";
import "./styles.css";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Box className="background-container">
        <MySidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Weather isSidebarOpen={isSidebarOpen} />
      </Box>
    </>
  );
};

export default Home;
