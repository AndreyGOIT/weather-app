// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./Pages/Home";

const App = () => {
  return (
    <ChakraProvider>
      <Box display="flex">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
        </Routes>
      </Box>
    </ChakraProvider>
  );
};

export default App;
