import Link from "next/link";
import Image from "next/image";
import React from "react";

const OurServiceCardLeftMobile = ({
  ServiceImage,
  secondDivBgColor,
  secondDivText,
  forthDivBgColor,
}) => {
  return (
    <div className="flex flex-col h-[60vh] md:h-[40vh] rounded-[30px] overflow-hidden group">
      {/* Upper Section: Image */}
      <div className="flex-1 relative">
        <Image
          src={ServiceImage}
          alt="Service Image"
          className="object-cover w-full h-full rounded-t-[30px] transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Lower Section: Text Content */}
      <div className="flex flex-col h-1/2 w-full rounded-b-[30px] overflow-hidden">
        {/* Service Description Section */}
        <div
          className="flex items-center justify-center flex-1 w-full px-4 text-center text-white"
          style={{ backgroundColor: secondDivBgColor }}>
          <p
            className="text-base font-semibold"
            style={{ fontFamily: "Tinos" }}
            dangerouslySetInnerHTML={{ __html: secondDivText }}
          />
        </div>

        {/* View Details Section */}
        <div
          className="flex items-center justify-center flex-1 w-full text-lg font-bold text-white cursor-pointer"
          style={{ backgroundColor: forthDivBgColor }}>
          <Link href="/detailsPages/DetailsPageOne">
            <p className="rotate-0">View Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCardLeftMobile;
