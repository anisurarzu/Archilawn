"use client";
import React, { useState } from "react";

import questionImage1 from "../../../public/images/questionsImage/question_Image1.png";
import questionImage2 from "../../../public/images/questionsImage/question_Image2.png";
import questionImage3 from "../../../public/images/questionsImage/question_Image3.png";
import questionImage4 from "../../../public/images/questionsImage/question_Image4.png";
import Image from "next/image";
import {
  LinkedinOutlined,
  UpCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What is a property survey and do I need one?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam. Curabitur nec lacus non leo commodo tincidunt. Pellentesque id magna et lacus euismod porta. Donec mattis in nisl sed faucibus.",
  },
  {
    question: "What should I expect from my video call with my designer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam. Curabitur nec lacus non leo commodo tincidunt. Pellentesque id magna et lacus euismod porta. Donec mattis in nisl sed faucibus.",
  },
  {
    question: "Can I revise my plan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam. Curabitur nec lacus non leo commodo tincidunt. Pellentesque id magna et lacus euismod porta. Donec mattis in nisl sed faucibus.",
  },
  {
    question: "Tell me about your plant delivery service?",
    answer:
      "Aenean bibendum nulla vel ligula sodales facilisis. Sed facilisis ligula nec ultricies venenatis.",
  },
  {
    question: "How long does it take to get my design?",
    answer:
      "Nulla vehicula ex nec urna fringilla, sit amet facilisis justo efficitur.",
  },
  {
    question: "What time can I arrive?",
    answer:
      "Mauris nec nisi nec elit hendrerit ultricies. Praesent nec orci non leo posuere volutpat.",
  },
];

const StillHaveQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto bg-white pt-12">
      {/* Start Top Text */}
      {/* Large Device Header Text */}
      <div className="hidden md:hidden lg:grid grid-cols-2 mb-3">
        <div></div>
        <div className="mx-4 ml-0">
          <h2
            className="text-4xl uppercase"
            style={{
              fontFamily: "Proxima Nova",
            }}>
            Still Have Questions?
          </h2>
        </div>
      </div>
      {/* End Large Device Header Text */}

      {/* Medium and Small Device */}
      <div className="lg:hidden md:flex flex justify-center items-center">
        <h2
          className="lg:text-4xl md:text-3xl text-[22px] text-center text-[#123747] tracking-wide"
          style={{
            fontFamily: "Proxima Nova",
          }}>
          Still Have Questions?
        </h2>
      </div>
      {/* End Medium and Small Device */}
      {/* End Top Text */}

      {/* Start Design */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:mx-0 md:mx-4 mx-2">
        {/* left side design */}
        <div className="col-span-1 grid grid-cols-2 lg:gap-3 md:gap-3 gap-2">
          {/* 1st div 2 image */}
          <div className="">
            <div className="flex flex-col lg:gap-3 md:gap-3 gap-2">
              <div className="flex justify-end items-end h-[25vh]">
                <Image
                  className="h-[14vh]"
                  src={questionImage1}
                  alt="Feeling Inspired"
                  w={40}
                  h={40}
                />
              </div>
              <div className="w-full lg:h-[27vh] md:h-[24vh] h-[22vh]">
                <Image
                  className="w-full h-full"
                  src={questionImage4}
                  alt="Feeling Inspired"
                  w={40}
                  h={40}
                />
              </div>
            </div>
          </div>
          {/* end 1st div 2 image */}
          {/* start 2nd div 2 image */}
          <div className="cols-span-1">
            <div className="">
              <div className="flex flex-col lg:gap-3 md:gap-3 gap-2">
                <div className="flex justify-start items-end h-[17vh]">
                  <Image
                    className="lg:h-[12vh] md:h-[10vh] h-[11vh] lg:w-[12vh] md:w-[10vh] w-[11vh]"
                    src={questionImage3}
                    alt="Feeling Inspired"
                    w={40}
                    h={40}
                  />
                </div>

                <div className="lg:h-[35vh] md:h-[32vh] h-[30vh] lg:w-[27vh] md:w-[29vh] w-[21vh]">
                  <Image
                    className="h-full w-full"
                    src={questionImage2}
                    alt="Feeling Inspired"
                    w={40}
                    h={40}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end 2nd div 2 image */}

          <div className="col-span-2 flex justify-start items-center lg:my-6 md:my-6 my-2">
            <div className="flex justify-start items-center lg:gap-6 md:gap-6 gap-3">
              <div className="flex justify-center items-center bg-white lg:p-5 md:p-3 p-3 rounded-full custom-drop-shadow">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#8ABF55] lg:w-7 md:w-6 w-5 lg:h-7 md:h-6 h-5"
                />
              </div>

              <div className="lg:text-base md:text-base text-xs">
                <p className="uppercase text-[#8ABF55]">for any inquire</p>
                <p className="font-semibold uppercase text-[#0C1017]">
                  +01 5527 6045 or +01-7-5527 6045
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end left side design */}

        <div className="col-span-1 lg:mx-4 md:mx-2 mx-1 lg:ml-0">
          <div className="rounded-lg">
            {faqData.map((faq, index) => (
              <div key={index} className="my-5">
                <div
                  className={` ${
                    openIndex === index ? "bg-white drop-shadow-md" : ""
                  }`}>
                  <div
                    className={`cursor-pointer py-4 flex justify-between items-center rounded-lg transition-all duration-100 lg:px-8 md:px-8 px-2 ${
                      openIndex === index
                        ? "text-gray-900 bg-white border-b-2 border-[#D2D2D2]"
                        : "bg-[#F3F3F9]"
                    }`}
                    onClick={() => toggleFAQ(index)}>
                    <span className="lg:text-lg md:text-lg text-sm font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <span
                      className={`lg:text-xl md:text-xl text-base pi text-gray-800 ${
                        openIndex === index
                          ? "pi-chevron-up bg-white"
                          : "pi-chevron-down"
                      }`}></span>
                  </div>

                  {openIndex === index && (
                    <div
                      className={`lg:py-4 md:py-4 py-2 lg:pb-6 md:pb-6 pb-3 text-gray-600 text-sm lg:px-8 md:px-8 px-3 tracking-normal sm:tracking-wider text-justify sm:text-left ${
                        openIndex === index ? "bg-white text-[#383737]" : ""
                      }`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End Design */}
      <div className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
        {/* Large screen layout: Two columns */}
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center">
          {/* Owner Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co/4tHxCBJ/CEO-business-executive-professional-headshot.jpg" // Replace with actual path of the owner's image
                alt="Owner - Set A Dami"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Owner Description */}
          <div className="lg:text-left text-center lg:px-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Set A Dami
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Set A Dami, the visionary behind our success, brings over two
              decades of expertise in landscape design. Her passion for creating
              stunning, sustainable outdoor spaces has transformed countless
              properties into beautiful, nature-infused environments.
            </p>
            <p className="text-md text-gray-500 mb-6">
              With a deep-rooted commitment to excellence and innovation, she
              personally oversees every project, ensuring that your dream design
              becomes a reality.
            </p>
            {/* Social Media Buttons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="/about-ceo"
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 flex items-center space-x-2">
                <InfoCircleOutlined className="text-white" />
                <span>More About Our CEO</span>
              </a>
              <a
                href="https://www.linkedin.com/" // Replace with actual LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 flex items-center">
                <LinkedinOutlined className="text-white text-lg" />
              </a>
              <a
                href="https://www.upwork.com/" // Replace with actual Upwork link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white p-3 rounded-full shadow hover:bg-teal-600 flex items-center">
                <UpCircleOutlined className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StillHaveQuestions;
