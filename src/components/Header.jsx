import React from "react";
import "../componentsStyles/Header.Style.css";
import ImgBox from "./ImgBox";

const Header = () => {
  return (
    <div className="mainDiv">
      <div className="Header-Navbar">
        <div className="Header-Logo">
          <div className="Header-Logo-First-Half"></div>
          <div className="Header-Logo-Second-Half"></div>
          <p className="Header-Logo-Name">Lingua</p>
        </div>
        <div className="Header-Navbar-Elements">
          <p className="Navbar-Element">Courses</p>
          <p className="Navbar-Element">About us</p>
          <p className="Navbar-Element">Teachers</p>
          <p className="Navbar-Element">Pricing</p>
          <p className="Navbar-Element">Careers</p>
          <p className="Navbar-Element">Blog</p>
        </div>
        <div className="Header-Btn-Div-1">
          <p className="Header-Btn-1">Get started</p>
        </div>
      </div>
      <div className="Header-Bottom-Div">
        <div className="Header-Para">
          <p className="Header-Main-Para">
            A <span className="Header-Unique">unique</span> approach to learning
            foreign languages online
          </p>
          <div className="Header-Second-Para">
            <p>
              Learn at your own pace, with lifetime access on mobile and desktop
            </p>
          </div>
          <div className="Header-Btn-Div">
            <p className="Header-Btn">Get started</p>
          </div>
        </div>
        <ImgBox />
      </div>
    </div>
  );
};

export default Header;
