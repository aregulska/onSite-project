import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";

export const DefaultLayout = () => {
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
