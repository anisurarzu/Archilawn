import Image from "next/image";
import React from "react";

import FeelingInspiredImage from "../../../public/images/feelingInspired/feeling_Inspired_Image.png";

const FeelingInspired = () => {
  return (
    <div className="w-[180vh]">
      <div className="bg-[#383737] flex items-center justify-between rounded-tr-3xl rounded-br-3xl">
        <div className="">
          <p
            className="text-white lg:text-3xl md:text-3xl text-[22px] px-56 pb-16"
            style={{
              fontFamily: "Tinos",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            facilisis turpis. Sed eget eleifend dui, et tristique velit.
          </p>
        </div>

        <div className="">
          <Image
            className="rounded-tr-3xl rounded-br-3xl h-[30vh] w-[60vh]"
            src={FeelingInspiredImage}
            alt="Feeling Inspired"
            w={40}
            h={40}
          />
        </div>
      </div>

      {/* start bottom design */}
      <div className="flex justify-end items-start">
        <div className="bg-[#8ABF55] rounded-2xl w-[120vh] mr-16 -mt-20">
          <div
            className="rounded-2xl flex justify-between items-center py-5 px-12"
            style={{
              fontFamily: "Tinos",
            }}
          >
            <div className="text-white flex flex-col gap-3">
              <div className="flex gap-7 justify-between items-center">
                <p className="text-4xl font-semibold">Feeling Inspired?</p>
                <p className="border border-white w-[15vh]"></p>
              </div>
              <p className="text-[22px] w-[50vh]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem
              </p>
            </div>

            <button className="text-[#8ABF55] bg-white rounded-2xl flex items-center py-3 px-10">
              <div className="text-xl">Get Started</div>
              <div className="pi pi-chevron-right ml-3 mt-1 text-[13px]"></div>
            </button>
          </div>
        </div>
      </div>
      {/* end  */}
    </div>
  );
};

export default FeelingInspired;
