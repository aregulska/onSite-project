import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import RoomIcon from "@mui/icons-material/Room";
import PeopleIcon from "@mui/icons-material/People";
import TimelineIcon from "@mui/icons-material/Timeline";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";

interface NavIconProps {
  title: string;
  value: string;
  children: React.ReactNode;
  active?: boolean;
}
const NavIcon: FunctionComponent<NavIconProps> = ({
  title,
  children,
  value,
  active,
}) => {
  return (
    <div className="nav-element">
      {active ? (
        <NavLink
          to={`${value}`}
          className={({ isActive }) => (isActive ? "active" : "undefined")}
        >
          <div className="nav-element__icon">{children}</div>
          <div className="nav-element__title">{title}</div>
        </NavLink>
      ) : (
        <div>
          <div className="nav-element__icon not-active">{children}</div>
          <div className="nav-element__title not-active">{title}</div>
        </div>
      )}
    </div>
  );
};

export const Nav = () => {
  return (
    <div className="nav">
      <NavIcon title="Issues" value="issues" active={true}>
        <RoomIcon sx={{ fontSize: 24 }} />
      </NavIcon>
      <NavIcon title="Charts" value="dashboard">
        <PieChartOutlineIcon sx={{ fontSize: 24 }} />
      </NavIcon>
      <NavIcon title="Users" value="admin">
        <PeopleIcon sx={{ fontSize: 24 }} />
      </NavIcon>
      <NavIcon title="Versions" value="versions">
        <TimelineIcon sx={{ fontSize: 24 }} />
      </NavIcon>
    </div>
  );
};
