import Weather from "../Components/Weather/Weather";
import MySidebar from "../Components/MySideBar/MySidebar.jsx";
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
