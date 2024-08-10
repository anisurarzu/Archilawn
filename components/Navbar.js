"use client";

import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
  const [isHovered, setIsHovered] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#packages" className="text-white hover:text-[#8FE53E]">
            Packages
          </a>
          <a href="#how-it-works" className="text-white hover:text-[#8FE53E]">
            How it works
          </a>
          <a href="#portfolio" className="text-white hover:text-[#8FE53E]">
            Portfolio
          </a>
          <a href="#designers" className="text-white hover:text-[#8FE53E]">
            Our Designers
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#login" className="text-white hover:text-[#8FE53E]">
            Login
          </a>

          <Button
            type="text"
            icon={
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white hover:text-white hover:animate-pulse"
              />
            }
            className="border rounded-full border-white text-white hover:text-white hover:border-[#8FE53E] flex items-center space-x-2"
          >
            <span className="text-white py-4">Call Us</span>
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
            onMouseLeave={() => setIsHovered(false)}
          ></Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={visible}
          className="text-gray-800"
        >
          <a href="#packages" className="block mb-4">
            Packages
          </a>
          <a href="#how-it-works" className="block mb-4">
            How it works
          </a>
          <a href="#portfolio" className="block mb-4">
            Portfolio
          </a>
          <a href="#designers" className="block mb-4">
            Our Designers
          </a>
          <a href="#login" className="block mb-4">
            Login
          </a>
          <Button
            type="text"
            icon={<PhoneOutlined />}
            className="border border-white text-white hover:text-[#8FE53E] hover:border-[#8FE53E] flex items-center space-x-2 w-full"
          >
            <span>Call Us</span>
          </Button>
        </Drawer>
      </div>
    </div>
  );
}
