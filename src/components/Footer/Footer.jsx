import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <h2> P Nagajyothi</h2>

      <p>© 2026 All Rights Reserved.</p>

      <div className="footer-icons">

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="#home">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
};

export default Footer;