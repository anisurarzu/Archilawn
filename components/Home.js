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
import AboutUs from "./pages/about/AboutUs";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Slider />
      <OurClients />
      <DesignProcess />
      <OurService />

      <div className="lg:py-8 md:py-8 py-0">
        <OurPortfolio />
      </div>
      <div className="lg:py-8 md:py-8 py-16">
        <OurClientsReview />
      </div>
      <div className="lg:py-12 md:py-12 py-0">
        <StillHaveQuestions />
      </div>

      <div className="lg:py-12 md:py-12 py-8">
        <FeelingInspired />
      </div>

      <div className="py-8">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
