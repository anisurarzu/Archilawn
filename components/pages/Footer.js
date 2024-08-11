"use client";
import Image from "next/image";
import React from "react";
import IconsFooter from "../icons/IconsFooter";

const Footer = () => {
  return (
    <div className="bg-[#383737] w-full h-[502px] flex items-center justify-center">
      <div className="border w-full h-[450px] m-6">
        <div className="grid grid-cols-4 w-full h-full">
          <div className="col-span-2 border border-white">
            <div className="mx-10 my-10 flex flex-col gap-20">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>

              <p
                className="text-white"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem, tempor ut ex aliquam, fringilla lacinia quam. Sed
                mattis ante at massa aliquet consectetur.
              </p>

              <div>
                <IconsFooter />
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-white"></div>
          <div className="col-span-1 border border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
