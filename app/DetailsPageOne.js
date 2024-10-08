import React from "react";
import Slider from "../pages/Slider";
import OurService from "../pages/OurService";
import PackageCard from "../cards/packageCard/PackageCard";
import GalleryCard from "../cards/galleryCard/GalleryCard";
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";

const DetailsPageOne = () => {
  const ourServiceRef = useRef(null);
  const scrollToOurService = () => {
    if (ourServiceRef.current) {
      ourServiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <Navbar scrollToOurService={scrollToOurService} />
      <Slider />

      <div className="py-8">
        <GalleryCard />
      </div>
      <div className="py-20">
        <PackageCard
          headerText="Building Exterior 3d rendering Package"
          bgColor="#A3C1D3"
          packageCardheaderbg1="#5E7987"
          packageCardheaderbg2="#2E5469"
          packageCardheaderbg3="#0A3446"
        />
      </div>

      <OurService ref={ourServiceRef} id="our-service" />

      <Footer />
    </div>
  );
};

export default DetailsPageOne;
