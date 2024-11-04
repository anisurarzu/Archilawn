"use client";
import React, { useState, useEffect } from "react";
import ContainerHeader from "../containerHeader/ContainerHeader";
import axios from "axios";
import OurPortfolioTopCard from "../cards/ourPortfolioTopCards/OurPortfolioTopCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

// Portfolio images
import portfolioImage1 from "../../public/images/portfolioImages/portfolio_Image1.png";
import portfolioImage2 from "../../public/images/portfolioImages/portfolio_Image2.png";

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const OurPortfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    // Fetch slider data from API
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/portfolios`);
        setPortfolio(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchPortfolio();
  }, []);

  console.log("Here Portfolio Data: ", portfolio);

  return (
    <section className="bg-white">
      <div className="lg:pt-28 md:pt-16 pt-0 lg:pb-16 md:pb-16 pb-6 px-10 md:px-0 lg:px-0">
        <ContainerHeader containerHeader="Our Portfolio" />
        <p
          className="text-center lg:text-lg md:text-lg text-base text-black"
          style={{
            fontFamily: "Tinos",
            lineHeight: "41px",
            textAlign: "center",
          }}>
          Explore our landscape design, building design, and interior design
          samples
        </p>
      </div>

      {/* START PORTFOLIO */}
      <div className="container mx-auto">
        <OurPortfolioTopCard
          portfolioImage1={portfolioImage1}
          portfolioImage2={portfolioImage2}
        />

        <div className="lg:mt-12 md:mt-12 mt-6 px-1 md:px-0 lg:px-0">
          {/* Start Video */}
          <div className="relative w-full lg:h-[70vh] md:h-[25vh] h-[31vh]">
            {!isPlaying && (
              <div className="relative w-full h-full">
                <img
                  src="https://img.youtube.com/vi/q1k-dVaBhdo/hqdefault.jpg" // Use YouTube video thumbnail
                  alt="Video Thumbnail"
                  className="w-full h-full rounded-[30px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    onClick={handlePlayClick}
                    className="text-white p-4 rounded-full cursor-pointer">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="lg:w-24 md:w-24 w-10 lg:h-24 md:h-24 h-10"
                    />
                  </button>
                </div>
              </div>
            )}

            {isPlaying && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/q1k-dVaBhdo?si=O_1gzBW83F8qruzD&autoplay=1"
                title="YouTube video player"
                className="rounded-[30px] z-10"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            )}

            {/* Overlay div */}
            <div className="absolute bottom-0 w-full bg-[#8ABF55]/75 lg:h-20 md:h-16 h-10 flex items-center justify-between px-6 z-30 lg:rounded-bl-[30px] lg:rounded-br-[30px]">
              <p className="text-white font-bold text-[12px] md:text-base lg:text-xl">
                Destination Wedding Resort | Germany
              </p>
              <button className="text-[#8ABF55] font-semibold bg-transparent border border-white py-1 lg:text-base md:text-base text-[10px] lg:px-5 md:px-5 px-3 rounded-full bg-white">
                SEE MORE
              </button>
            </div>
          </div>
          {/* End Video */}
        </div>
      </div>

      {/* END PORTFOLIO */}
    </section>
  );
};

// Add a display name for the component
OurPortfolio.displayName = "OurPortfolio";

export default OurPortfolio;
