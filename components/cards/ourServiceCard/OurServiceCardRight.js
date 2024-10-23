import Link from "next/link";
import PackageText from "@/components/packageText/PackageText";
import Image from "next/image";
import React from "react";

const OurServiceCardRight = ({
  ServiceImage,
  secondDivBgColor,
  secondDivText,
  thirdDivBgColor,
  thirdDivHeaderText1,
  thirdDivDescriptionText1,
  thirdPackageColor1,
  firsthrColor,
  thirdDivHeaderText2,
  thirdDivDescriptionText2,
  thirdPackageColor2,
  secondhrColor,
  thirdDivHeaderText3,
  thirdDivDescriptionText3,
  thirdPackageColor3,
  forthDivBgColor,
}) => {
  return (
    <div className="h-[40vh] md:h-[30vh] lg:h-[40vh] flex relative group overflow-hidden">
      {/* 4th */}
      <div
        className={`h-full rounded-[30px] flex justify-end items-center lg:ml-[545px] md:ml-[32px] ml-[45px] z-3 absolute transition-all duration-1000`}
        style={{ backgroundColor: forthDivBgColor }}>
        <Link href="/serviceDetails">
          <div className="flex items-end justify-start w-56 cursor-pointer">
            <p
              className="text-4xl font-bold text-white text-right pb-28 -rotate-90"
              style={{
                fontFamily: "Tinos",
              }}>
              View Details
            </p>
          </div>
        </Link>
      </div>

      {/* 2nd */}
      <div
        className={`hidden h-full lg:flex justify-center items-center rounded-[30px] ml-[650px] z-2 absolute transition-all duration-1000`}
        style={{ backgroundColor: thirdDivBgColor }}>
        <div className="pr-36 pl-12">
          <PackageText
            headerText={thirdDivHeaderText1}
            descriptionText={thirdDivDescriptionText1}
            packingColor={thirdPackageColor1}
          />

          <hr
            style={{ borderColor: firsthrColor, borderWidth: "1px" }}
            className="my-6"
          />

          <PackageText
            headerText={thirdDivHeaderText2}
            descriptionText={thirdDivDescriptionText2}
            packingColor={thirdPackageColor2}
          />

          <hr
            style={{ borderColor: secondhrColor, borderWidth: "1px" }}
            className="my-6"
          />

          {thirdDivHeaderText3 !== "" && (
            <PackageText
              headerText={thirdDivHeaderText3}
              descriptionText={thirdDivDescriptionText3}
              packingColor={thirdPackageColor3}
            />
          )}
        </div>
      </div>

      {/* 1st */}
      <div
        className={`h-full flex justify-center items-center rounded-[30px] lg:ml-[1200px] md:ml-[110px] ml-[1200px] z-5 absolute transition-all duration-1000`}
        style={{ backgroundColor: secondDivBgColor }}>
        <p
          className="text-4xl text-white pr-32 pl-[60px] lg:pl-[60px] md:pl-[45px] w-96"
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
          className="z-10 absolute h-full object-cover rounded-bl-[30px] rounded-tl-[30px]"
        />
      </div>

      {/* end  */}
    </div>
  );
};

export default OurServiceCardRight;
