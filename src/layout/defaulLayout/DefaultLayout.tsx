import React from "react";

import { Outlet } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";

import { useDefaultLayoutController } from "./useDefaultLayoutController";

export const DefaultLayout = () => {
  // console.log("RENDER DEFAULT LAYOUT");
  useDefaultLayoutController();
  return (
    <div className="main-screen">
      <Header />
      <div className="main-cont">
        <Nav />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
