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
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          className="text-white text-xl hover:text-gray-300"
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
          className="text-white text-2xl hover:text-gray-300"
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
          className="text-white text-2xl hover:text-gray-300"
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
          className="text-white text-2xl hover:text-gray-300"
        />
      </a>
    </div>
  );
};

export default Icons;
