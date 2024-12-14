import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">Contact Us</h2>
          <div className="flex items-center space-x-4 mb-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="lg"
              className="text-white"
            />
            <span>
              84 Ivasyuka Street, Ivano-Frankivsk, Ivano-Frankivsk Oblast, 76000
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
            <span>(480) 555-0103</span>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="text-white"
            />
            <span>curtis.weaver@example.com</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">Follow us on social media!</h2>
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
            <a href="#" aria-label="Telegram" className="text-white">
              <FontAwesomeIcon icon={faTelegram} size="4x" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white">
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
