"use client";
import React from "react";

// Project Gallery Images
import projectGalleryImage1 from "../../../public/images/projectGallery/projectGalleryImage1.png";
import projectGalleryImage2 from "../../../public/images/projectGallery/projectGalleryImage2.png";
import projectGalleryImage3 from "../../../public/images/projectGallery/projectGalleryImage3.png";
import projectGalleryImage4 from "../../../public/images/projectGallery/projectGalleryImage4.png";
import projectGalleryImage5 from "../../../public/images/projectGallery/projectGalleryImage5.png";

import ContainerHeader from "@/components/containerHeader/ContainerHeader";
import ProjectGalleryCard from "./ProjectGalleryCard";
import GalleryCard from "@/components/cards/galleryCard/GalleryCard";

export default function ProjectGallery() {
  return (
    <section className="bg-white">
      <GalleryCard />

      <div className="lg:pt-28 md:pt-16 pt-0 lg:pb-12 md:pb-10 pb-6">
        <ContainerHeader containerHeader="Project Gallery" />
      </div>

      {/* START PORTFOLIO */}
      <div className="container mx-auto">
        <ProjectGalleryCard
          projectGalleryImage1={projectGalleryImage1}
          projectGalleryImage2={projectGalleryImage2}
          projectGalleryImage3={projectGalleryImage3}
          projectGalleryImage4={projectGalleryImage4}
          projectGalleryImage5={projectGalleryImage5}
        />
      </div>
    </section>
  );
}
