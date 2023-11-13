import {
  Flex,
  Box,
  Heading,
  HStack,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      color={"white"}
      bgColor={"gray.600"}
      p={"10px"}
      alignItems={"center"}
    >
      <Heading as={"h1"}>Weather App</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box>LOGO</Box>
        <Text>info@weather.com</Text>
        <Button colorScheme="gray">Log</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
