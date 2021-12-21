import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const activeStyle = {
    color: "rgba(255, 255, 255, 1)",
  };

  return (
    <div className="navbar frosted-pane">
      <div>
        <NavLink exact to="/projects" activeStyle={activeStyle}>
          Projects
        </NavLink>
      </div>

      <div>
        <NavLink exact to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </div>

      <div>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
