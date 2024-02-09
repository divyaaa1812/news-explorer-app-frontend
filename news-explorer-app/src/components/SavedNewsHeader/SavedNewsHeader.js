import "./SavedNewsHeader.css";
import logout from "../../images/logout.png";
import { Link } from "react-router-dom";

const SavedNewsHeader = () => {
  return (
    <header className="savednewsheader">
      <div className="savednewsheader__nav">
        <Link to="/" className="savednewsheader__logo">
          NewsExplorer
        </Link>
        <div className="savednewsheader__btn-container">
          <button type="button" className="savednewsheader__btn">
            Home
          </button>
          <button type="button" className="savednewsheader__btn">
            Saved articles
          </button>
          <button type="button" className="savednewsheader__logout-btn">
            Elise
            <span>
              <img
                src={logout}
                alt="click to logout"
                className="savednewsheader__logout-icon"
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
