import React from "react";
import style from "./InputBox.module.css";

const InputBox = ({
  name,
  type,
  className,
  label,
  value,
  defaultValue,
  onChange,
  placeholder
}) => {
  return (
    <div className={`${style.input} ${className}`}>
      <label htmlFor="">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputBox;
