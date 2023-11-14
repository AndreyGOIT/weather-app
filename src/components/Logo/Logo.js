import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { updateLogo } from "./logoLogic";
import "./styles.css";

const Logo = () => {
  useEffect(() => {
    updateLogo();
  }, []);

  return (
    <Box>
      <div className="logo" id="logo">
        <div className="sun"></div>
        <div className="moon"></div>
      </div>
    </Box>
  );
};

export default Logo;
