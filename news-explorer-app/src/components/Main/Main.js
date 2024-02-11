import SavedNews from "../SavedNews/SavedNews";
import "./Main.css";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({ loggedIn, searchResults }) => {
  return (
    <main className="main">
      {(searchResults && searchResults?.totalResults) > 0 ? (
        <SearchResults loggedIn={loggedIn} searchResults={searchResults} />
      ) : (
        <></>
      )}
      <About />
    </main>
  );
};

export default Main;
