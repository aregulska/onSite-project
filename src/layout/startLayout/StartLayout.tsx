import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

export const StartLayout = () => {
  const location = useLocation().pathname;
  // const { user: currentUser } = useAuth();
  // //console.log("START LAYOUT", location);

  return (
    <div className="start-screen">
      <div className="start-screen__header">
        <h1>
          {location === "/projects"
            ? "Choose Project"
            : location === "/register"
            ? "Register"
            : "Log In"}
        </h1>
      </div>
      <div className="start-screen__cont">
        <Outlet />
      </div>
    </div>
  );
};
