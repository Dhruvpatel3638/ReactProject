import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="ftr">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="ftr1">
        <b>Made With React.js</b>
      </div>
    </footer>
  );
};

export default Footer;
