import React from "react";
import "./index.scss";

const Input = ({ placeholder, value, name, handleChange }) => {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
