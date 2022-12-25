import React from "react";
import StudentImg from "/assets/Student/StudentImg1.png";
import FlagImg from "/assets/Student/Student.Flag.Img1.png";
import "../componentsStyles/StudentCard.Style.css";

const StudentsCard = () => {
  return (
    <div className="Student-Main-div">
      <div className="Student-Image-div">
        <img src={StudentImg}></img>
      </div>
      <div className="Student-Info-Div">
        <p className="Student-Name">Martin Watson</p>
        <div className="Student-Flag-Subject-Div">
          <img src={FlagImg}></img>
          <p className="Student-Subject-Name">B2 course student</p>
        </div>
        <p className="Student-Para">
          There is no way I could have made the same progress learning Spanish
          without using Lingua. The best part is now learning Spanish has become
          one of my biggest hobbies.
        </p>
      </div>
    </div>
  );
};

export default StudentsCard;
