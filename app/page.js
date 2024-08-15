"use client";
import Home from "@/components/Home";
import React from "react";

import "primereact/resources/themes/saga-blue/theme.css"; // Choose the theme you want
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navbar from "@/components/pages/Navbar";

const page = () => {
  const scrollToOurService = () => {
    if (ourServiceRef.current) {
      ourServiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
<<<<<<< HEAD
    <div className="">
      <Home />
=======
    <div className=''>
      <Home/>
      
>>>>>>> 805e87398bfac2fa9eb2425a15b23d5657900c59
    </div>
  );
};

export default page;
