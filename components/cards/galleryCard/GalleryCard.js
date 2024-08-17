import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image"; // Import Next.js Image component

const GalleryCard = () => {
  const images = [
    "/images/bringYourIdea/bring_Your_Idea1.png",
    "/images/slider-image.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto bg-white lg:p-8 md:p-8 p-3 rounded-lg">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-1 gap-4">
        <div className="col-span-1">
          <div className="flex flex-col lg:justify-start md:justify-start justify-center items-center">
            <h2 className="lg:text-2xl md:text-xl text-xl font-semibold lg:mb-6 md:mb-3 mb-3 text-black">
              We can bring your ideas to life
            </h2>
            <p
              className="text-gray-700 lg:text-lg md:text-base text-sm lg:mb-8 md:mb-3 mb-3 lg:pr-6 md:pr-6 pr-0 lg:text-left md:text-left text-center"
            >
              The use of modern, state-of-the-art technologies like 3D rendering
              and virtual reality to help design and visualise a project has
              always been a crucial part in helping clients and professionals
              alike to really understand exactly what the proposed design will
              look like in its context – without so much as a shovel being put
              in the ground.
            </p>

            <div className="lg:px-1 md:px-0 px-0">
              <button className="bg-[#8ABF55] text-white lg:py-3 md:py-2 py-2 lg:px-6 md:px-4 px-3 rounded-xl flex items-center">
                <div> Get Inspired</div>
                <div className="pi pi-chevron-right ml-2 lg:text-[10px] md:text-[12px] text-[8px]"></div>
              </button>
            </div>
            {/* end */}
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative flex justify-center items-center">
            <div className="lg:w-[75vh] md:w-[50vh] w-[75vh] lg:h-[50vh] md:h-[25vh] h-[35vh]">
              <Image
                className="h-full w-full rounded-3xl"
                src={images[currentIndex]}
                alt="Gallery"
                width={500} // Adjust width
                height={500} // Adjust height
              />
            </div>

            <div className="absolute bottom-6">
              <div className="flex justify-end items-center">
                <div className="border border-white rounded-l-full bg-white hover:bg-white bg-opacity-30 hover:bg-opacity-20">
                  <button
                    className="bg-transparent rounded-full lg:px-5 md:px-4 px-4 lg:py-3 md:py-2 py-1"
                    onClick={prevImage}
                  >
                    <LeftOutlined className="text-white" />
                  </button>
                </div>

                <div className="border border-white rounded-r-full bg-white hover:bg-white bg-opacity-30 hover:bg-opacity-20">
                  <button
                    className="bg-transparent rounded-full lg:px-5 md:px-4 px-4 lg:py-3 md:py-2 py-1"
                    onClick={nextImage}
                  >
                    <RightOutlined className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
