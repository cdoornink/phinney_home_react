import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1 className="logo">
        <div className="cursive color-green">Phinney</div>
        Home Interiors
      </h1>
    </Link>
    <div className="menu">
      <NavLink className="menu-item" to="/about" activeClassName="-active">
        about
      </NavLink>
      <NavLink className="menu-item" to="/projects" activeClassName="-active">
        projects
      </NavLink>
      <NavLink className="menu-item" to="/services" activeClassName="-active">
        services
      </NavLink>
      <NavLink className="menu-item" to="/contact" activeClassName="-active">
        contact
      </NavLink>
      <NavLink className="menu-item" to="/social" activeClassName="-active">
        social
      </NavLink>
    </div>
  </div>
);
export default Header;
