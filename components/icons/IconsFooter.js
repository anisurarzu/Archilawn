import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const IconsFooter = () => {
  return (
    <div className="flex lg:space-x-6 md:space-x-5 space-x-5 lg:pl-0 md:pl-0 pl-0">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          className="text-white hover:text-gray-300 lg:text-2xl md:text-xl text-xl"
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
          className="text-white hover:text-gray-300 lg:text-2xl md:text-xl text-xl"
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
          className="text-white hover:text-gray-300 lg:text-2xl md:text-xl text-xl"
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
          className="text-white hover:text-gray-300 lg:text-2xl md:text-xl text-xl"
        />
      </a>
    </div>
  );
};

export default IconsFooter;
