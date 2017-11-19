import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1 className="logo">
        <div className="cursive color-green">Phinney</div>
        Home Interiors
      </h1>
    </Link>
    <div className="menu">
      <Link className="menu-item" to="/about">
        about
      </Link>
      <Link className="menu-item" to="/projects">
        projects
      </Link>
      <Link className="menu-item" to="/services">
        services
      </Link>
      <Link className="menu-item" to="/contact">
        contact
      </Link>
      <Link className="menu-item" to="/social">
        social
      </Link>
    </div>
  </div>
);
export default Header;
