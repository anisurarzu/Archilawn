"use client";
import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/images/aboutUsImage/about_us.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="lg:w-[190vh] md:w-[62vh] w-[45vh] lg:mx-0 md:mx-4 mx-1 rounded-[30px] bg-[#F3F3F9] ">
    <div>
    <h2>
    Immerse yourself in a refined fusion of architecture and interior design.
    </h2>
    </div>
        <div className="lg:px-16 md:px-4 px-3 lg:py-12 md:py-8 py-6 text-center rounded-lg">
          {/* start top text */}
          <h2 className="lg:text-xl md:text-2xl text-xl text-center text-[#8ABF55] font-semibold uppercase">
            About Us
          </h2>
          <div className="flex justify-center items-center">
            <h2
              className="lg:text-4xl md:text-3xl text-[17px] text-center text-[#383737] lg:py-6 md:py-6 py-2 lg:w-[105vh] md:w-[50vh] w-[105vh]"
              style={{
                fontFamily: "Tinos",
              }}>
              At next concept design, we offer interior design and tailored
              architecture services, guaranteeing that the final product to
              exceed your expectations.
            </h2>
          </div>
          {/* end top text */}

          {/* start bottom image and text */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-4 md:gap-8 gap-6 lg:my-8 md:my-3 my-4">
            <div className="col-span-1">
              <Image
                src={AboutImage}
                alt="About Us Image"
                className="w-full lg:h-[50vh] md:h-[30vh] h-[30vh] lg:px-6 md:px-16 px-1"
              />
            </div>

            <div className="col-span-1 flex flex-col lg:gap-0 md:gap-8 gap-0 justify-between items-end lg:px-6 md:px-16 px-1">
              <div className="flex flex-col lg:gap-8 md:gap-8 gap-5 justify-start items-start text-left">
                <p className="font-medium lg:text-xl md:text-2xl text-[17px] lg:tracking-wide md:tracking-wide tracking-normal text-justify sm:text-left text-[#383737]">
                  We develop a modern architectural design for each house and at
                  the same time use high quality and environmentally friendly
                  materials in our work.{" "}
                </p>
                <p className="lg:text-xl md:text-2xl text-[17px] lg:tracking-wide md:tracking-wide tracking-normal text-justify sm:text-left text-[#383737]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ipsum lorem, tempor ut ex aliquam, fringilla lacinia
                  quam. Sed mattis ante at massa aliquet consectetur. Nullam
                  enim sapien, tristique sit amet lorem lacinia, luctus molestie
                  velit. Nam nunc quam, elementum nec neque nec, ullamcorper
                  interdum orci.
                </p>
              </div>

              {/* Know ME Section for Large */}
              <div
                className="container mx-auto rounded-2xl bg-white hidden lg:flex md:hidden justify-between items-center lg:py-5 md:py-5 py-5 lg:px-6 md:px-6 px-3"
                style={{
                  fontFamily: "Tinos",
                }}>
                <p className="lg:text-2xl md:text-xl text-base">
                  Want to know more about us
                </p>
                <button className="border border-[#383737] text-white lg:py-3 md:py-2 py-1 lg:px-6 md:px-4 px-1 rounded-2xl flex items-center">
                  <div className="text-[#383737] lg:text-xl md:text-xl text-base">
                    Know More
                  </div>
                  <div className="pi pi-chevron-right ml-2 lg:text- md:text-[12px] text-[8px] text-[#383737]"></div>
                </button>
              </div>
              {/* End Know ME Section for Large */}
            </div>
            {/* Start Know me Medium */}
            <div className="mx-6">
              <div
                className="container mx-auto rounded-2xl bg-white hidden lg:hidden md:flex justify-between items-center py-5 px-3"
                style={{
                  fontFamily: "Tinos",
                }}>
                <p className="text-xl">Want to know more about us</p>
                <button className="border border-[#383737] text-white lg:py-3 md:py-2 py-1 lg:px-6 md:px-4 px-1 rounded-2xl flex items-center">
                  <div className="text-[#383737] text-xl">Know More</div>
                  <div className="pi pi-chevron-right ml-2 text-[12px] text-[#383737]"></div>
                </button>
              </div>
            </div>
            {/* End Know me Medium */}
            {/* Start Know me Small */}
            <div className="mx-5">
              <div
                className="container rounded-2xl bg-white flex flex-col gap-1 lg:hidden md:hidden justify-center items-center py-2 pb-3 px-2"
                style={{
                  fontFamily: "Tinos",
                }}>
                <p className="text-[17px] text-[#383737]">
                  Want to know more about us
                </p>
                <button className="border border-[#383737] text-white py-1 px-3 drop-shadow-md rounded-xl flex items-center">
                  <div className="text-[#383737] text-[15px]">Know More</div>
                  <div className="pi pi-chevron-right ml-2 text-[12px] text-[#383737]"></div>
                </button>
              </div>
            </div>
            {/* End Know me Small */}
          </div>

          {/* end bottom image and text */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
