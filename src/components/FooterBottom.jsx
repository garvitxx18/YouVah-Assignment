import React from "react";
import "../componentsStyles/FooterBottom.Style.css";

const FooterBottom = (props) => {
  console.log(props);
  return (
    <div>
      <p className="Footer-Bottom-Heading">{props.props.head}</p>
      <ul>
        {props.props.data.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBottom;
