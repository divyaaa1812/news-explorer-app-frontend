import SavedNews from "../SavedNews/SavedNews";
import "./Main.css";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({ loggedIn, searchResults, loading }) => {
  return (
    <main className="main">
      {loading && (
        <div className="preloader">
          <p className="preloader__text">Searching for news...</p>
          <div className="preloader__loading-spinner"></div>
        </div>
      )}
      {(searchResults && searchResults?.totalResults) > 0 ? (
        <SearchResults
          loggedIn={loggedIn}
          searchResults={searchResults}
          loading={loading}
        />
      ) : (
        <></>
      )}
      <About />
    </main>
  );
};

export default Main;
