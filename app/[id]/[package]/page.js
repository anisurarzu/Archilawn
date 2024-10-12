import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";
import ProjectGallery from "@/components/pages/projectGallery/ProjectGallery";
import Image from "next/image";
import React from "react";
import { Card } from "antd";
import Link from "next/link";

export default function PackageDetails() {
  return (
    <div>
      <Navbar />

      {/* Header Image */}
      <div className="relative w-full h-40 sm:h-60 md:h-72 lg:h-96">
        <Image
          src="/images/projectGallerybgImage.png"
          layout="fill"
          objectFit="cover"
          alt="Test"
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="pt-8 grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16 mx-auto my-8">
        {/* Left Text Section */}
        <div className="lg:col-span-3 w-full pr-0 lg:pr-12">
          <h2 className="text-green-600 text-sm font-semibold">THE BRIEF</h2>
          <h3 className="text-xl sm:text-2xl font-semibold mt-2">
            To provide a modern extension to a detached rural dwelling in order
            to house a private swimming pool and spa
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ipsum lorem, tempor ut ex aliquam, fringilla lacinia quam. Sed
            mattis ante at massa aliquet consectetur. Nullam enim sapien,
            tristique sit amet lorem lacinia, luctus molestie velit. Nam nunc
            quam, elementum nec neque nec, ullamcorper interdum orci. Sed
            gravida urna eu sapien maximus molestie. Quisque in quam finibus,
            interdum nulla in, sodales massa. Vestibulum volutpat urna porttitor
            arcu tristique, auctor scelerisque enim mattis. Donec et tristique
            dui. Mauris faucibus in arcu nec mattis.
          </p>
        </div>

        {/* Right Card Section */}
        <div className="w-full">
          <Card className="border rounded-lg shadow-none p-4">
            {/* Project Details */}
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">PROJECT</span>
              <span className="font-semibold">C HOUSE</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">M2</span>
              <span className="font-semibold">135</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">CATEGORY</span>
              <span className="font-semibold">HOUSE</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">YEAR</span>
              <span className="font-semibold">2024</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">STYLE</span>
              <span className="font-semibold">NEOCLASSIC</span>
            </div>

            {/* Order Button */}
            <Link href="/serviceDetails/packageDetails/orderPage">
              <button className="w-full bg-[#8ABF55] text-white py-2 lg:py-3 rounded-xl flex items-center justify-center text-xs lg:text-sm">
                <span>Go To Order</span>
                <i className="pi pi-chevron-right ml-2 text-[8px] lg:text-[10px]" />
              </button>
            </Link>
          </Card>
        </div>
      </div>

      {/* Project Gallery */}
      <div>
        <ProjectGallery />
      </div>

      {/* Footer */}
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
