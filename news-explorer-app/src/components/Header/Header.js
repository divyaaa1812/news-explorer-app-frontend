import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <div className="header__logo">
        {loggedIn ? (
          <Link to="/" className="header__logo-link">
            <p>NewsExplorer</p>
          </Link>
        ) : (
          <Link to="/" className="header__logo-notloggedin">
            <p>NewsExplorer</p>
          </Link>
        )}
        <Navigation loggedIn={loggedIn} />
      </div>
      <div className="header__searchform">
        {loggedIn ? <SavedNewsHeader /> : <SearchForm />}
      </div>
    </header>
  );
};

export default Header;
