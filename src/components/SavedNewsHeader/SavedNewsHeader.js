import React, { useState, useEffect } from "react";
import "./SavedNewsHeader.css";
import logout from "../../images/logout.svg";
import { Link, NavLink } from "react-router-dom";
import menu from "../../images/menu-bl.svg";
import close from "../../images/close.svg";
import logoutwt from "../../images/logoutwt.svg";
import * as api from "../../utils/MainApi";

const SavedNewsHeader = ({ onLogout, currentUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const savednewsnavbarclassname = `savednewsnavbar__header ${
    isMenuOpen ? `navbar-bg` : `navbar-transparent`
  }`;

  const savednewsnavbarlogoclassname = `${
    isMenuOpen ? `savednewsnavbar__logo-mobile ` : `savednewsnavbar__logo-text`
  }`;

  const searchKeywords = Object.keys(
    savedArticles.reduce((acc, item) => {
      if (!(item.category in acc)) {
        acc[item.category] = true;
      }
      return acc;
    }, {})
  );

  console.log(searchKeywords);

  useEffect(() => {
    api.getSavedArticles().then((response) => {
      setSavedArticles(response);
    });
  }, []);

  return (
    <header className="savednewsnavbar">
      <div className={savednewsnavbarclassname}>
        <div className="savednewsnavbar__logo">
          <Link to="/" className={savednewsnavbarlogoclassname}>
            NewsExplorer
          </Link>
        </div>
        <img
          className="savednews__hamburger"
          src={isMenuOpen ? close : menu}
          alt="click to open menu"
          onClick={toggleMenu}
        />
        <div className="savednewsnavbar-links">
          <NavLink exact to="/" className="savednewsnav__link">
            Home
          </NavLink>
          <NavLink to="/saved-news" className="savednewsnav__link">
            Saved articles
          </NavLink>
          <button className="savednewsnavbar-button" onClick={onLogout}>
            {currentUser.username}
            <span>
              <img
                src={logout}
                alt="click to logout"
                className="nav__logout-icon"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="mobile-menu-container">
        {isMenuOpen && (
          <div className="savednewsnavbar-links-mobile">
            <NavLink exact to="/" className="savednewsnav__link-mobile">
              Home
            </NavLink>
            <NavLink to="/saved-news" className="savednewsnav__link-mobile">
              Saved articles
            </NavLink>
            <button className="savednewsnavbar-button-mobile">
              {currentUser.username}
              <span>
                <img
                  src={logoutwt}
                  alt="click to logout"
                  className="nav__logout-icon-mobile"
                />
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="savednewsheader__title-container">
        <p className="savednewsheader-title">Saved articles</p>
        <p className="savednewsheader-subtitle">
          {currentUser.username}, you have {savedArticles.length} saved articles
        </p>
        <p className="savednewsheader-text">
          By keywords:
          <span className="savednewsheader-keywords">
            {searchKeywords.join(",")}
          </span>
        </p>
      </div>
    </header>
  );
};
export default SavedNewsHeader;
