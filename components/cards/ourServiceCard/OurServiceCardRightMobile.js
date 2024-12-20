import Link from "next/link";
import PackageText from "@/components/packageText/PackageText";
import Image from "next/image";
import React from "react";

const OurServiceCardRightMobile = ({
  ServiceImage,
  secondDivBgColor,
  secondDivText,
  forthDivBgColor,
}) => {
  return (
    <div className="h-[20vh] flex relative group overflow-hidden">
      {/* 3rd */}
      <div
        className={`h-full rounded-[30px] flex justify-end items-center ml-[110px] z-3 absolute transition-all duration-1000`}
        style={{ backgroundColor: forthDivBgColor }}
      >
        <Link href="/detailsPages/DetailsPageOne">
          <div className="flex items-start justify-start w-36 cursor-pointer">
            <p
              className="text-lg font-bold text-white text-right pb-14 -rotate-90"
              style={{
                fontFamily: "Tinos",
              }}
            >
              View Details
            </p>
          </div>
        </Link>
      </div>

      {/* 1st */}
      <div
        className={`h-full flex justify-center items-center rounded-[30px] ml-[160px] z-5 absolute transition-all duration-1000 overflow-hidden`}
        style={{ backgroundColor: secondDivBgColor }}
      >
        <p
          className="text-lg text-white pr-16 pl-6 w-[200px]"
          style={{
            fontFamily: "Tinos",
          }}
          dangerouslySetInnerHTML={{ __html: secondDivText }} // Correct usage
        />
      </div>

      <div className="flex justify-end items-end w-full">
        <Image
          src={ServiceImage}
          alt="ServiceImageOne"
           className="z-10 absolute inset-0 h-full object-cover rounded-br-[30px] rounded-tr-[30px] w-96 transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>

      {/* end  */}
    </div>
  );
};

export default OurServiceCardRightMobile;
