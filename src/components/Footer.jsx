import React from "react";
import "../componentsStyles/Footer.Style.css";
import FooterBottom from "./FooterBottom";
import { FooterData } from "../data/FooterData.js";

const Footer = () => {
  console.log(FooterData);
  return (
    <div>
      <div className="Footer-Top-Div">
        <p className="Footer-Para-1">Get a free trial lesson today</p>
        <p className="Footer-Para-2">
          Start fulfilling your language dreams with our school
        </p>
        <div className="Footer-Email-Div">
          <input
            className="Footer-Email"
            value="Enter your email"
            type="mail"
            placeholder="email"
          />
          <div className="Footer-Submit-Btn">
            <p className="Submit-Btn">Submit</p>
          </div>
        </div>
      </div>
      <div className="Footer-Bootom-Div">
        <div>
          <div className="Logo">
            <div className="Logo-First-Half"></div>
            <div className="Logo-Second-Half"></div>
            <p className="Logo-Name">Lingua</p>
          </div>
          <p className="Address">
            20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021
          </p>
        </div>
        {FooterData.map((ele) => (
          <FooterBottom props={ele} />
        ))}
        <div className="Social-Media-Div">
          <div className="Social-Div">
            <img src="/assets/SocialMedia/facebook.png"></img>
          </div>
          <div className="Social-Div">
            <img src="/assets/SocialMedia/twitter.png"></img>
          </div>
          <div className="Social-Div">
            <img src="/assets/SocialMedia/instagram.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
