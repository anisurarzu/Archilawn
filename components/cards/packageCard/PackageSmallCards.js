import React from "react";

const PackageSmallCards = ({ headerbgColor, headingText, row1, row2, row3, row4, row5 }) => {
  return (
    <div className="col-span-1 border border-[#D9D9E0] rounded-2xl">
      <div
        className="lg:py-5 md:py-4 py-3 rounded-t-2xl rounded-b-md"
        style={{ backgroundColor: headerbgColor }}
      >
        <p
          className="text-white lg:text-2xl md:text-xl text-xl font-semibold lg:px-7 md:px-5 px-5"
          style={{
            fontFamily: "Tinos",
          }}
        >
          {headingText}
        </p>
      </div>
      <div
        className="text-[#383737] lg:text-lg md:text-base text-base lg:px-7 md:px-4 px-4 lg:py-6 md:py-4 py-4  border-b border-[#D9D9E0]"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {row1}
      </div>
      <div
        className="text-[#383737] lg:text-lg md:text-base text-base lg:px-7 md:px-4 px-4 lg:py-6 md:py-4 py-4  border-b border-[#D9D9E0]"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {row2}
      </div>
      <div
        className="text-[#383737] lg:text-lg md:text-base text-base lg:px-7 md:px-4 px-4 lg:py-6 md:py-4 py-4  border-b border-[#D9D9E0]"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {row3}
      </div>
      <div
        className="text-[#383737] lg:text-lg md:text-base text-base lg:px-7 md:px-4 px-4 lg:py-6 md:py-4 py-4  border-b border-[#D9D9E0]"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {row4}
      </div>
      <div
        className="text-[#383737] lg:text-lg md:text-base text-base lg:px-7 md:px-4 px-4 lg:py-6 md:py-4 py-4"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {row5}
      </div>
    </div>
  );
};

export default PackageSmallCards;
