import Link from "next/link";
import PackageText from "@/components/packageText/PackageText";
import Image from "next/image";
import React from "react";

const OurServiceCardLeft = ({
  id,
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
  console.log("ID: ", id);
  return (
    <div className="h-[40vh] md:h-[30vh] lg:h-[40vh] flex relative group">
      <Image
        src={ServiceImage}
        alt="ServiceImageOne"
        className="z-10 absolute inset-0 h-full object-cover rounded-br-[30px] rounded-tr-[30px] w-96 transition-transform duration-500 ease-out hover:scale-110"
        width={100}
        height={100}
      />

      {/* 3rd */}
      <div
        className={`h-full rounded-[30px] flex justify-end items-center md:ml-[550px] lg:ml-[1120px] z-3 absolute transition-all duration-1000`}
        style={{ backgroundColor: forthDivBgColor }}>
        <Link href={`/serviceDetails?id=${id}`}>
          <div className="flex items-end justify-end w-56 cursor-pointer">
            <p
              className="text-4xl font-bold text-white text-right pt-28 -rotate-90"
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
        className={`hidden h-full lg:flex justify-center items-center rounded-[30px] ml-[580px] z-2 absolute transition-all duration-1000`}
        style={{ backgroundColor: thirdDivBgColor }}>
        <div className="pl-36 pr-12">
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
        className={`h-full flex justify-center items-center rounded-[30px] ml-[300px] z-5 absolute transition-all duration-1000`}
        style={{ backgroundColor: secondDivBgColor }}>
        <p
          className="text-4xl text-white pl-36 pr-[60px] lg:pr-[60px] md:pr-[50px] w-96"
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

export default OurServiceCardLeft;
