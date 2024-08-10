"use client";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Slider() {
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

  return (
    <div className="relative">
      <Carousel
        autoplay
        arrows
        prevArrow={
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
            <LeftOutlined className="text-black" />
          </button>
        }
        nextArrow={
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
            <RightOutlined className="text-black" />
          </button>
        }>
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
    </div>
  );
}
