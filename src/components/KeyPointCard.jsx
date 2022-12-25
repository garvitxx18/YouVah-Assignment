import React from "react";
import "../componentsStyles/KeyPointCard.Style.css";

const KeyPointCard = (props) => {
  console.log(props);
  return (
    <div className="Key-Point-Card-Main-Div">
      <img src={props.props.Image}></img>
      <p className="Key-Point-Card-Heading-1">{props.props.head}</p>
      <p className="Key-Point-Card-Heading-2">{props.props.data}</p>
    </div>
  );
};

export default KeyPointCard;
