import React from "react";
import Image from "next/image"; // Ensure this import is added

const DesignProcessCardMobile = ({
  serviceImage,
  HeaderText,
  DescriptionText,
}) => {
  return (
    <div
      style={{
        fontFamily: "Tinos",
      }}
    >
      <div className="w-full flex justify-center items-center">
        <Image
          src={serviceImage}
          alt="ServiceOne"
          className="w-8 h-8"
          width={40}
          height={40}
        />
      </div>

      <p className="pt-2 pb-2 text-xl text-center font-semibold text-black">
        {HeaderText}
      </p>

      <div className="flex justify-center items-center">
        <div className="border-t border-[#8ABF55] w-[10vh]"></div>
      </div>

      <p
        className="pt-2 text-lg text-center text-black"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {DescriptionText}
      </p>
    </div>
  );
};

export default DesignProcessCardMobile;
