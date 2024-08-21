"use client";

import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

const buttonStyle = {
  border: "1px solid white",
  borderRadius: "9999px",
  backgroundColor: "white",
  color: "black",
  display: "flex",
  alignItems: "center",
  spaceX: "2",
  transition: "background-color 0.2s, border-color 0.2s",
};

const iconStyle = {
  color: "black",
  transition: "color 0.2s",
};

const hoverStyle = {
  backgroundColor: "black",
  borderColor: "#8FE53E",
};

const hoverIconStyle = {
  color: "white",
};

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "sticky bg-white border-b border-gray-200"
          : "absolute bg-transparent"
      }`}
      style={{
        transition: "background-color 0.3s ease-in-out",
      }}>
      <div className="container mx-auto flex justify-between items-center lg:py-4 md:py-4 py-2 lg:pb-4 md:pb-4 pb-1">
        {/* Logo */}

        <div className="lg:flex md:flex hidden">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={` ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            } `}>
            <div
              className={`flex items-center rounded-md cursor-pointer ${
                isScrolled ? "border border-gray-200" : "border-none"
              }`}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex lg:space-x-8 md:space-x-4 space-x-8 lg:text-base md:text-sm text-sm cursor-pointer">
          <Link
            to="service"
            smooth={true}
            duration={500}
            className={` ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            }`}>
            Packages
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className={` ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            } cursor-pointer`}>
            Portfolio
          </Link>
          <Link
            href="/profile"
            smooth={true}
            duration={500}
            className={` ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            } cursor-pointer`}>
            Profile
          </Link>
          <Link
            to="how-it-works"
            smooth={true}
            duration={500}
            className={` ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            } cursor-pointer`}>
            How it works
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className={` ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            } cursor-pointer`}>
            About Us
          </Link>
        </div>

        <div className="hidden md:flex lg:space-x-4 md:space-x-4 space-x-8 lg:text-base md:text-sm text-sm cursor-pointer">
          <Link
            href="/loginPage"
            smooth={true}
            duration={500}
            className={`py-4 ${
              isScrolled
                ? "text-black hover:text-[#8FE53E]"
                : "text-white hover:text-[#8FE53E]"
            }`}>
            Login
          </Link>

          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <Button
              type="text"
              icon={
                <FontAwesomeIcon
                  icon={faPhone}
                  className={` hover:animate-pulse ${
                    isScrolled
                      ? "text-black hover:text-black"
                      : "text-white hover:text-white"
                  }`}
                />
              }
              className={`border rounded-full flex items-center justify-center space-x-2 ${
                isScrolled
                  ? " border-black text-black hover:text-black hover:border-[#8FE53E]"
                  : " border-white text-white hover:text-white hover:border-[#8FE53E]"
              }`}>
              <span
                className={` py-4 ${isScrolled ? "text-black" : "text-white"}`}>
                Call Us
              </span>
            </Button>

            <Button
              type="text"
              icon={
                <MailOutlined style={isHovered ? hoverIconStyle : iconStyle} />
              }
              style={{
                ...buttonStyle,
                ...(isHovered ? hoverStyle : {}),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}></Button>
          </div>
        </div>

        {/* Mobile Design Start */}
        <div className="flex md:hidden lg:hidden justify-between items-center pl-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className={` rounded-md ${
              isScrolled ? "border border-gray-400" : "border-none"
            }`}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className={` ${isScrolled ? "text-black" : "text-white"}`}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={visible}
          className="text-gray-800 text-base">
          <Link
            to="our-service"
            smooth={true}
            duration={500}
            className="block mb-4">
            Packages
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="block mb-4">
            Portfolio
          </Link>
          <Link
            href="/profile"
            smooth={true}
            duration={500}
            className="block mb-4">
            Profile
          </Link>
          <Link
            to="how-it-works"
            smooth={true}
            duration={500}
            className="block mb-4">
            How it works
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="block mb-4">
            About Us
          </Link>
          <Link
            href="/loginPage"
            smooth={true}
            duration={500}
            className="block mb-4">
            Login
          </Link>
          <Button
            type="text"
            icon={<PhoneOutlined />}
            className="w-full border border-gray-400 hover:border-gray-600 text-black hover:text-[#8FE53E] flex justify-center items-center gap-1 text-lg font-semibold mt-4">
            <span>Call Us</span>
          </Button>
        </Drawer>

        {/* Mobile Design Start */}
      </div>
    </div>
  );
}
