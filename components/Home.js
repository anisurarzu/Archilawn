"use client";
import React, { useRef } from "react";
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
import Navbar from "./pages/Navbar";

const Home = () => {
  const ourServiceRef = useRef(null);

  const scrollToOurService = () => {
    if (ourServiceRef.current) {
      ourServiceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <Navbar scrollToOurService={scrollToOurService} />
      <Slider />
      <OurClients />
      <DesignProcess />
      <OurService ref={ourServiceRef} id="our-service" />
      <div className="lg:py-8 md:py-8 py-0">
        <OurPortfolio id="portfolio" />
      </div>
      <div className="lg:py-8 md:py-8 py-16">
        <OurClientsReview />
      </div>
      <div className="lg:py-12 md:py-12 py-0">
        <StillHaveQuestions id="how-it-works" />
      </div>
      <div className="lg:py-12 md:py-12 py-8">
        <FeelingInspired />
      </div>
      <div className="py-8">
        <AboutUs id="about-us" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
