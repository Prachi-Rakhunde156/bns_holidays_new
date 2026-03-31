import React from "react";
import "./FloatingButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917066620673?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      {/* Call */}
      <a
        href="tel:+9170666 20673"
        className="btn call"
      >
        <FontAwesomeIcon icon={faPhone} />
      </a>

      {/* Email */}
      <a
        href="mailto:bnsholidays@bnsholidays.co.in"
        className="btn email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

    </div>
  );
};

export default FloatingButtons;