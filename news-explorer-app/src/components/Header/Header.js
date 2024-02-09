import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ loggedIn, onOpenModal }) => {
  return (
    <header className="header">
      <Navigation loggedIn={loggedIn} onOpenModal={onOpenModal} />
      <SearchForm />
    </header>
  );
};

export default Header;
