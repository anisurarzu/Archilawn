import Image from "next/image";
import React from "react";

import FeelingInspiredImage from "../../../public/images/feelingInspired/feeling_Inspired_Image.png";

const FeelingInspired = () => {
  return (
    <div className="lg:w-[185vh] md:w-[60vh] w-[50vh]">
      <div className="bg-[#383737] flex items-center justify-between rounded-tr-3xl rounded-br-3xl">
        <div className="">
          <p
            className="text-white lg:text-3xl md:text-2xl text-[13px] lg:px-56 md:px-6 px-2 pb-10 text-justify sm:text-left"
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
            className="rounded-tr-3xl rounded-br-3xl lg:h-[30vh] md:h-[20vh] h-[17vh] lg:w-[65vh] md:w-[45vh] w-[40vh]"
            src={FeelingInspiredImage}
            alt="Feeling Inspired"
            w={40}
            h={40}
          />
        </div>
      </div>

      {/* start bottom design large and medium */}
      <div className="lg:flex md:flex hidden justify-end items-start">
        <div className="bg-[#8ABF55] rounded-2xl lg:w-[120vh] md:w-[50vh] w-[42vh] lg:mr-16 md:mr-16 mr-8 lg:-mt-20 md:-mt-17 -mt-10">
          <div
            className="rounded-2xl flex justify-between items-center lg:py-5 md:py-3 py-1 lg:px-12 md:px-6 px-2"
            style={{
              fontFamily: "Tinos",
            }}
          >
            <div className="text-white flex flex-col lg:gap-3 md:gap-1 gap-1">
              <div className="flex lg:gap-7 md:gap-6 gap-2 lg:justify-between md:justify-start justify-start items-center">
                <p className="lg:text-4xl md:text-2xl text-xl font-semibold">
                  Feeling Inspired?
                </p>
                <p className="border border-white lg:w-[15vh] md:w-[5vh] w-[5vh]"></p>
              </div>

              <p className="lg:text-[22px] md:text-[21px] text-[15px] lg:w-[50vh] md:w-[33vh] w-[20vh] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem
              </p>
            </div>

            <button className="text-[#8ABF55] bg-white rounded-2xl flex items-center lg:py-3 md:py-2 py-3 lg:px-10 md:px-4 px-10">
              <div className="lg:text-xl md:text-xl text-sm">Get Started</div>
              <div className="pi pi-chevron-right ml-3 mt-1 text-[13px]"></div>
            </button>
          </div>
        </div>
      </div>
      {/* start bottom design large and medium*/}

      {/* start bottom design small device */}
      <div className="flex md:hidden lg:hidden justify-end items-start">
        <div className="bg-[#8ABF55] rounded-2xl w-[42vh] mr-8 -mt-10">
          <div
            className="rounded-2xl flex flex-col gap-1 justify-between items-center py-3 px-2"
            style={{
              fontFamily: "Tinos",
            }}
          >
            <div className="text-white flex flex-col gap-1 mx-2">
              <div className="flex gap-4 justify-start items-center">
                <p className="text-xl font-semibold">Feeling Inspired?</p>
                <p className="border border-white w-[7vh]"></p>
              </div>

              <p className="text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ipsum lorem
              </p>
            </div>

            <div className="w-full flex justify-end items-center">
              <button className="text-[#8ABF55] bg-white rounded-lg flex items-center justify-end py-1 px-4">
                <div className="text-sm">Get Started</div>
                <div className="pi pi-chevron-right ml-2 text-[10px]"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* start bottom design small device*/}
      {/* end  */}
    </div>
  );
};

export default FeelingInspired;
