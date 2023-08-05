import React from "react";
import PageLinks from "./pageLinks";
import SocialLinks from "./socialLinks";


const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parrentClass="footer-links" itemClass="footer-link"/>
      <SocialLinks parrentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
