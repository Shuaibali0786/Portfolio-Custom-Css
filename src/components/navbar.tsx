import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="#" className="logo">Shuaib</a>
      <nav className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skill" className="navbar-link">
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#work" className="navbar-link">
              Work
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
