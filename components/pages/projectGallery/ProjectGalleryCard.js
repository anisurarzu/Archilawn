import Image from "next/image";
import React from "react";

const ProjectGalleryCard = ({
  projectGalleryImage1,
  projectGalleryImage2,
  projectGalleryImage3,
  projectGalleryImage4,
  projectGalleryImage5,
}) => {
  return (
    <div className="flex flex-col lg:gap-7 md:gap-6 gap-3">
      <div className="flex justify-between items-center gap-4 px-1 md:px-0 lg:px-0">
        {/* Start 1st Image */}
        <div className="lg:w-[90vh] md:w-[34vh] w-[38vh] lg:h-[50vh] md:h-[20vh] h-[20vh]">
          <Image
            src={projectGalleryImage1}
            alt="projectGalleryImage1"
            className="w-full h-full lg:rounded-tl-[30px] md:rounded-tl-[30px] rounded-tl-[20px] lg:rounded-bl-[30px] md:rounded-bl-[30px] rounded-bl-[20px] z-10 transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
          />
        </div>
        {/* End 1st Image */}

        {/* Start 2nd Image */}
        <div className="lg:w-[75vh] md:w-[26vh] w-[32vh] lg:h-[50vh] md:h-[20vh] h-[20vh]">
          <Image
            src={projectGalleryImage2}
            alt="projectGalleryImage2"
            className="w-full h-full lg:rounded-br-[30px] md:rounded-br-[30px] rounded-br-[20px] lg:rounded-tr-[30px] md:rounded-tr-[30px] rounded-tr-[20px] z-10 transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
          />
        </div>
        {/* End 2nd Image */}
      </div>

      {/* Start 3rd Image */}
      <div className="flex justify-center items-center lg:mx-0 md:mx-0 mx-1">
        <div className="w-full lg:h-[75vh] md:h-[25vh] h-[24vh]">
          <Image
            src={projectGalleryImage3}
            alt="projectGalleryImage3"
            className="w-full h-full lg:rounded-[30px] md:rounded-[30px] rounded-[20px] z-10 transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      {/* End 3rd Image */}

      <div className="flex justify-between items-center gap-4 px-1 md:px-0 lg:px-0">
        {/* Start 4th Image */}
        <div className="lg:w-[75vh] md:w-[26vh] w-[33vh] lg:h-[50vh] md:h-[20vh] h-[20vh]">
          <Image
            src={projectGalleryImage4}
            alt="projectGalleryImage4"
            className="w-full h-full lg:rounded-tl-[30px] md:rounded-tl-[30px] rounded-tl-[20px] lg:rounded-bl-[30px] md:rounded-bl-[30px] rounded-bl-[20px] z-10 transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
          />
        </div>
        {/* End 4th Image */}

        {/* Start 5th Image */}
        <div className="lg:w-[90vh] md:w-[34vh] w-[37vh] lg:h-[50vh] md:h-[20vh] h-[20vh]">
          <Image
            src={projectGalleryImage5}
            alt="projectGalleryImage5"
            className="w-full h-full lg:rounded-br-[30px] md:rounded-br-[30px] rounded-br-[20px] lg:rounded-tr-[30px] md:rounded-tr-[30px] rounded-tr-[20px] z-10 transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
          />
        </div>
        {/* End 5th Image */}
      </div>

      {/* End */}
    </div>
  );
};

export default ProjectGalleryCard;
