import React from "react";
import AddIcon from "@mui/icons-material/Add";

export const AddButton = ({ action }: { action: Function }) => {
  function handleClick() {
    action();
  }
  return (
    <div className="btn-add" onClick={handleClick}>
      <AddIcon sx={{ fontSize: "20px" }} />
    </div>
  );
};
