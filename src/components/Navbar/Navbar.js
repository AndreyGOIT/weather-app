import { Flex, Heading, HStack, Text, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      color={"white"}
      bgColor={"gray.600"}
      p={"10px"}
      alignItems={"center"}
    >
      <HStack spacing="20px">
        <Logo />

        <Heading as={"h1"}>
          {/* <Highlight
            query="weather"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "yellow.400",
              fontStyle: "italic",
              color: "white",
            }}
          > */}
          My <i>Weather</i>
          {/* </Highlight> */}
        </Heading>
      </HStack>
      <Spacer />

      <HStack spacing="20px">
        <Text>info@weather.com</Text>
        <Button colorScheme="gray">Log</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
