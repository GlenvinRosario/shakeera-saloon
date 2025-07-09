import React from "react";
import { NAVBAR_ELEMENTS } from "../data/navItems";
import './Navbar.css'; 

const Navbar = () => {
    console.log("NAVBAR_ELEMENTS", NAVBAR_ELEMENTS)
  return (
    <nav className="navbar-content">
      <ul>
        {NAVBAR_ELEMENTS.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.path}>{navItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
