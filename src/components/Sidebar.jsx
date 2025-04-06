import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiDashboardLine,
  RiProjectorLine,
  RiTeamLine,
  RiPieChartLine,
  RiMessage2Line,
  RiSettings4Line,
} from "react-icons/ri";
import logo from "../assets/images/Logo.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="nav-menu">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiDashboardLine className="nav-icon" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiProjectorLine className="nav-icon" />
          <span>Projects</span>
        </NavLink>

        <NavLink
          to="/teams"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiTeamLine className="nav-icon" />
          <span>Teams</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiPieChartLine className="nav-icon" />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiMessage2Line className="nav-icon" />
          <span>Messages</span>
        </NavLink>

        <NavLink
          to="/integrations"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <RiSettings4Line className="nav-icon" />
          <span>Integrations</span>
        </NavLink>
      </nav>

      <div className="version-info">
        <p>V2.0 is available</p>
        <button className="try-now-btn">Try now</button>
      </div>
    </aside>
  );
};

export default Sidebar;
