import React from "react";
import "../componentsStyles/TeacherCard.Styles.css";

const TeachersCard = (props) => {
  return (
    <div className="Teacher-Main-Div">
      <div className="Teacher-Img-Div">
        <img src={props.props.Image} alt="TeacherImage"></img>
      </div>
      <p className="Teacher-Name">{props.props.name}</p>
      <div className="Flag-Div">
        <img
          src={props.props.FlagImg}
          alt="flagImg"
          className="FLag-Image"
        ></img>
        <p className="subject-Name">{props.props.subjectName}</p>
      </div>
    </div>
  );
};

export default TeachersCard;
