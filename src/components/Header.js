import { useEffect, useState } from "react";
import "../css/Header.css";
import Logo from "../img/logo.png";

const Header = () => {
  const menuOpen = () => {
    var nav = document.getElementById("navigation");
    nav.classList.add("active");
  };

  const menuClose = () => {
    var nav = document.getElementById("navigation");
    nav.classList.remove("active");
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="SanghSangai logo" />
      </div>
      <nav id="navigation">
        <ul>
          <li className="active">
            <a href="">Background</a>
          </li>
          <li>
            <a href="">Community Partner</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <i
            id="menu-close"
            className="fa-solid fa-xmark"
            onClick={menuClose}
          ></i>
        </ul>
      </nav>
      <div className="menu-icon">
        <i id="menu-toggle" className="fa-solid fa-bars" onClick={menuOpen}></i>
      </div>
    </header>
  );
};

export default Header;
