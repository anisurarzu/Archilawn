"use client";
import Image from "next/image";
import React from "react";
import IconsFooter from "../icons/IconsFooter";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#383737] w-full flex items-center justify-center">
      <div className="border border-gray-600 w-full m-12">
        {/* start the footer */}

        {/* Large Start */}
        <div className="hidden md:hidden lg:grid grid-cols-4 w-full h-full">
          {/* start 1st div */}
          <div className="col-span-2 border border-gray-600">
            <div className="mx-10 my-10 flex flex-col">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-36 h-20"
                />
              </div>

              <p
                className="text-white text-xl pr-80 mt-8"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem, tempor ut ex aliquam, fringilla lacinia quam. Sed
                mattis ante at massa aliquet consectetur.
              </p>

              <div className="mt-16">
                <IconsFooter />
              </div>
            </div>
          </div>
          {/* end 1st div */}

          {/* start 2nd div */}
          <div className="col-span-1 border border-gray-600">
            <div className="mx-12 my-10 flex flex-col">
              <p
                className="text-[#818181] text-xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                EXPLORE
              </p>

              <div
                className="flex flex-col gap-5 mt-8 text-xl text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <p>Home</p>
                <p>About Us</p>
                <p>Booking</p>
                <p>Gallery</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          {/* end 2nd div */}
          {/* start last div */}
          <div className="col-span-1 border border-gray-600">
            <div className="mx-12 my-10 flex flex-col">
              <p
                className="text-[#818181] text-xl uppercase"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Get in Touch
              </p>

              <div
                className="flex flex-col gap-3 mt-8 text-xl text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <div className="flex justify-start items-center gap-4">
                  <FontAwesomeIcon icon={faPhone} className="text-white" />
                  <p>+01 5527 6045</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  <p>info@archilawn.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMailBulk} className="text-white" />
                  <p>PO Box 6418, QLD, 9726</p>
                </div>
              </div>

              <p
                className="text-[#818181] text-xl uppercase mt-10"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Address
              </p>

              <p
                className="mt-4 text-xl text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                20 The Esplanade Surfers Paradise, Australia
              </p>
            </div>
          </div>
          {/* end last div */}
        </div>
        {/* Large End */}

        {/* Medium Start */}
        <div className="hidden md:grid lg:hidden grid-cols-3 w-full h-full">
          {/* start 1st div */}
          <div className="col-span-2 border border-gray-600">
            <div className="mx-10 my-10 flex flex-col">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-36 h-20"
                />
              </div>

              <p
                className="text-white text-xl pr-8 mt-8"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem, tempor ut ex aliquam, fringilla lacinia quam. Sed
                mattis ante at massa aliquet consectetur.
              </p>

              <div className="mt-8">
                <IconsFooter />
              </div>
            </div>
          </div>
          {/* end 1st div */}

          {/* start 2nd div */}
          <div className="col-span-1 border border-gray-600">
            <div className="mx-12 my-10 flex flex-col">
              <p
                className="text-[#818181] text-xl"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                EXPLORE
              </p>

              <div
                className="flex flex-col gap-5 mt-8 text-xl text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <p>Home</p>
                <p>About Us</p>
                <p>Booking</p>
                <p>Gallery</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          {/* end 2nd div */}
          {/* start last div */}
          <div className="col-span-3 border border-gray-600">
            <div className="mx-12 my-10 flex flex-col">
              <p
                className="text-[#818181] text-xl uppercase"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Get in Touch
              </p>

              <div
                className="flex flex-col gap-3 mt-4 text-xl text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <div className="flex justify-start items-center gap-4">
                  <FontAwesomeIcon icon={faPhone} className="text-white" />
                  <p>+01 5527 6045</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  <p>info@archilawn.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMailBulk} className="text-white" />
                  <p>PO Box 6418, QLD, 9726</p>
                </div>
              </div>

              <p
                className="text-[#818181] text-xl uppercase mt-6"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Address
              </p>

              <p
                className="mt-4 text-xl text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                20 The Esplanade Surfers Paradise, Australia
              </p>
            </div>
          </div>
          {/* end last div */}
        </div>
        {/* Medium End */}

        {/* start bottom  */}
        <div className="border border-gray-600 w-full flex justify-between items-center py-4 px-6">
          <p
            className="text-white"
            style={{
              fontFamily: "Poppins",
            }}
          >
            Copyright © 2024 All Rights Reserved by archilawn
          </p>
          <p
            className="text-white"
            style={{
              fontFamily: "Poppins",
            }}
          >
            Terms | Privacy | Cookies | Sitemap
          </p>
        </div>
        {/* end  bottom  */}
      </div>
      {/* end the footer */}
    </div>
  );
};

export default Footer;
