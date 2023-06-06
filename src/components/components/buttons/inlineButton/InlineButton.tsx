import React from "react";

export const InlineButton = ({
  title,
  action,
}: {
  title: String;
  action: Function;
}) => {
  function handleClick() {
    action();
  }

  return (
    <button className="btn-inline" onClick={handleClick}>
      {title}
    </button>
  );
};
