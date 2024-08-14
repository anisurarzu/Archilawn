import React from "react";

const ContainerHeader = ({ containerHeader }) => {
  return (
    <>
      <p
        className="lg:text-[42px] md:text-[42px] text-[22px] text-black"
        style={{
          fontFamily: "Tinos",
          lineHeight: "41px",
          textAlign: "center",
        }}
      >
        {containerHeader} K
      </p>
    </>
  );
};

export default ContainerHeader;
