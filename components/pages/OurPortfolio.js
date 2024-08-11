"use client";
import React, { useState } from "react";
import ContainerHeader from "../containerHeader/ContainerHeader";

// Portfolio images
import portfolioImage1 from "../../public/images/portfolioImages/portfolio_Image1.png";
import portfolioImage2 from "../../public/images/portfolioImages/portfolio_Image2.png";
import OurPortfolioTopCard from "../cards/ourPortfolioTopCards/OurPortfolioTopCard";

// video play icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";



export default function OurPortfolio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-white">
      <div className="mb-16 md:mb-16 lg:mb-40">
        <div className="lg:pt-28 md:pt-16 pt-0 lg:pb-16 md:pb-16 pb-16 px-10 md:px-0 lg:px-0">
          <ContainerHeader containerHeader="Our Portfolio" />
          <p
            className="text-center text-lg"
            style={{
              fontFamily: "Tinos",
              lineHeight: "41px",
              textAlign: "center",
            }}
          >
            Explore our landscape design, building design and interior design
            samples
          </p>
        </div>

        {/* START PORTFOLIO */}
        <div className="container mx-auto">
          <OurPortfolioTopCard
            portfolioImage1={portfolioImage1}
            portfolioImage2={portfolioImage2}
          />

          <div className="mt-12">
            {/* Start Video */}
            <div className="relative w-full h-[70vh]">
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
                      className="text-white p-4 rounded-full"
                    >
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className="w-24 h-24"
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
                  allowFullScreen
                ></iframe>
              )}

              {/* Overlay div */}
              <div className="absolute bottom-0 w-full bg-[#8ABF55]/75 h-20 flex items-center justify-between px-6 z-30 rounded-bl-[30px] rounded-br-[30px]">
                <p className="text-white font-bold text-[8px] md:text-base lg:text-xl">
                Destination Weading Resort | Germany
                </p>
                <button className="text-[#8ABF55] font-semibold bg-transparent border border-white py-1 text-base px-5 rounded-full bg-white">
                  SEE MORE
                </button>
              </div>
            </div>
            {/* End Video */}
          </div>
        </div>

        {/* END PORTFOLIO */}
      </div>
    </section>
  );
}
