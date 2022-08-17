import React from 'react';
import style from "./Card.module.css";

const Card = ({ children, cardStyle = {}, className }) => {
  return (
    <div className={`${style.card} ${className}`} style={cardStyle}>{children}</div>
  )
}

export default Card