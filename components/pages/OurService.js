"use client";

import React, { forwardRef, useState, useEffect } from "react";
import axios from "axios";

// Service images
import ServiceImageOne from "../../public/images/serviceImage/Service_Image1.png";
import ServiceImagetwo from "../../public/images/serviceImage/Service_Image2.png";
import ServiceImageThree from "../../public/images/serviceImage/Service_Image3.png";

// Cards
import OurServiceCardLeft from "../cards/ourServiceCard/OurServiceCardLeft";
import OurServiceCardLeftMobile from "../cards/ourServiceCard/OurServiceCardLeftMobile";
import ContainerHeader from "../containerHeader/ContainerHeader";
import OurServiceCardRight from "../cards/ourServiceCard/OurServiceCardRight";
import OurServiceCardRightMobile from "../cards/ourServiceCard/OurServiceCardRightMobile";

const OurService = forwardRef((props, ref) => {
  const [services, setServices] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/services`);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-white" ref={ref}>
      <div className="pb-8 md:pb-16 lg:pb-0">
        <div className="pt-8 lg:pt-16 px-4 lg:px-0">
          <ContainerHeader containerHeader="Our Service Packages" />
        </div>

        {/* START DESKTOP VIEW */}
        <div className="hidden md:flex lg:flex flex-col gap-10">
          <OurServiceCardLeft
            id={1}
            ServiceImage={services?.[0]?.image}
            secondDivBgColor="#A3C1D3"
            secondDivText={services?.[0]?.title}
            thirdDivBgColor="#244B61"
            thirdDivHeaderText1="Package 1"
            thirdDivDescriptionText1="Single Storied One Elevation 3D Render $180/ 1 Week Delivery"
            thirdPackageColor1="#88C0DF"
            firsthrColor="#386E8C"
            thirdDivHeaderText2="Package 2"
            thirdDivDescriptionText2="Multi Storied One Complex Elevation 3D Render $180/ 1 Week Delivery"
            thirdPackageColor2="#88C0DF"
            secondhrColor="#386E8C"
            thirdDivHeaderText3="Package 3"
            thirdDivDescriptionText3="Multi Storied All Elevation 3D Render $180/ 1 Week Delivery"
            thirdPackageColor3="#88C0DF"
            forthDivBgColor="#123747"
          />
          <OurServiceCardRight
            ServiceImage={ServiceImagetwo}
            secondDivBgColor="#CFC857"
            secondDivText="Landscape 2d site plan & 3d rendering"
            thirdDivBgColor="#7A8015"
            thirdDivHeaderText1="Package 1"
            thirdDivDescriptionText1="Front Yard 2D Site Plan & 3D Rendering $280/ 1 Week Delivery"
            thirdPackageColor1="#AAB126"
            firsthrColor="#969D17"
            thirdDivHeaderText2="Package 2"
            thirdDivDescriptionText2="Back Yard 2D Site Plan & 3D Rendering $480/ 2 Week Delivery"
            thirdPackageColor2="#AAB126"
            secondhrColor="#969D17"
            thirdDivHeaderText3="Package 3"
            thirdPackageColor3="#AAB126"
            thirdDivDescriptionText3="Full Yard 2D Site Plan & 3D Rendering"
            forthDivBgColor="#636304"
          />
          <OurServiceCardLeft
            ServiceImage={ServiceImageThree}
            secondDivBgColor="#C69C62"
            secondDivText="Interior Design & floor plan 3d rendering"
            thirdDivBgColor="#754B22"
            thirdDivHeaderText1="Package 1"
            thirdDivDescriptionText1="Small Space Design (Kitchen, Wall design) $180/ 1 Week Delivery"
            thirdPackageColor1="#C2874E"
            firsthrColor="#A16C39"
            thirdDivHeaderText2="Package 2"
            thirdDivDescriptionText2="Medium Space Design (Living room, Bed Room) $280/ 2 Week Delivery"
            thirdPackageColor2="#C2874E"
            secondhrColor="#A16C39"
            thirdDivHeaderText3="Package 3"
            thirdDivDescriptionText3="Big Space Design (Commercial Office, Big Living) $380/ 3 Week Delivery"
            thirdPackageColor3="#C2874E"
            forthDivBgColor="#59300E"
          />
        </div>

        {/* START MOBILE VIEW */}
        <div className="lg:hidden md:hidden flex flex-col gap-4 px-4">
          <OurServiceCardLeftMobile
            ServiceImage={ServiceImageOne}
            secondDivBgColor="#A3C1D3"
            secondDivText="Building Exterior 3d rendering"
            forthDivBgColor="#123747"
          />
          <div className="mt-2">
            <OurServiceCardRightMobile
              ServiceImage={ServiceImagetwo}
              secondDivBgColor="#CFC857"
              secondDivText="Landscape 2d site plan & 3d rendering"
              forthDivBgColor="#636304"
            />
          </div>
          <div className="mt-2">
            <OurServiceCardLeftMobile
              ServiceImage={ServiceImageThree}
              secondDivBgColor="#C69C62"
              secondDivText="Interior Design & floor plan 3d rendering"
              forthDivBgColor="#59300E"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

OurService.displayName = "OurService";

export default OurService;
