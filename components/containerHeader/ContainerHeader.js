import React from "react";

const ContainerHeader = ({ containerHeader }) => {
  return (
    <>
      <p
        className="lg:text-[42px] md:text-[42px] text-[22px]"
        style={{
          fontFamily: "Tinos",
          lineHeight: "41px",
          textAlign: "center",
        }}
      >
        {containerHeader}
      </p>
    </>
  );
};

export default ContainerHeader;
