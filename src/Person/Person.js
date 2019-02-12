import React from 'react';
import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.clickHandler}>
        Hi, my name is {props.name} and i'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input onChange={props.inputHandler} value={props.name}></input>
    </div>
  );
}

export default person;