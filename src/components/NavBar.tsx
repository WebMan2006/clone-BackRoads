import React from "react";
import Logo from "../images/logo.svg";
import PageLinks from "./pageLinks";
import SocialLinks from "./socialLinks";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parrentClass="nav-links" itemClass="nav-link"/>
        <SocialLinks parrentClass="nav-icons" itemClass="nav-icon"/>
      </div>
    </nav>
  );
};

export default NavBar;
