import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

import { useLogOut } from "../../../../utils/hooks/useLogOut";

export const LogOutButton = ({ action }: { action: Function }) => {
  const logOut = useLogOut();

  const handleLogOut = () => {
    if (action) action();
    logOut();
  };

  return (
    <div className="logOutButton" onClick={handleLogOut}>
      <LogoutIcon sx={{ fontSize: 28 }} />
    </div>
  );
};
