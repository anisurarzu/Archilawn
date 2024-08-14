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
import AboutUs from "./pages/about/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <OurClients />
      <DesignProcess />
      <OurService />
      <OurPortfolio />


      <div className="py-8">
        <StillHaveQuestions />
      </div>

      <div className="py-8">
        <OurClientsReview />
      </div>

      <div className="py-20">
        <FeelingInspired />
      </div>

      <div className="my-24">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
