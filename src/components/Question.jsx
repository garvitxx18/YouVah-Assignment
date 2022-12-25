import React from "react";
import "../componentsStyles/Question.Style.css";
import QuestionCard1 from "./QuestionCard1";
import { Questiondata } from "../data/QuestionList.js";

const Question = () => {
  return (
    <div className="Question-Root-Div">
      <p className="Question-heading-1">MORE INFO</p>
      <p className="Question-heading-2">Common questions</p>
      <div className="grid-container">
        {Questiondata.map((ele) => (
          <div className="grid-item grid-item-1">
            {<QuestionCard1 props={ele} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
