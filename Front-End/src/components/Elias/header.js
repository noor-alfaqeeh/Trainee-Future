import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav >
      <div >
        <NavLink to="/">
          Trainee Future
        </NavLink>
        <ul >
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
