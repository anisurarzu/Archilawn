import PackageText from "@/components/packageText/PackageText";
import Image from "next/image";
import React from "react";

const OurServiceCardLeftMobile = ({
  ServiceImage,
  secondDivBgColor,
  secondDivText,
  forthDivBgColor,
}) => {
  return (
    <div className="h-[20vh] flex relative group">
      <Image
        src={ServiceImage}
        alt="ServiceImageOne"
        className="z-10 absolute inset-0 h-full object-cover rounded-br-[30px] rounded-tr-[30px] w-36"
      />

      {/* 3rd */}
      <div
        className={`h-full rounded-[30px] flex justify-end items-center ml-[70px] group-hover:ml-[180px] z-3 absolute transition-all duration-1000`}
        style={{ backgroundColor: forthDivBgColor }}
      >
        <div className="flex items-end justify-end w-36">
          <p
            className="text-lg font-bold text-white text-right pt-12 -rotate-90"
            style={{
              fontFamily: "Tinos",
            }}
          >
            View Details
          </p>
        </div>
      </div>

      {/* 1st */}
      <div
        className={`h-full flex justify-center items-center rounded-[30px] md:ml-[90px] -ml-8 group-hover:ml-20 z-5 absolute transition-all duration-1000`}
        style={{ backgroundColor: secondDivBgColor }}
      >
        <p
          className="text-lg text-white pl-20 pr-6"
          style={{
            fontFamily: "Tinos",
          }}
          dangerouslySetInnerHTML={{ __html: secondDivText }} // Correct usage
        />
      </div>

      {/* end  */}
    </div>
  );
};

export default OurServiceCardLeftMobile;
