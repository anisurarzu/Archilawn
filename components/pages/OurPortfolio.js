"use client";
import React from "react";

import ContainerHeader from "../containerHeader/ContainerHeader";
import Image from "next/image";

//Portfolio images
import PortfolioImage1 from "../../public/images/portfolioImages/portfolio_Image1.png";
import PortfolioImage2 from "../../public/images/portfolioImages/portfolio_Image2.png";

export default function OurPortfolio() {
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
            samples{" "}
          </p>
        </div>

        {/* START PORTFOLIO */}
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-1 md:px-0 lg:px-0">
            {/* Start 1st Image */}
            <div className="relative w-[28vh] md:w-[30vh] lg:w-[95vh]">
              <Image
                src={PortfolioImage1}
                alt="PortfolioImage2"
                className="h-[20vh] md:h-[20vh] lg:h-[50vh] w-full rounded-tl-[30px] rounded-bl-[30px] z-10"
              />

              {/* Overlay div */}
              <div className="absolute bottom-0 w-full bg-[#8ABF55]/75 h-10 md:h-16 lg:h-20 flex items-center justify-between px-4 md:px-6 lg:px-6 z-20 rounded-bl-[30px]">
                <p className="text-white font-bold text-[8px] md:text-base lg:text-base">
                  Food Truck Cafe | California
                </p>
                <button className="text-[#8ABF55] font-semibold bg-transparent border border-white py-1 md:py-0 lg:py-1 text-[6px] md:text-sm lg:text-base px-2 md:px-2 lg:px-5 rounded-full bg-white">
                  SEE MORE
                </button>
              </div>
            </div>
            {/* End 1st Image */}

            {/* Start 2nd Image */}
            <div className="relative w-[23vh] md:w-[30vh] lg:w-[68vh]">
              <Image
                src={PortfolioImage2}
                alt="PortfolioImage2"
                className="h-[20vh] md:h-[20vh] lg:h-[50vh] w-full rounded-br-[30px] rounded-tr-[30px] z-10"
              />

              {/* Overlay div */}
              <div className="absolute bottom-0 w-full bg-[#8ABF55]/75 h-10 md:h-16 lg:h-20 flex items-center justify-between px-1 md:px-6 lg:px-6 z-20 rounded-br-[30px]">
                <p className="text-white font-bold text-[8px] md:text-base lg:text-base">
                  Building Exterior Design | LA
                </p>
                <button className="text-[#8ABF55] font-semibold bg-transparent border border-white py-1 md:py-0 lg:py-1 text-[6px] md:text-sm lg:text-base px-2 md:px-2 lg:px-5 rounded-full bg-white">
                  SEE MORE
                </button>
              </div>
            </div>

            {/* End 2nd Image */}
          </div>
        </div>

        {/* END PORTFOLIO */}
      </div>
    </section>
  );
}
