import PackageCard from "@/components/cards/packageCard/PackageCard";
import React from "react";

const FeelingInspired = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg overflow-hidden shadow-lg my-20">
        <div className="lg:w-1/2 p-6 text-white">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            facilisis turpis. Sed eget eleifend dui, et tristique velit.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <img
            className="w-full h-auto rounded-lg"
            src="your-image-url-here" // Replace with your image URL or import it as needed
            alt="Building"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-green-500 text-white rounded-lg shadow-lg transform translate-y-1/2">
            <h2 className="text-lg font-semibold">Feeling Inspired?</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ipsum lorem.
            </p>
            <button className="mt-2 bg-white text-green-500 font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FeelingInspired;
