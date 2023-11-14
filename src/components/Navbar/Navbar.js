import { Flex, Heading, HStack, Text, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      color={"white"}
      bgColor={"gray.600"}
      p={"10px 30px"}
      alignItems={"center"}
    >
      <HStack spacing="20px">
        <Logo />

        <Heading as={"h1"}>
          <Flex>
            My{" "}
            <Text color={"yellow.200"}>
              <i>Weather</i>
            </Text>
          </Flex>
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
