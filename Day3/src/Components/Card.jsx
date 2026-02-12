import React from "react";
import image from '../assets/react.svg'
import './Card.css'
const Card = (props) => {
  return (
    <div className="contain">
      <h1>{props.name}</h1>
      <img src={props.photo} alt="" />
      <p>
      {props.dis}
      </p>
    </div>
  );
};

export default Card;
