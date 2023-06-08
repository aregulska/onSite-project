import React from "react";
import classNames from "classnames";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ToggleContButtonProps {
  active: boolean;
  title: string;
  handleClick: Function;
  enabled: boolean;
  pos: string;
}

export const ToggleContButton = ({
  active,
  title,
  handleClick,
  enabled,
  pos,
}: ToggleContButtonProps) => {
  let buttonClass = classNames({
    "cont-button": true,
    right: pos === "right",
    left: pos === "left",
    enabled: enabled,
    active: active,
  });

  return (
    <button
      className={buttonClass}
      onClick={() => {
        handleClick();
      }}
    >
      {enabled ? (
        pos === "left" ? (
          <ArrowBackIcon sx={{ fontSize: 16 }} />
        ) : (
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        )
      ) : (
        title
      )}{" "}
    </button>
  );
};
