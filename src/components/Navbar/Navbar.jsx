import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Portfolio<span>.</span>
      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>
        <li>
          <a href="#education" onClick={toggleMenu}>Education</a>
        </li>
        <li>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;