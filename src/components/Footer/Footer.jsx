import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      as="nav"
      color={"white"}
      bgColor={"red.800"}
      p={"10px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>Created by A.Erokhin © 2022 All rights reserved</Text>
    </Flex>
  );
};

export default Footer;
