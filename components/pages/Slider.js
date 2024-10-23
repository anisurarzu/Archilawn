"use client"; // Ensure this is the first line in the file

import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios"; // Import Axios for API requests

import "../../app/globals.css";
import ScrollBtn from "../../public/images/scrolI_Icon.png";
import ScrollLineBotom from "../../public/images/scroll_line_bottom.png";
import Icons from "../icons/Icons";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Slider() {
  const carouselRef = useRef(null);
  const footerRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch slider data from API
    const fetchSlides = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/sliders`);
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setLoading(false); // Hide the loader once data is fetched
      }
    };

    fetchSlides();
  }, []);

  const goToPrev = () => {
    carouselRef.current?.prev();
  };

  const goToNext = () => {
    carouselRef.current?.next();
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Full-page loading animation
  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        {/* Spinner animation with the same green color */}

        {/* Text animation with Archilawn */}

        <div className="mt-6">
          <Image
            src="/images/animation.gif"
            alt="Logo"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Carousel ref={carouselRef}>
        {slides?.map((slide) => (
          <div
            key={slide._id} // Use the unique ID from the API
            className="relative lg:h-[92vh] md:h-[94vh] h-[88vh]">
            <Image
              src={slide.image}
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
                {slide.subtitle || slide.subTitle}{" "}
                {/* Handle possible subtitle field name */}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* START CAROUSEL BOTTOM VIEW */}
      <div className="grid grid-cols-3 col-span-1 container mx-auto absolute lg:bottom-9 md:bottom-9 bottom-7 left-0 right-0">
        <div className="flex justify-start items-center">
          <Icons />
        </div>

        {/* Start Middle Div */}
        <div
          className="flex justify-center items-center lg:gap-4 md:gap-4 gap-2 lg:-ml-[10px] md:-ml-[10px] -ml-[7px] animate-pulse cursor-pointer"
          onClick={scrollToFooter}>
          <p className="lg:text-sm md:text-sm text-[9px] text-white">SCROLL</p>
          <div>
            <Image src={ScrollBtn} alt="ScrollBtn" width={16} height={16} />
          </div>
          <p className="lg:text-sm md:text-sm text-[9px] text-white">DOWN</p>
        </div>

        {/* Right Side Icon for carousel changing */}
        <div className="flex justify-end items-center pr-3 md:pr-3 lg:pr-0">
          <div className="border border-white rounded-l-full hover:bg-white hover:bg-opacity-20">
            <button
              className="bg-transparent rounded-full lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-1"
              onClick={goToPrev}>
              <LeftOutlined className="text-white" />
            </button>
          </div>

          <div className="border border-white rounded-r-full hover:bg-white hover:bg-opacity-20">
            <button
              className="bg-transparent rounded-full lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-1"
              onClick={goToNext}>
              <RightOutlined className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={footerRef}
        className="container mx-auto flex justify-center items-center absolute bottom-0 left-0 right-0">
        <Image
          src={ScrollLineBotom}
          alt="ScrollLineBotom"
          className="w-[2px] lg:h-10 md:h-10 h-8"
        />
      </div>

      {/* END CAROUSEL BOTTOM VIEW */}
    </div>
  );
}
