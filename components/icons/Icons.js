import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Icons = () => {
  return (
    <div className="flex lg:space-x-6 md:space-x-4 space-x-2 pl-4 md:pl-0 lg:pl-0">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          className="text-white hover:text-gray-300 lg:text-xl md:text-lg text-base"
        />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="text-white hover:text-gray-300 lg:text-xl md:text-lg text-base"
        />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-white hover:text-gray-300 lg:text-xl md:text-lg text-base"
        />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white hover:text-gray-300 lg:text-xl md:text-lg text-base"
        />
      </a>
    </div>
  );
};

export default Icons;
