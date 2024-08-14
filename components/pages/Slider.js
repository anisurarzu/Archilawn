"use client"; // Ensure this is the first line in the file

import React, { useRef } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "../../app/globals.css";
import ScrollBtn from "../../public/images/scrolI_Icon.png";
import ScrollLineBotom from "../../public/images/scroll_line_bottom.png";
import Icons from "../icons/Icons";

export default function Slider() {
  const carouselRef = useRef(null);
  const footerRef = useRef(null); // Add this ref for the footer

  const slides = [
    {
      id: 1,
      title: "Visualize your project with Realistic 3D Rendering",
      description:
        "Partne designer for customized plans and 3d visualization. All Online.",
      imageUrl: "/images/slider-image.png",
    },
    {
      id: 1,
      title: "Designer take a break for rest",
      description:
        "Partner with a professional Architect & landscape designer for customized plans and 3d visualization. All Online.",
      imageUrl: "/images/slider-image.png",
    },
    // Additional slides...
  ];

  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const scrollToFooter = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollStep = 10; // Amount to scroll per step
    const scrollInterval = 20; // Time between each scroll step in milliseconds

    // Function to perform the scrolling
    const scroll = () => {
      if (window.scrollY + window.innerHeight < scrollHeight) {
        window.scrollBy(0, scrollStep);
      } else {
        window.scrollTo(0, scrollHeight); // Ensure it scrolls to the exact bottom
        clearInterval(scrollIntervalId);
      }
    };

    // Set an interval to scroll the page in small steps
    const scrollIntervalId = setInterval(scroll, scrollInterval);
  };

  return (
    <div className="relative">
      <Carousel autoplay ref={carouselRef}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative lg:h-[92vh] md:h-[94vh] h-[89vh]">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* START CAROUSAL BOTTOM VIEW */}
      <div className="grid grid-cols-3 col-span-1 container mx-auto absolute lg:bottom-9 md:bottom-9 bottom-7 left-0 right-0">
        <div className="flex justify-start items-center">
          <Icons />
        </div>

        {/* Start Middle Div  */}
        <div
          className="flex justify-center items-center lg:gap-4 md:gap-4 gap-2 lg:-ml-[10px] md:-ml-[10px] -ml-[7px] animate-pulse cursor-pointer"
          onClick={scrollToFooter}
        >
          <p className="lg:text-sm md:text-sm text-[9px] text-white">SCROLL</p>
          <div>
            <Image src={ScrollBtn} alt="ScrollBtn" width={16} height={16} />
          </div>
          <p className="lg:text-sm md:text-sm text-[9px] text-white">DOWN</p>
        </div>

        {/* End Middle Div  */}

        {/* Right Side Icon for carousel changing */}
        <div className="flex justify-end items-center pr-3 md:pr-3 lg:pr-0">
          <div className="border border-white rounded-l-full hover:bg-white hover:bg-opacity-20">
            <button
              className="bg-transparent rounded-full lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-1"
              onClick={goToPrev}
            >
              <LeftOutlined className="text-white" />
            </button>
          </div>

          <div className="border border-white rounded-r-full hover:bg-white hover:bg-opacity-20">
            <button
              className="bg-transparent rounded-full lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-1"
              onClick={goToNext}
            >
              <RightOutlined className="text-white" />
            </button>
          </div>
        </div>

        {/* end */}
      </div>
      
      <div
        ref={footerRef}
        className="container mx-auto flex justify-center items-center absolute bottom-0 left-0 right-0"
      >
        <Image
          src={ScrollLineBotom}
          alt="ScrollLineBotom"
          className="w-[2px] lg:h-10 md:h-10 h-8"
        />
      </div>

      {/* END CAROUSAL BOTTOM VIEW */}
    </div>
  );
}
