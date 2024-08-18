import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";
import ProjectGallery from "@/components/pages/projectGallery/ProjectGallery";
import Image from "next/image";
import React from "react";
import { Card } from "antd";

export default function PackageDetails() {
  return (
    <div>
      <Navbar />
      <div>
        <Image
          src={"/images/projectGallerybgImage.png"}
          width={1500}
          height={150}
          alt={"Test"}
        />
      </div>

      <div className="pt-8 grid grid-cols-4 gap-8  px-4 mx-[50px] my-8">
        {/* Left Text Section */}
        <div className="col-span-3 pr-12">
          <h2 className="text-green-600 text-sm font-semibold">THE BRIEF</h2>
          <h3 className="text-2xl font-semibold mt-2">
            To provide a modern extension to a detached rural dwelling in order
            to house a private swimming pool and spa
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
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
        <div className="col-span-1">
          <Card className="border rounded-lg shadow-none">
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
          </Card>
        </div>
      </div>
      <div>
        <ProjectGallery />
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
