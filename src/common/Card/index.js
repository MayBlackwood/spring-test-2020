import React from "react";
import cn from "classnames";

import Button from "./../Button";

import "./index.scss";

const Card = ({ data, onCardClick, onButtonClick, selected }) => {
  const { name, shortInfo, disabled, deletedDate } = data;

  const handleCardClick = () => {
    const { disabled } = data;

    if (disabled) {
      return;
    }

    onCardClick();
  };

  return (
    <div
      className={cn("card-wrapper", {
        ["disabled"]: disabled,
        ["selected"]: selected,
      })}
      onClick={handleCardClick}
    >
      <div className="card-header">
        <Button
          className={cn({ ["restore"]: disabled })}
          onButtonClick={onButtonClick}
          name={disabled ? "🔄" : "❌"}
        />
      </div>
      <div className="card-body">
        <div className="title">{name}</div>
        <div className="description">{shortInfo}</div>
        {deletedDate && (
          <div className="deleted-date">Deleted at : {deletedDate}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
