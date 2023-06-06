import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

export const CloseButton = ({ action }: { action: Function }) => {
  function handleClick() {
    action();
  }
  return (
    <button className="btn-close" onClick={handleClick}>
      <ClearIcon sx={{ fontSize: 24 }} />
    </button>
  );
};
