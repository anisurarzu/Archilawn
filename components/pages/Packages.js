import Image from "next/image";
import React from "react";

export default function Packages() {
  return (
    <div>
      <Image
        src="/images/group.png"
        alt="Group Image"
        layout="responsive"
        width={500} // Replace with the actual width of the image
        height={500} // Replace with the actual height of the image
        className="h-full w-full"
      />
    </div>
  );
}
