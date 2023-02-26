import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo"></img>
      <span>
        Made with <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
