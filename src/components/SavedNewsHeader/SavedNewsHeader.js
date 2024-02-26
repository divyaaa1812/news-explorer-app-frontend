import "./SavedNewsHeader.css";
import logout from "../../images/logout.svg";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const SavedNewsHeader = () => {
  return (
    <header className="savednewsnavbar">
      <div className="savednewsnavbar__header">
        <div class="savednewsnavbar__logo">
          <Link to="/" className="savednewsnavbar__logo-text">
            NewsExplorer
          </Link>
        </div>
        <div class="savednewsnavbar-links">
          <NavLink exact to="/" className="savednewsnav__link">
            Home
          </NavLink>
          <NavLink to="/saved-news" className="savednewsnav__link">
            Saved articles
          </NavLink>
          <button className="savednewsnavbar-button">
            Elise
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
      <div className="savednewsheader__title-container">
        <p className="savednewsheader-title">Saved articles</p>
        <p className="savednewsheader-subtitle">
          Elise, you have 5 saved articles
        </p>
        <p className="savednewsheader-text">
          By keywords:{" "}
          <span className="savednewsheader-keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
};
export default SavedNewsHeader;
