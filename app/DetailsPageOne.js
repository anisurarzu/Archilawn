
/* import React from "react";

import Slider from "../pages/Slider";
import OurService from "../pages/OurService";
import PackageCard from "../cards/packageCard/PackageCard";
import GalleryCard from "../cards/galleryCard/GalleryCard";
import Footer from "@/components/pages/Footer";
=======
import GalleryCard from "@/components/cards/galleryCard/GalleryCard";
import PackageCard from "@/components/cards/packageCard/PackageCard";
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";
import OurService from "@/components/pages/OurService";
import Slider from "@/components/pages/Slider";
import React from "react";
>>>>>>> 805e87398bfac2fa9eb2425a15b23d5657900c59

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
 */