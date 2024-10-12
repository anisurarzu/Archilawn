"use client";
import Navbar from "@/components/pages/Navbar";
import { Button, Card, Select, Switch } from "antd";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import Image from "next/image";
import axios from "axios";
import Footer from "@/components/pages/Footer";

export default function OrderDetails() {
  const [loading, setLoading] = useState(false);
  const basePrice = 649;
  const [userInfo, setUserInfo] = useState(null); // To hold user info from local storage

  // Get user info from local storage
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // Formik configuration
  const formikConfig = {
    initialValues: {
      designType: "lucy",
      images: false,
      sideYard: false,
      lighting: false,
    },
    onSubmit: async (values) => {
      if (!userInfo) {
        console.error("User info not found. Please log in.");
        return;
      }

      setLoading(true);

      // Calculate the total price
      const totalPrice =
        basePrice +
        (values.images ? 329 : 0) +
        (values.sideYard ? 179 : 0) +
        (values.lighting ? 99 : 0);

      // Prepare the order data
      const orderData = {
        ...values,
        totalPrice,
        orderBy: userInfo.email, // Assuming `userInfo` contains an email field
        status: "pending",
      };

      try {
        // Call the API to create the order
        const response = await axios.post("/api/orders", orderData);
        await axios.post(
          "https://archilawn-server.onrender.com/api/orders",
          orderData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        message.success("Order placed successfully!");
        
        


        // Optionally, you can redirect the user or show a success message here
      } catch (error) {
        console.error("Error placing order:", error);
      } finally {
        setLoading(false);
      }
    },
  };

  return (
    <div>
      <Navbar />
      {/* Header Image */}
      <div className="relative w-full h-40 sm:h-60 md:h-72 lg:h-96">
        <Image
          src="/images/projectGallerybgImage.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 mt-8">
        {/* Product Details Section */}
        <div className="lg:col-span-2 w-full p-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">The Front</h1>
          <p className="text-gray-700 mb-4">
            Partner with a Tilly designer to create a custom landscape design
            package for your front yard. We will collect details about your
            project, photos of your space and a property survey (if available)
            and then reach out to schedule a video conference...
          </p>
          <button className="text-blue-500">Read More</button>
        </div>

        {/* Pricing and Options Section */}
        <div className="w-full bg-white shadow-lg rounded-lg p-6">
          <Card bordered={false} className="w-full">
            <h2 className="text-2xl font-bold mb-4">${basePrice}.00</h2>
            <p className="text-gray-700 mb-4">
              Maximize curb appeal with a custom front yard design.
            </p>

            <Formik {...formikConfig}>
              {({ values, setFieldValue, handleSubmit }) => {
                const totalPrice =
                  basePrice +
                  (values.images ? 329 : 0) +
                  (values.sideYard ? 179 : 0) +
                  (values.lighting ? 99 : 0);
                return (
                  <form onSubmit={handleSubmit}>
                    {/* Design Type Select */}
                    <div className="mb-4">
                      <Select
                        value={values.designType}
                        onChange={(value) => setFieldValue("designType", value)}
                        style={{ width: "100%" }}
                        options={[
                          { value: "jack", label: "Jack" },
                          { value: "lucy", label: "Lucy" },
                          { value: "Yiminghe", label: "Yiminghe" },
                        ]}
                      />
                    </div>

                    {/* Options Switches */}
                    <div className="mb-4">
                      <p className="text-gray-700">3D images $329</p>
                      <Switch
                        checked={values.images}
                        onChange={(checked) => setFieldValue("images", checked)}
                      />
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700">Side yard plan $179</p>
                      <Switch
                        checked={values.sideYard}
                        onChange={(checked) =>
                          setFieldValue("sideYard", checked)
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700">Lighting $99</p>
                      <Switch
                        checked={values.lighting}
                        onChange={(checked) =>
                          setFieldValue("lighting", checked)
                        }
                      />
                    </div>

                    {/* Total Price */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">
                        Total: ${totalPrice}.00
                      </h3>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      className="w-full bg-[#8ABF55] border-[#8ABF55] hover:bg-[#8ABF55] hover:border-[#8ABF55] text-white rounded-lg">
                      Make It Yours
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
