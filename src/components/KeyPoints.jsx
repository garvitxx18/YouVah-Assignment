import React from "react";
import "../componentsStyles/KeyPoints.Style.css";
import KeyPointCard from "./KeyPointCard";
import { KeyPointsData } from "../data/KeyPointsData.js";

const KeyPoints = () => {
  return (
    <div className="Key-Points-Root-Div">
      <p className="Key-Points-heading-1">WHY CHOOSE US</p>
      <p className="Key-Points-heading-2">Our values</p>
      <div className="Key-Points-Main-Div">
        {KeyPointsData.map((ele) => (
          <KeyPointCard props={ele} />
        ))}
      </div>
    </div>
  );
};

export default KeyPoints;
