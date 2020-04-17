import React from "react";
import "./index.scss";

class Input extends React.Component {
  render() {
    const { placeholder, value, name, handleChange } = this.props;
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
  }
}

export default Input;
