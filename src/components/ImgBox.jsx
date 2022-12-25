import React from "react";
import "../componentsStyles/ImgBox.Style.css";
import Image from "/assets/Header/Women.png";
import HeaderImg1 from "/assets/Header/HeaderImg1.png";
import HeaderImg2 from "/assets/Header/HeaderImg2.png";
import HeaderImg3 from "/assets/Header/HeaderImg3.png";

const ImgBox = () => {
  return (
    <div className="ImgDiv">
      <div className="rectangle-1"></div>
      <div className="rectangle-2">
        <img className="Women-Image" src={Image}></img>
      </div>
      <div className="Header-Img-1-Div">
        <img className="Header-Img-1" src={HeaderImg1}></img>
      </div>
      <div className="Header-Img-2-Div">
        <img className="Header-Img-2" src={HeaderImg2}></img>
      </div>
      <div className="Header-Img-3-Div">
        <img className="Header-Img-3" src={HeaderImg3}></img>
      </div>
    </div>
  );
};

export default ImgBox;
