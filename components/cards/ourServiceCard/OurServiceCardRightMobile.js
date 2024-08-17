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
        className={`h-full rounded-[30px] flex justify-end items-center ml-[190px] group-hover:ml-[60px] z-3 absolute transition-all duration-1000`}
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
        className={`h-full flex justify-center items-center rounded-[30px] ml-[245px] group-hover:ml-[110px] z-5 absolute transition-all duration-1000 overflow-hidden`}
        style={{ backgroundColor: secondDivBgColor }}
      >
        <p
          className="text-lg text-white pr-20 pl-6"
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
          className="z-10 absolute h-full object-cover rounded-bl-[30px] rounded-tl-[30px] w-36"
        />
      </div>

      {/* end  */}
    </div>
  );
};

export default OurServiceCardRightMobile;
