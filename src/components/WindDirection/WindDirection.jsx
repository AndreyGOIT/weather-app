import React from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const WindDirection = ({ degree }) => {
  const directions = [
    {
      label: "North",
      icon: <ArrowUpIcon transform="rotate(0deg) " />,
    },
    {
      label: "Northeast",
      icon: <ArrowUpIcon transform="rotate(45deg) " />,
    },
    {
      label: "East",
      icon: <ArrowUpIcon transform="rotate(90deg) " />,
    },
    {
      label: "Southeast",
      icon: <ArrowUpIcon transform="rotate(135deg) " />,
    },
    {
      label: "South",
      icon: <ArrowUpIcon transform="rotate(180deg) " />,
    },
    {
      label: "Southwest",
      icon: <ArrowUpIcon transform="rotate(225deg) " />,
    },
    {
      label: "West",
      icon: <ArrowUpIcon transform="rotate(270deg) " />,
    },
    {
      label: "Northwest",
      icon: <ArrowUpIcon transform="rotate(315deg) " />,
    },
  ];

  const index = Math.round(degree / 45) % 8;
  const { icon } = directions[index];

  return (
    <Box display="flex" alignItems="center" fontSize="48px" color={"gray"}>
      {icon}
      {/* <Text ml="2">{label}</Text> */}
    </Box>
  );
};

export default WindDirection;
