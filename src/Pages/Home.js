import Weather from "../components/Weather/Weather.js";
import MySidebar from "../components/MySideBar/MySidebar.jsx";
import { Box } from "@chakra-ui/react";
import "./styles.css";
// import { Flex, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box w={"100%"}>
        <MySidebar />
        <Weather />
      </Box>
    </>
  );
};

export default Home;
