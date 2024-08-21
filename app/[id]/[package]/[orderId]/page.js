import Navbar from "@/components/pages/Navbar";
import { Button, Card, Select, Switch, Option } from "antd";
import React from "react";
import Image from "next/image";

// const { Option } = Select;

export default function OrderDetails() {
  return (
    <div>
      <Navbar />
      {/* Product details section */}
      <div>
        <Image
          src={"/images/projectGallerybgImage.png"}
          width={1500}
          height={150}
          alt={"Test"}
        />
      </div>
      <div className="grid grid-cols-3 mx-16">
        <div className="col-span-2">
          <div className="w-full p-4 ">
            <h1 className="text-3xl font-bold mb-4">The Front</h1>
            <p>
              Partner with a Tilly designer to create a custom landscape design
              package for your front yard...
            </p>
            <button className="text-blue-500">Read More</button>
          </div>
          <div className="text-gray-700 mb-4">
            {/* You can add more content and images below */}
          </div>
        </div>
        {/* Pricing and options section */}
        <div className="w-full  bg-white shadow-lg rounded-lg col-span-1">
          <Card bordered={false} className="w-full">
            <h2 className="text-2xl font-bold mb-4">$649.00</h2>
            <p className="text-gray-700 mb-4">
              Maximize curb appeal with a custom front yard design.
            </p>
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
            <div className="mb-4">
              <p className="text-gray-700">3D images $329</p>
              <Switch />
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Side yard plan $179</p>
              <Switch />
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Lighting $99</p>
              <Switch />
            </div>
            <Button
              type="primary"
              className="w-full bg-[#8ABF55] border-[#8ABF55] hover:bg-[#8ABF55] hover:border-[#8ABF55] text-white">
              Make It Yours
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
