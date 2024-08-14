"use client";

import React from "react";
import Image from "next/image";

import ServiceOne from "../../public/images/services/service_1.png";
import ServiceTwo from "../../public/images/services/service_2.png";
import ServiceThree from "../../public/images/services/service_3.png";
import DesignProcessCard from "../cards/DesignProcessCard";
import DesignProcessCardTwo from "../cards/DesignProcessCardTwo";
import DesignProcessCardThree from "../cards/DesignProcessCardThree";
import ContainerHeader from "../containerHeader/ContainerHeader";
import DesignProcessCardMobile from "../cards/designProcessCard/DesignProcessCardMobile";

export default function DesignProcess() {
  return (
    <section className="bg-[#F3F3F9]  lg:h-[680px] md:h-[1000px] pb-10 shadow-sm">
      <div className="container mx-auto">
        <div className="lg:pt-24 md:pt-24 pt-12 lg:pb-20 md:pb-20 pb-8 px-10 md:px-0 lg:px-0">
          <ContainerHeader containerHeader="Our Online Architectural & Landscape Design Process" />
        </div>

        {/* Start div  */}

        {/* Large Medium Device Start */}
        <div className="hidden lg:grid md:grid grid-cols-1 gap-3 bg-white shadow-2xl py-12 px-10 rounded-[30px] md:grid-cols-2 lg:grid-cols-3">
          <div className="border-r border-[#D2D2D2]">
            <DesignProcessCard
              serviceImage={ServiceOne}
              HeaderText=" 1. Build Your Design Profile"
              DescriptionText="Share project details & inspiration. Upload photos & measurements. Get
              assigned to your designer."
            />
          </div>
          <div className="border-r border-[#D2D2D2]">
            <DesignProcessCardTwo
              serviceImage={ServiceTwo}
              HeaderText="2. Collaborate with Designer"
              DescriptionText="Host a virtual consult in your yard. Align on your project scope. Your design is underway."
            />
          </div>
          <div className="mt-0 lg:mt-0 md:mt-6 -ml-0 lg:-ml-0 md:-ml-20">
            <DesignProcessCardThree
              serviceImage={ServiceThree}
              HeaderText="3. Finalize Your Design"
              DescriptionText="Review your landscape design. Request revisions if needed. Coor-
            dinate your tree and plant delivery with Bower & Branch."
            />
          </div>
        </div>
        {/* Large Medium Device Start */}

        {/* Mobile Device Start */}
        <div className="flex flex-col md:hidden lg:hidden gap-12 bg-white shadow-sm mx-3 py-8 px-8 rounded-[30px] md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <DesignProcessCardMobile
              serviceImage={ServiceOne}
              HeaderText="Build Your Design Profile"
              DescriptionText="Share project details & inspiration. Upload photos & measurements. Get
              assigned to your designer."
            />
          </div>
          <div className="">
            <DesignProcessCardMobile
              serviceImage={ServiceTwo}
              HeaderText="Collaborate with Designer"
              DescriptionText="Host a virtual consult in your yard. Align on your project scope. Your design is underway."
            />
          </div>
          <div className="">
            <DesignProcessCardMobile
              serviceImage={ServiceThree}
              HeaderText="Finalize Your Design"
              DescriptionText="Review your landscape design. Request revisions if needed. Coor-
            dinate your tree and plant delivery with Bower & Branch."
            />
          </div>
        </div>
        {/* Mobile Device Start */}
        {/* End div  */}
      </div>
    </section>
  );
}
