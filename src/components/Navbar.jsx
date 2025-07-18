import React from "react";
import { NAVBAR_ELEMENTS } from "../data/navItems";
import "./Navbar.css";
import Button from "../reusable-components/Button/Button";

const Navbar = () => {
  console.log("NAVBAR_ELEMENTS", NAVBAR_ELEMENTS);
  return (
    <nav className="navbar-content">
      <ul>
        {NAVBAR_ELEMENTS.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.path}>{navItem.label}</a>
          </li>
        ))}
        {/* <li> */}
          <Button label="Book Now" />
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
