"use client";
import React from "react";
import Navbar from "./pages/Navbar";
import Slider from "./pages/Slider";
import OurService from "./pages/OurService";
import OurClients from "./pages/OurClients";
import DesignProcess from "./pages/DesignProcess";
import OurPortfolio from "./pages/OurPortfolio";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <OurClients />
      <DesignProcess />
      <OurService />
      <OurPortfolio />
      {/* <Packages /> */}
    </div>
  );
};

export default Home;
