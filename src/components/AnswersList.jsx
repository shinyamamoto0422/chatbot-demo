import React from "react";
import { Answer } from "./index";

// value.content=dataset answers contentの中身
const AnswersList = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map(( value, index ) => {
        return <Answer content={value.content} key={index.toString()} nextId={value.nextId} select={props.select}/>
      })}
    </div>
  )
};



export default AnswersList;