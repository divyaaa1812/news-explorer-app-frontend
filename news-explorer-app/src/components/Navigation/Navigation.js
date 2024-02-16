import React, { useState } from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import logoutwt from "../../images/logoutwt.png";

const Navigation = ({ loggedIn, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav__logo">
      <Link to="/" className="nav__logo-text">
        NewsExplorer
      </Link>
      {loggedIn ? (
        <nav className="nav__menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}></div>
          </div>
          <NavLink
            exact
            to="/"
            activeClassName="nav__link_active"
            className="nav__link"
          >
            Home
          </NavLink>
          <NavLink
            to="/saved-news"
            activeClassName="menu__link_active"
            className="nav__link"
          >
            Saved articles
          </NavLink>
          <div className="nav__button-container">
            <button type="button" className="nav__logout-btn">
              Elise
              <span>
                <img
                  src={logoutwt}
                  alt="click to logout"
                  className="nav__logout-icon"
                />
              </span>
            </button>
          </div>
        </nav>
      ) : (
        <div className="nav__logout-nav">
          <NavLink
            exact
            to="/"
            activeClassName="nav__link_active"
            className="nav__link"
          >
            Home
          </NavLink>
          <button
            type="button"
            onClick={() => onOpenModal("SigninModal")}
            className="nav__signin-btn"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
