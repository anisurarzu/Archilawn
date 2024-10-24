"use client"; // Add this at the top

import React, { useState, useEffect } from "react";
import { Steps, Menu } from "antd";
import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import Navbar from "@/components/pages/Navbar";
import { useRouter } from "next/router"; // Import useRouter for redirection

const description = "Order details and status.";

const orders = [
  {
    title: "Order Placed",
    description: "Your order has been placed successfully.",
  },
  {
    title: "In Progress",
    description: "We are processing your order.",
    subTitle: "Estimated time left: 00:00:08",
  },
  {
    title: "Shipped",
    description: "Your order has been shipped.",
  },
  {
    title: "Delivered",
    description: "Your order has been delivered.",
  },
];

export default function Profile() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter(); // Initialize the router for redirection

  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem("token");
    if (!token) {
      // If token is not found, redirect to login
      router.push("/login"); // Change '/login' to your login route
    } else {
      setIsAuthenticated(true); // Set authentication state to true if token exists
    }
  }, [router]); // Dependency on router

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // If not authenticated, return null to prevent rendering the content
  if (isAuthenticated) {
    return null; // Prevent rendering of any content
  } else {
    return (
      <div>
        <Navbar />
        <div className="bg-[#8ABF55] py-12"></div>
        <div className="min-h-screen flex bg-gray-100">
          <div
            className={`bg-white ${
              collapsed ? "w-16" : "w-64"
            } transition-all duration-300`}>
            <div className="bg-[#b8d75a] text-white flex items-center justify-between p-4">
              <h1
                className={`text-xl font-semibold ${
                  collapsed ? "hidden" : "block"
                }`}>
                Profile
              </h1>
              <button
                onClick={toggleCollapsed}
                className="text-white focus:outline-none">
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </button>
            </div>
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
              style={{ borderRight: 0 }}>
              <Menu.Item
                key="1"
                icon={<DashboardOutlined />}
                className="flex items-center">
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<ShoppingCartOutlined />}
                className="flex items-center">
                My Orders
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<ProfileOutlined />}
                className="flex items-center">
                Update Profile
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<SettingOutlined />}
                className="flex items-center">
                Settings
              </Menu.Item>
            </Menu>
          </div>
          <div className="flex-1 p-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-[#b8d75a] text-white text-center py-6">
                <h1 className="text-2xl font-semibold">User Profile</h1>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#8ABF55]">
                    {/* <img
                    src="https://via.placeholder.com/150"
                    alt="User"
                    className="w-full h-full object-cover"
                  /> */}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">John Doe</h2>
                    <p className="text-gray-500">johndoe@example.com</p>
                  </div>
                </div>
                {selectedKey === "2" && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">My Orders</h3>
                    <Steps
                      current={1} // Change this index to dynamically set the current step
                      items={orders.map((order, index) => ({
                        title: order.title,
                        description: order.description,
                        subTitle: order.subTitle,
                        status: index <= 1 ? "finish" : "wait", // This is dynamic; adjust as needed
                      }))}
                    />
                  </div>
                )}
                {selectedKey === "3" && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">
                      Update Profile
                    </h3>
                    <p>Profile update form goes here.</p>
                  </div>
                )}
                {selectedKey === "4" && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Settings</h3>
                    <p>Settings form goes here.</p>
                  </div>
                )}
                {selectedKey === "1" && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
                    <p>Dashboard content goes here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
