import React from "react";
import { Box, Icon, Input } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ isOpen, onToggle, cities, onCityClick, onSearch }) => {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width={isOpen ? "250px" : "0"}
      bg="white"
      boxShadow="2xl"
      p={4}
      transition="width 0.3s ease"
    >
      <Icon as={FiMenu} boxSize={6} onClick={onToggle} cursor="pointer" />
      <Input
        placeholder="Введите город"
        onChange={(e) => onSearch(e.target.value)}
      />
      {cities.map((city) => (
        <Box key={city.id} onClick={() => onCityClick(city)}>
          {city.name}
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
