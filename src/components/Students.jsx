import React from "react";
import "../componentsStyles/Students.Style.css";
import StudentsCard from "./StudentsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Students = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Students-Root-Div">
      <p className="Students-heading-1">TOP STUDIYING</p>
      <p className="Students-heading-2">Our students say</p>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={true}
        showDots={true}
        arrows={false}
      >
        <div className="Student-Slider-Div">
          <StudentsCard />
        </div>
        <div className="Student-Slider-Div">
          <StudentsCard />
        </div>
        <div className="Student-Slider-Div">
          <StudentsCard />
        </div>
        <div className="Student-Slider-Div">
          <StudentsCard />
        </div>
        <div className="Student-Slider-Div">
          <StudentsCard />
        </div>
      </Carousel>
    </div>
  );
};

export default Students;
