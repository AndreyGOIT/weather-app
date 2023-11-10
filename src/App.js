// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./styles/chakraTheme";
import Home from "./pages/Home";
import Rootlayout from "../src/layouts/RootLayout";

const App = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
