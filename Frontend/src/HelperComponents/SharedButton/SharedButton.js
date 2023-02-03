import React from "react";
import style from "../../HelperComponents/RegButton/RegButton.module.css";

const SharedButton = ({
  children,
  onClick,
  className,
  btnStyle = {},
  type,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      style={btnStyle}
      className={`${style.button1} ${className} ${style.disabledButton} cursor`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default SharedButton;
