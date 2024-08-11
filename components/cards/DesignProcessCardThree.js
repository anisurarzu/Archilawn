import React from "react";
import Image from "next/image"; // Ensure this import is added

const DesignProcessCardThree = ({ serviceImage, HeaderText, DescriptionText }) => {
  return (
    <div className="lg:px-10 md:px-10 px-0 lg:mx-10 md:mx-10 mx-0 mt-6 md:mt-0 lg:mt-0"
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
        className="pt-2 text-xl"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {DescriptionText}
      </p>
    </div>
  );
};

export default DesignProcessCardThree;
