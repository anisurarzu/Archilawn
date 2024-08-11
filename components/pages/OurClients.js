"use client"; // This ensures the component is a client component

import React from "react";
import Image from "next/image";

import ClientOne from "../../public/images/clients/client_1.png";
import ClientTwo from "../../public/images/clients/client_2.png";
import ClientThree from "../../public/images/clients/client_3.png";
import ClientFour from "../../public/images/clients/client_4.png";
import ClientFive from "../../public/images/clients/client_5.png";

const OurClients = () => {
  // Define keyframes as a string to use inline
  const scrollAnimation = `
    @keyframes scroll {
      from { transform: translateX(0%); }
      to { transform: translateX(-100%); }
    }
  `;

  return (
    <div className="bg-[#8ABF55] h-[10vh] overflow-hidden relative">
      {/* Add the keyframes inline */}
      <style>{scrollAnimation}</style>
      <div
        className="absolute top-0 left-0 h-full flex"
        style={{
          width: "200%",
          animation: "scroll 50s linear infinite",
        }}
      >
        {/* Duplicate the list of clients to create a seamless scroll effect */}
        <div className="flex justify-between items-center gap-6 h-full w-full">
          <Image src={ClientOne} alt="ClientOne" />
          <Image src={ClientTwo} alt="ClientTwo" />
          <Image src={ClientThree} alt="ClientThree" />
          <Image src={ClientFour} alt="ClientFour" />
          <Image src={ClientFive} alt="ClientFive" />
        </div>
        <div className="flex justify-between items-center gap-6 h-full w-full">
          <Image src={ClientOne} alt="ClientOne" />
          <Image src={ClientTwo} alt="ClientTwo" />
          <Image src={ClientThree} alt="ClientThree" />
          <Image src={ClientFour} alt="ClientFour" />
          <Image src={ClientFive} alt="ClientFive" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
