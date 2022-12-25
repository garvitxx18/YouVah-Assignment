import React from "react";
import TeachersCard from "./TeachersCard";
import { TeacherData } from "../data/TeacherData.js";
import "../componentsStyles/Teachers.Style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Teachers = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="Teachers-Root-Div">
      <p className="teachers-heading-1">KEY PERSONS</p>
      <p className="teachers-heading-2">Meet our teachers</p>
      <div className="Teachers-Div">
        <Carousel responsive={responsive}>
          {TeacherData.map((ele) => (
            <div>
              <TeachersCard props={ele} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Teachers;
