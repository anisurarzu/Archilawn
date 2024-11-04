"use client";

import React, { forwardRef, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Typography } from "antd"; // Import Ant Design Typography component

// Service images
import ServiceImageOne from "../../public/images/serviceImage/Service_Image1.png";
import ServiceImageTwo from "../../public/images/serviceImage/Service_Image2.png";
import ServiceImageThree from "../../public/images/serviceImage/Service_Image3.png";

// Cards
import OurServiceCardLeft from "../cards/ourServiceCard/OurServiceCardLeft";
import OurServiceCardLeftMobile from "../cards/ourServiceCard/OurServiceCardLeftMobile";
import ContainerHeader from "../containerHeader/ContainerHeader";
import OurServiceCardRight from "../cards/ourServiceCard/OurServiceCardRight";
import OurServiceCardRightMobile from "../cards/ourServiceCard/OurServiceCardRightMobile";
import Link from "next/link";

const { Title } = Typography; // Destructure Title for ease of use

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
    <section className="bg-white mt-" ref={ref}>
      <div className="pb-8 md:pb-16 lg:pb-0">
        <div className="py-8 lg:pt-16 px-4 lg:px-0">
          <ContainerHeader containerHeader="Our Service Packages" />
        </div>

        {/* 1st service */}
        <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 mt-12">
          {/* Image section */}
          <div className="col-span-1 lg:col-span-3 xl:col-span-3 bg-[#A3C1D3]">
            <div className="w-full ">
              {/* Set width and height using Tailwind */}
              <Image
                src={ServiceImageOne}
                alt="Service Image 1"
                layout=""
                width={420}
                height={200}
                className="object-fit lg:rounded-r-lg xl:rounded-r-lg transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
          {/* title section */}
          <div className="bg-[#A3C1D3] col-span-1 lg:col-span-2 xl:col-span-2 ">
            <h3
              style={{
                fontFamily: "Tinos",
                lineHeight: "41px",
                textAlign: "center",
              }}
              className="text-white text-2xl lg:text-4xl xl:txt-4xl  pt-4 lg:pt-20 xl:pt-20">
              Building Exterior 3D Rendering
            </h3>
          </div>
          {/* details section */}
          <div className="bg-[#244B61] col-span-1 lg:col-span-5 xl:col-span-5">
            <div
              className="space-y-4 text-white p-8"
              style={{
                fontFamily: "Tinos",
              }}>
              <div className="border-b border-[#386E8C]">
                <h4 className="font-semibold text-[#88C0DF] text-[20px]">
                  Package 1
                </h4>
                <p>Single Storied One Elevation 3D Render</p>
                <p className="pb-2">$180 / 1 Week Delivery</p>
              </div>
              <div className="border-b border-[#386E8C]">
                <h4 className="font-semibold text-[#88C0DF] text-[20px]">
                  Package 2
                </h4>
                <p>Multi Storied One Complex Elevation 3D Render</p>
                <p>$180 / 1 Week Delivery</p>
              </div>
              <div className="border-b border-[#386E8C]">
                <h4 className="font-semibold text-[#88C0DF] text-[20px]">
                  Package 3
                </h4>
                <p>Multi Storied All Elevation 3D Render</p>
                <p>$180 / 1 Week Delivery</p>
              </div>
            </div>
          </div>
          {/* last section */}
          <div
            className="bg-[#123747] col-span-1 lg:rounded-r-[30px] xl:rounded-r-[30px] flex items-center justify-center text-2xl font-bold text-white cursor-pointer"
            style={{
              fontFamily: "Tinos",

              textAlign: "center",
            }}>
            <Link href="/detailsPages/DetailsPageOne">
              <p className=" lg:-rotate-90 xl:-rotate-90">View Details</p>
            </Link>
          </div>
        </div>
        {/* second service */}
        <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 mt-12">
          {/* Image section */}
          <div></div>
          <div
            className="bg-[#63641B] col-span-1 lg:rounded-l-[30px] xl:rounded-l-[30px] flex items-center justify-center text-2xl font-bold text-white cursor-pointer"
            style={{
              fontFamily: "Tinos",

              textAlign: "center",
            }}>
            <Link href="/detailsPages/DetailsPageOne">
              <p className=" lg:-rotate-90 xl:-rotate-90">View Details</p>
            </Link>
          </div>
          {/* title section */}

          {/* details section */}
          <div className="bg-[#7A8124] col-span-1 lg:col-span-5 xl:col-span-5">
            <div
              className="space-y-4 text-white p-8"
              style={{
                fontFamily: "Tinos",
              }}>
              <div className="border-b border-[#91972C]">
                <h4 className="font-semibold text-[#AAB136] text-[20px]">
                  Package 1
                </h4>
                <p>Front Yard 2D Site Plan & 3D Rendering</p>
                <p className="pb-2">$280 / 1 Week Delivery</p>
              </div>
              <div className="border-b border-[#91972C]">
                <h4 className="font-semibold text-[#AAB136] text-[20px]">
                  Package 2
                </h4>
                <p>Back Yard 2D Site Plan & 3D Rendering </p>
                <p>$480 / 2 Week Delivery</p>
              </div>
              <div className="border-b border-[#91972C]">
                <h4 className="font-semibold text-[#AAB136] text-[20px]">
                  Package 3
                </h4>
                <p>Full Yard 2D Site Plan & 3D Rendering </p>
              </div>
            </div>
          </div>
          <div className="bg-[#CFC857] col-span-1 lg:col-span-2 xl:col-span-2 ">
            <h3
              style={{
                fontFamily: "Tinos",
                lineHeight: "41px",
                textAlign: "center",
              }}
              className="text-white text-2xl lg:text-4xl xl:txt-4xl  pt-4 lg:pt-20 xl:pt-20">
              Landscape 2d site plan & 3d rendering
            </h3>
          </div>
          {/* last section */}

          <div className="col-span-1 lg:col-span-3 xl:col-span-3 bg-[#CFC857]">
            <div className="w-full ">
              {/* Set width and height using Tailwind */}
              <Image
                src={ServiceImageTwo}
                alt="Service Image 1"
                layout=""
                width={420}
                height={200}
                className="object-fit lg:rounded-l-lg xl:rounded-l-lg transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* 3rd service */}
        <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 pt-12">
          {/* Image section */}
          <div className="col-span-1 lg:col-span-3 xl:col-span-3 bg-[#C69C62]">
            <div className="w-full ">
              {/* Set width and height using Tailwind */}
              <Image
                src={ServiceImageThree}
                alt="Service Image 1"
                layout=""
                width={420}
                height={200}
                className="object-fit lg:rounded-r-lg xl:rounded-r-lg transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
          {/* title section */}
          <div className="bg-[#C69C62] col-span-1 lg:col-span-2 xl:col-span-2 ">
            <h3
              style={{
                fontFamily: "Tinos",
                lineHeight: "41px",
                textAlign: "center",
              }}
              className="text-white text-2xl lg:text-4xl xl:txt-4xl  pt-4 lg:pt-20 xl:pt-20">
              Interior Design & floor plan 3d rendering
            </h3>
          </div>
          {/* details section */}
          <div className="bg-[#754B22] col-span-1 lg:col-span-5 xl:col-span-5">
            <div
              className="space-y-4 text-white p-8"
              style={{
                fontFamily: "Tinos",
              }}>
              <div className="border-b border-[#A16C39]">
                <h4 className="font-semibold text-[#C2874E] text-[20px]">
                  Package 1
                </h4>
                <p>Small Space Design (Kitchen, Wall design)</p>
                <p className="pb-2">$180 / 1 Week Delivery</p>
              </div>
              <div className="border-b border-[#A16C39]">
                <h4 className="font-semibold text-[#C2874E] text-[20px]">
                  Package 2
                </h4>
                <p>Medium Space Design (Living room, Bed Room)</p>
                <p>$280 / 2 Week Delivery</p>
              </div>
              <div className="border-b border-[#A16C39]">
                <h4 className="font-semibold text-[#C2874E] text-[20px]">
                  Package 3
                </h4>
                <p>Big Space Design (Commercial Ofiice, Big Living)</p>
                <p>$380 / 3 Week Delivery</p>
              </div>
            </div>
          </div>
          {/* last section */}
          <div
            className="bg-[#593010] col-span-1 lg:rounded-r-[30px] xl:rounded-r-[30px] flex items-center justify-center text-2xl font-bold text-white cursor-pointer"
            style={{
              fontFamily: "Tinos",

              textAlign: "center",
            }}>
            <Link href="/detailsPages/DetailsPageOne">
              <p className=" lg:-rotate-90 xl:-rotate-90">View Details</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

OurService.displayName = "OurService";

export default OurService;
