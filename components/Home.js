"use client";
import React from "react";
import Navbar from "./pages/Navbar";
import Slider from "./pages/Slider";
import OurService from "./pages/OurService";
import OurClients from "./pages/OurClients";
import DesignProcess from "./pages/DesignProcess";
import OurPortfolio from "./pages/OurPortfolio";
import Footer from "./pages/Footer";
import OurClientsReview from "./pages/clientReviews/OurClientsReview";
import StillHaveQuestions from "./pages/questions/StillHaveQuestions";
import FeelingInspired from "./pages/feelingInspired/FeelingInspired";
import PackageCard from "./cards/packageCard/PackageCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <OurClients />
      <DesignProcess />
      <OurService />
      <OurPortfolio />
      <OurClientsReview />


      <StillHaveQuestions />
      <FeelingInspired />

     

      <Footer/>
    </div>
  );
};

export default Home;
