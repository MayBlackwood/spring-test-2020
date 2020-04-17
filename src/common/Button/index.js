import React from "react";
import cn from "classnames";

import "./index.scss";

const Button = ({ className, onButtonClick, name }) => {
  return (
    <button className={cn("button", className)} onClick={onButtonClick}>
      {name}
    </button>
  );
};

export default Button;
