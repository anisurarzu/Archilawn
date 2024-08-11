import React from "react";
import Image from "next/image"; // Ensure this import is added

const DesignProcessCard = ({ serviceImage, HeaderText, DescriptionText }) => {
  return (
    <div
      style={{
        fontFamily: "Tinos",
      }}
    >
      <Image
        src={serviceImage}
        alt="ServiceOne"
        className="lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8"
        width={40}
        height={40}
      />

      <p className="pt-6 pb-3 text-xl font-semibold">{HeaderText}</p>

      <div className="border-t border-[#8ABF55] w-12"></div>

      <p
        className="pt-2 text-xl lg:pr-40 md:pr-20 pr-4"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {DescriptionText}
      </p>
    </div>
  );
};

export default DesignProcessCard;
