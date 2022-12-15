import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <NavLink to={`/`} className="header__wrapper__brand">
          KhanhWibu
        </NavLink>
        <ul className="header__wrapper__nav">
          <li className="header__wrapper__nav__item-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="header__wrapper__nav__item-nav">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
