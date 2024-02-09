import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import logoutwt from "../../images/logoutwt.png";

const Navigation = ({ loggedIn, onOpenModal }) => {
  return (
    <div className="header__logo">
      <Link to="/" className="header__logo-text">
        NewsExplorer
      </Link>
      {loggedIn ? (
        <nav className="header__nav">
          <NavLink
            exact
            to="/"
            activeClassName="menu__link_active"
            className="menu__link"
          >
            Home
          </NavLink>
          <NavLink
            to="/saved-news"
            activeClassName="menu__link_active"
            className="menu__link"
          >
            Saved articles
          </NavLink>
          <div className="header__button-container">
            <button type="button" className="header__logout-btn">
              Elise
              <span>
                <img
                  src={logoutwt}
                  alt="click to logout"
                  className="header__logout-icon"
                />
              </span>
            </button>
          </div>
        </nav>
      ) : (
        <div className="header__logout-nav">
          <button type="button" className="header__button header__home-btn">
            Home
          </button>
          <button
            type="button"
            onClick={() => onOpenModal("SigninModal")}
            className="header__signin-btn"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
