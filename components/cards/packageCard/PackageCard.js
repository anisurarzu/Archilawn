"use client";
import React from "react";
import PackageImage from "../../../public/images/packageImage/package_Image1.png";
import Image from "next/image";
import PackageSmallCards from "./PackageSmallCards";

const PackageCard = ({
  headerText,
  bgColor,
  packageCardheaderbg1,
  packageCardheaderbg2,
  packageCardheaderbg3,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[190vh] rounded-3xl shadow-lg lg:mx-0 md:mx-4 mx-1 lg:p-8 md:p-6 p-2 lg:pb-24 md:pb-10 pb-8"
        style={{ backgroundColor: bgColor }}
      >
        <h2
          className="lg:text-4xl md:text-3xl text-[22px] text-center text-[#123747] tracking-wide lg:pt-0 md:pt-0 pt-3"
          style={{
            fontFamily: "Tinos",
          }}
        >
          {headerText}
        </h2>

        <div className="container mx-auto rounded-2xl bg-white lg:my-8 md:my-5 my-5 lg:p-8 md:p-8 p-3 pb-3">
          <div className="rounded-2xl">
            <Image
              className="w-full lg:h-80 md:h-56 h-32"
              src={PackageImage}
              alt="Package Image 1"
            />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-3 gap-6 py-5">
            <PackageSmallCards
              headerbgColor={packageCardheaderbg1}
              headingText="Package 1"
              row1="Single Storied One Elevation 3D Render"
              row2="Site features inspiration images"
              row3="One round of design revisions"
              row4="Full-color scaled plan of project area"
              row5="$180/ 1 Week Delivery"
            />
            <PackageSmallCards
              headerbgColor={packageCardheaderbg2}
              headingText="Package 1"
              row1="Single Storied One Elevation 3D Render"
              row2="Site features inspiration images"
              row3="One round of design revisions"
              row4="Full-color scaled plan of project area"
              row5="$180/ 1 Week Delivery"
            />
            <PackageSmallCards
              headerbgColor={packageCardheaderbg3}
              headingText="Package 1"
              row1="Single Storied One Elevation 3D Render"
              row2="Site features inspiration images"
              row3="One round of design revisions"
              row4="Full-color scaled plan of project area"
              row5="$180/ 1 Week Delivery"
            />
          </div>
        </div>

        {/* Start Large and Medium  */}
        <div
          className="container mx-auto rounded-2xl bg-white hidden lg:flex md:flex justify-between items-center lg:text-xl md:text-xl text-base py-5 px-lg:6 md:px-6 px-3"
          style={{
            fontFamily: "Tinos",
          }}
        >
          <p className="text-[#383737]">
            Speak with a Specialist for Package details.
          </p>
          <button className="bg-[#8ABF55] text-white lg:py-3 md:py-2 py-1 lg:px-6 md:px-4 px-1 rounded-xl flex items-center">
            <div>Talk to a Specialist</div>
            <div className="pi pi-chevron-right ml-2 lg:text-[10px] md:text-[12px] text-[8px]"></div>
          </button>
        </div>
        {/* End Large and Medium  */}
        {/* Start Small  */}
        <div
          className="container mx-auto rounded-2xl bg-white flex flex-col justify-between items-center gap-3 lg:text-xl md:text-xl text-base py-5 px-lg:6 md:px-6 px-3"
          style={{
            fontFamily: "Tinos",
          }}
        >
          <p className="text-[#383737]">
            Speak with a Specialist for Package details.
          </p>
          <button className="bg-[#8ABF55] text-white lg:py-3 md:py-2 py-2 lg:px-6 md:px-4 px-4 rounded-xl flex items-center">
            <div>Talk to a Specialist</div>
            <div className="pi pi-chevron-right ml-2 lg:text-[10px] md:text-[12px] text-[12px]"></div>
          </button>
        </div>
        {/* End Small  */}
      </div>
    </div>
  );
};

export default PackageCard;
