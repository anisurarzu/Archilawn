"use client";
import Image from "next/image";
import React, { forwardRef } from "react";
import IconsFooter from "../icons/IconsFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Reusable component for contact items
const ContactItem = ({ icon, text }) => (
  <div className="flex justify-start items-center gap-4">
    <FontAwesomeIcon icon={icon} className="text-white" />
    <p>{text}</p>
  </div>
);

// ForwardRef to handle ref properly
const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-[#383737] w-full flex items-center justify-center">
      <div className="border border-gray-600 w-full lg:m-8 md:m-5 m-3">
        {/* Start Footer */}

        {/* Large View */}
        <div className="hidden md:hidden lg:grid grid-cols-4 w-full h-full">
          {/* 1st Column */}
          <div className="col-span-2 border border-gray-600">
            <div className="mx-8 my-6 flex flex-col">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-32 h-16"
                />
              </div>
              <p className="text-white text-xl pr-56 mt-6 poppins-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem, tempor ut ex aliquam, fringilla lacinia quam. Sed
                mattis ante at massa aliquet consectetur.
              </p>
              <div className="mt-8">
                <IconsFooter />
              </div>
            </div>
          </div>

          {/* 2nd Column */}
          <div className="col-span-1 border border-gray-600">
            <div className="mx-8 my-6 flex flex-col">
              <p className="text-[#818181] text-xl uppercase poppins-font">
                Explore
              </p>
              <div className="flex flex-col gap-3 mt-3 text-xl text-white poppins-font">
                <p>Home</p>
                <p>About Us</p>
                <p>Booking</p>
                <p>Gallery</p>
                <p>Contact</p>
              </div>
            </div>
          </div>

          {/* 3rd Column */}
          <div className="col-span-1 border border-gray-600">
            <div className="mx-8 my-6 flex flex-col">
              <p className="text-[#818181] text-xl uppercase poppins-font">
                Get in Touch
              </p>
              <div className="flex flex-col gap-3 mt-3 text-xl text-white poppins-font">
                <ContactItem icon={faPhone} text="+01 5527 6045" />
                <ContactItem icon={faEnvelope} text="info@archilawn.com" />
                <ContactItem icon={faMailBulk} text="PO Box 6418, QLD, 9726" />
              </div>
              <p className="text-[#818181] text-xl uppercase mt-6 poppins-font">
                Address
              </p>
              <p className="mt-3 text-xl text-white poppins-font">
                20 The Esplanade Surfers Paradise, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border border-gray-600 w-full hidden md:flex lg:flex justify-between items-center lg:py-2 md:py-2 px-6">
          <p className="text-white poppins-font">
            Copyright © 2024 All Rights Reserved by archilawn
          </p>
          <p className="text-white poppins-font">
            Terms | Privacy | Cookies | Sitemap
          </p>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col md:hidden lg:hidden w-full h-full">
          {/* 1st Column */}
          <div className="border border-gray-600">
            <div className="mx-3 my-3 flex flex-col">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-24 h-12"
                />
              </div>
              <p className="text-white text-sm text-justify mt-3 poppins-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-3">
                <IconsFooter />
              </div>
            </div>
          </div>

          {/* 2nd Column */}
          <div className="border border-gray-600">
            <div className="mx-3 my-3 flex flex-col">
              <p className="text-[#818181] text-sm uppercase poppins-font">
                Explore
              </p>
              <div className="flex flex-col gap-1 mt-2 text-sm text-white poppins-font">
                <p>Home</p>
                <p>About Us</p>
                <p>Booking</p>
                <p>Gallery</p>
                <p>Contact</p>
              </div>
            </div>
          </div>

          {/* 3rd Column */}
          <div className="border border-gray-600">
            <div className="mx-3 my-3 flex flex-col">
              <p className="text-[#818181] text-sm uppercase poppins-font">
                Get in Touch
              </p>
              <div className="flex flex-col gap-3 mt-1 text-sm text-white poppins-font">
                <ContactItem icon={faPhone} text="+01 5527 6045" />
                <ContactItem icon={faEnvelope} text="info@archilawn.com" />
                <ContactItem icon={faMailBulk} text="PO Box 6418, QLD, 9726" />
              </div>
              <p className="text-[#818181] text-sm uppercase mt-3 poppins-font">
                Address
              </p>
              <p className="mt-1 text-sm text-white poppins-font">
                20 The Esplanade Surfers Paradise, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Section */}
        <div className="w-full flex md:hidden lg:hidden flex-col gap-1 justify-between items-center border border-gray-600 py-2 text-xs">
          <p className="text-white poppins-font">
            Copyright © 2024 All Rights Reserved by archilawn
          </p>
          <p className="text-white poppins-font">
            Terms | Privacy | Cookies | Sitemap
          </p>
        </div>
      </div>
    </div>
  );
});

// Assign a display name for better debugging
Footer.displayName = "Footer";

export default Footer;
