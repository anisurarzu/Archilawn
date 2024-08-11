import React from "react";

const PackageText = ({ headerText, descriptionText, packingColor }) => {
  return (
    <>
      <p
        className="text-xl font-bold"
        style={{
          fontFamily: "Tinos",
          color: packingColor,
        }}
      >
        {headerText}
      </p>

      <p
        className="text-white"
        style={{
          fontFamily: "Poppins",
        }}
        dangerouslySetInnerHTML={{ __html: descriptionText }}
      />
    </>
  );
};

export default PackageText;
