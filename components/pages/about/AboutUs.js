"use client";
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Architect",
      description:
        "John has over a decade of experience crafting innovative architectural solutions that blend style with functionality.",
      image: "https://i.ibb.co/k4k9v3d/team-member1.jpg", // Replace with actual image path
    },
    {
      name: "Jane Smith",
      role: "Interior Designer",
      description:
        "Jane specializes in creating sophisticated interiors that resonate with modern and traditional aesthetics.",
      image: "https://i.ibb.co/jTkLR80/team-member2.jpg", // Replace with actual image path
    },
    {
      name: "Michael Johnson",
      role: "Project Manager",
      description:
        "Michael ensures every project is delivered on time and exceeds expectations with his exceptional organizational skills.",
      image: "https://i.ibb.co/6vZw7kK/team-member3.jpg", // Replace with actual image path
    },
    {
      name: "Emily Davis",
      role: "Sustainability Expert",
      description:
        "Emily integrates eco-friendly practices into designs, ensuring environmental responsibility.",
      image: "https://i.ibb.co/XJxFsYN/team-member4.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow mt-12">
        {/* About Us Section */}
        <section className="container mx-auto py-12 px-6 text-center">
          <h2 className="text-3xl font-bold text-[#8ABF55] uppercase">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At Next Concept Design, we merge cutting-edge architecture with
            stunning interior design to deliver transformative spaces. Our team
            of experts ensures every project reflects excellence,
            sustainability, and innovation.
          </p>
        </section>

        {/* CEO Section */}
        <section className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center">
            {/* CEO Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-md">
                <img
                  src="https://i.ibb.co/4tHxCBJ/CEO-business-executive-professional-headshot.jpg"
                  alt="CEO - Set A Dami"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            {/* CEO Description */}
            <div className="lg:text-left text-center lg:px-6">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Set A Dami
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Set A Dami, the visionary behind our success, brings over two
                decades of expertise in landscape design. Her passion for
                creating stunning, sustainable outdoor spaces has transformed
                countless properties into beautiful, nature-infused
                environments.
              </p>
              <p className="text-md text-gray-500 mb-6">
                With a deep-rooted commitment to excellence and innovation, she
                personally oversees every project, ensuring that your dream
                design becomes a reality.
              </p>
            </div>
          </div>
        </section>

        {/* CTO Section */}
        <section className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center">
            {/* CTO Description */}
            <div className="lg:text-left text-center lg:px-6 order-last lg:order-first">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Alex Wilson
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Alex, our CTO, is the technical mastermind who ensures every
                design integrates the latest technology seamlessly. With over 15
                years of experience in architecture and innovation, Alex has led
                multiple award-winning projects globally.
              </p>
              <p className="text-md text-gray-500 mb-6">
                Alex’s commitment to leveraging technology ensures that our
                clients enjoy state-of-the-art solutions in every project.
              </p>
            </div>
            {/* CTO Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-md">
                <img
                  src="https://i.ibb.co/vdmZjTg/CTO-technology-expert.jpg"
                  alt="CTO - Alex Wilson"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative w-[200px] h-[200px] mx-auto rounded-full overflow-hidden shadow-md mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-md text-[#8ABF55] font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Details Section */}
        <section className="container mx-auto my-12 p-6 bg-[#F3F3F9] rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Company Details
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Next Concept Design was founded with the goal of blending art,
            technology, and sustainability in every project. We are committed to
            creating spaces that inspire and uplift, while maintaining a strong
            focus on eco-consciousness. Our expertise spans across residential,
            commercial, and industrial projects, making us a trusted partner for
            all your design needs.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
