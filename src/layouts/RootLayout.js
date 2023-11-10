import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Rootlayout;
