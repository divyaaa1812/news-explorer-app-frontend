import "./Main.css";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({ loggedIn, searchResults, isLoading }) => {
  return (
    <main className="main">
      {isLoading && (
        <div className="preloader">
          <p className="preloader__text">Searching for news...</p>
          <div className="preloader__loading-spinner"></div>
        </div>
      )}
      {searchResults && searchResults.totalResults > 0 ? (
        <SearchResults
          loggedIn={loggedIn}
          searchResults={searchResults}
          isLoading={isLoading}
        />
      ) : (
        <></>
      )}
      <About />
    </main>
  );
};

export default Main;
