import React from 'react'
import photo from '../assets/react.svg'
const Card = (props) => {
  return (
    <div>
     <img src={props.img} alt="" />
     <h3>Name:<span>{props.name}</span></h3>
     <p>{props.role}</p>
    </div>
  )
}

export default Card
