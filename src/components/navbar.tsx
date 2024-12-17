import React from "react";
import Link from "next/link" // Import the custom CSS file

const Navbar = () => {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">Shuaib</Link>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Work</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
