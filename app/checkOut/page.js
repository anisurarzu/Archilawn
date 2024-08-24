"use client";

import { useEffect, useState } from "react";
import { Button, Input } from "antd";

export default function CheckoutPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component is mounted
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Check if JWT token exists in local storage
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted && isAuthenticated) {
      // Redirect to another page if authenticated using window.location
      window.location.href = "/another-page"; // Replace with the desired page
    }
  }, [mounted, isAuthenticated]);

  if (!mounted || isAuthenticated) {
    return null; // Or render a loader or something while redirecting
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        <Input placeholder="First name" className="mb-4" />
        <Input placeholder="Last name" className="mb-4" />
        <Input placeholder="Email" className="mb-4" />
        <Input.Password placeholder="Create password" className="mb-4" />
        <p className="text-gray-500 text-sm mb-4">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our Privacy Policy. By clicking , you agree to our
          Terms & Conditions.
        </p>
        <div className="flex items-center justify-between mb-4">
          <Button
            type="primary"
            className="bg-pink-500 text-white hover:bg-pink-600 rounded-lg"
            block>
            Confirm & Next
          </Button>
          <span className="text-xl font-semibold ml-4">
            Total Due: $1,098.00
          </span>
        </div>
      </div>
    </div>
  );
}
