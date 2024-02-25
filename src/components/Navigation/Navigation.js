import React, { useState } from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import logoutwt from "../../images/logoutwt.svg";

const Navigation = ({ loggedIn, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div class="navbar__header">
        <Link to="/" className="navbar__logo-text">
          NewsExplorer
        </Link>
      </div>
      {loggedIn ? (
        <div class="navlinks-container">
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
        <div class="navlinks-container">
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
  );
};

export default Navigation;
