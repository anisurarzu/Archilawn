"use client";

import React, { useRef } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Icons from "./icons/Icons";

import "../app/globals.css";

export default function Slider() {
  const carouselRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Visualize your project with Realistic 3D Rendering",
      description:
        "Partner with a professional Architect & landscape designer for customized plans and 3d visualization. All Online.",
      imageUrl: "/images/slider-image.png",
    },
    {
      id: 2,
      title: "Create Stunning Architectural Designs",
      description:
        "Get custom architectural plans that reflect your vision and style.",
      imageUrl: "/images/slider-image.png",
    },
    {
      id: 3,
      title: "Transform Your Landscape",
      description:
        "Design beautiful outdoor spaces with our professional landscape services.",
      imageUrl: "/images/slider-image.png",
    },
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

  return (
    <div className="relative">
      <Carousel autoplay ref={carouselRef}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[85vh]">
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
      <div className="container mx-auto flex justify-between items-center absolute bottom-4 left-0 right-0 px-4">
        <div>
          <Icons />
        </div>
        <div className="border border-red-700 w-[40px]"></div>

        {/* Right Side Icon for carousal changing */}
        <div className="flex">
          <div className="border border-white rounded-l-full hover:bg-white hover:bg-opacity-20">
            <button
              className="bg-transparent px-6 py-5 rounded-full"
              onClick={goToPrev}
            >
              <LeftOutlined className="text-white" />
            </button>
          </div>

          <div className="border border-white rounded-r-full hover:bg-white hover:bg-opacity-20">
            <button
              className="bg-transparent px-6 py-5 rounded-full"
              onClick={goToNext}
            >
              <RightOutlined className="text-white" />
            </button>
          </div>
        </div>

        {/* end */}
      </div>
      {/* END CAROUSAL BOTTOM VIEW */}
    </div>
  );
}
