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
import ProjectGallery from "./pages/projectGallery/ProjectGallery";
import WhatsApp from "./WhatsApp";

const Home = () => {
  const footerRef = useRef(null);
  const ourServiceRef = useRef(null);

  const scrollToOurService = () => {
    if (ourServiceRef.current) {
      ourServiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <Navbar scrollToOurService={scrollToOurService} />
      <div className="lg:pb-0 md:pb-8 py-0 " id="home">
        <Slider />
        <OurClients />
        <DesignProcess />
      </div>

      <div className="lg:py-8 md:py-8 py-0 " id="service">
        <OurService ref={ourServiceRef} />
      </div>
      <div className="lg:py-8 md:py-8 py-0 " id="portfolio">
        <OurPortfolio />
      </div>
      <div className="lg:py-8 md:py-8 py-16">
        <OurClientsReview />
      </div>
      <div className="lg:py-12 md:py-12 py-8" id="how-it-works">
        <StillHaveQuestions />
      </div>
      <div className="lg:py-12 md:py-12 py-8">
        <FeelingInspired />
      </div>

      <div className="py-8">
        <ProjectGallery id="about-us" />
      </div>
      <div className="py-8">
        <Footer ref={footerRef} />
      </div>
      <WhatsApp />
    </div>
  );
};

export default Home;
