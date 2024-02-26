import React, { useState } from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import logoutwt from "../../images/logoutwt.svg";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";

const Navigation = ({ loggedIn, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navbarClassname = `navbar ${
    isMenuOpen ? `navbar-bg` : `navbar-transparent`
  }`;

  return (
    <div className="navbar-container">
      <div className={navbarClassname}>
        <div className="navbar__header">
          <Link to="/" className="navbar__logo-text">
            NewsExplorer
          </Link>
        </div>
        <img
          className="hamburger"
          src={isMenuOpen ? close : menu}
          alt="click to open menu"
          onClick={toggleMenu}
        />
        <div class="desktop-menu-container">
          {loggedIn ? (
            <div className="navlinks-container">
              <NavLink exact to="/" className="nav__link">
                Home
              </NavLink>
              <NavLink to="/saved-news" className="nav__link">
                Saved articles
              </NavLink>
              <button className="navbar-button">
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
          ) : (
            <div className="navlinks-container">
              <NavLink exact to="/" className="nav__link">
                Home
              </NavLink>
              <button
                type="button"
                onClick={() => onOpenModal("SigninModal")}
                className="navbar-button navbar__signin-btn"
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mobile-menu-container">
        {loggedIn
          ? isMenuOpen && (
              <div className="mobile-menu-navlinks-container">
                <NavLink exact to="/" className="mobile-menu-nav__link">
                  Home
                </NavLink>
                <NavLink to="/saved-news" className="mobile-menu-nav__link">
                  Saved articles
                </NavLink>
                <button className="mobile-menu-navbar-button">
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
            )
          : isMenuOpen && (
              <div className="mobile-menu-navlinks-container">
                <NavLink exact to="/" className="mobile-menu-nav__link">
                  Home
                </NavLink>
                <button
                  type="button"
                  onClick={() => onOpenModal("SigninModal")}
                  className="mobile-menu-navbar-button"
                >
                  Sign in
                </button>
              </div>
            )}
      </div>
    </div>
  );
};

export default Navigation;
