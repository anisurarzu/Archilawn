"use client";
import React from "react";

//service images
import ServiceImageOne from "../../public/images/serviceImage/Service_Image1.png";
import ServiceImagetwo from "../../public/images/serviceImage/Service_Image2.png";
import ServiceImageThree from "../../public/images/serviceImage/Service_Image3.png";

//cards
import OurServiceCardLeft from "../cards/ourServiceCard/OurServiceCardLeft";
import OurServiceCardLeftMobile from "../cards/ourServiceCard/OurServiceCardLeftMobile";
import ContainerHeader from "../containerHeader/ContainerHeader";



export default function OurService() {
  return (
    <section className="bg-white">
      <div className="pb-16 md:pb-16 lg:pb-0">
        <div className="lg:pt-16 md:pt-16 pt-8 lg:pb-20 md:pb-16 pb-8 px-10 md:px-0 lg:px-0">
          <ContainerHeader containerHeader="Our Service Packages"/>
        </div>

        {/* START SERVICE */}
        <div className="hidden md:flex lg:flex flex-col gap-10">
          <OurServiceCardLeft
            ServiceImage={ServiceImageOne}
            secondDivBgColor="#A3C1D3"
            secondDivText="Building <br /> Exterior <br /> 3d rendering"
            thirdDivBgColor="#244B61"
            thirdDivHeaderText1="Package 1"
            thirdDivDescriptionText1="Single Storied One Elevation 3D Render $180/ 1 Week Delivery"
            thirdPackageColor1="#88C0DF"
            firsthrColor="#386E8C"
            thirdDivHeaderText2="Package 2"
            thirdDivDescriptionText2="Multi Storied One Complex Elevation 3D Render
            $180/ 1 Week Delivery"
            thirdPackageColor2="#88C0DF"
            secondhrColor="#386E8C"
            thirdDivHeaderText3="Package 3"
            thirdDivDescriptionText3="Multi Storied All Elevation 3D Render
            $180/ 1 Week Delivery"
            thirdPackageColor3="#88C0DF"
            forthDivBgColor="#123747"
          />
          <OurServiceCardLeft
            ServiceImage={ServiceImageThree}
            secondDivBgColor="#C69C62"
            secondDivText="Interior <br/> Design <br/> & floor plan <br/> 3d rendering"
            thirdDivBgColor="#754B22"
            thirdDivHeaderText1="Package 1"
            thirdDivDescriptionText1="Small Space Design (Kitchen, Wall design)
            $180/ 1 Week Delivery"
            thirdPackageColor1="#C2874E"
            firsthrColor="#A16C39"
            thirdDivHeaderText2="Package 2"
            thirdDivDescriptionText2="Medium Space Design (Living room, Bed Room)
            $280/ 2 Week Delivery"
            thirdPackageColor2="#C2874E"
            secondhrColor="#A16C39"
            thirdDivHeaderText3="Package 3"
            thirdDivDescriptionText3="Big Space Design (Commercial Ofiice, Big Living)
            $380/ 3 <br/> Week Delivery"
            thirdPackageColor3="#C2874E"
            forthDivBgColor="#59300E"
          />
        </div>

        {/* START For Small Device */}
        <div className="lg:hidden md:hidden flex flex-col gap-4">
          <OurServiceCardLeftMobile
            ServiceImage={ServiceImageOne}
            secondDivBgColor="#A3C1D3"
            secondDivText="Building <br /> Exterior <br /> 3d rendering"
            forthDivBgColor="#123747"
          />
          <OurServiceCardLeftMobile
            ServiceImage={ServiceImageThree}
            secondDivBgColor="#C69C62"
            secondDivText="Interior <br/> Design <br/> & floor plan <br/> 3d rendering"
            forthDivBgColor="#59300E"
          />
        </div>
        {/* END For Small Device */}

        {/* END SERVICE */}
      </div>
    </section>
  );
}
