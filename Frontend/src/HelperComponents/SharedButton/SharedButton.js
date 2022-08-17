import React from "react";
import style from "../../HelperComponents/RegButton/RegButton.module.css";

const SharedButton = ({
  children,
  onClick,
  className,
  btnStyle = {},
  type,
}) => {
  return (
    <button
      style={btnStyle}
      className={`${style.button1} ${className} cursor`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default SharedButton;
