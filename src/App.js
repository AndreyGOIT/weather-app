// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { chakraTheme } from "./styles/chakraTheme";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
        </Routes>
      </Box>
    </ChakraProvider>
  );
};

export default App;
