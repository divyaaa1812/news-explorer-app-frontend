import NewsCard from "../NewsCard/NewsCard";
import "./SearchResults.css";
import searchicon from "../../images/notfound.svg";

const SearchResults = ({
  loggedIn,
  searchResults,
  isLoading,
  error,
  handleBookmarkClick,
}) => {
  return (
    <>
      {isLoading ? (
        <section className="preloader">
          <p className="preloader__text">Searching for news...</p>
          <div className="preloader__loading-spinner"></div>
        </section>
      ) : error ? (
        <section>{error}</section>
      ) : searchResults && searchResults?.articles?.length > 0 ? (
        <section className="main__searchresults">
          <h3 className="searchresults__title"> Search results</h3>
          <NewsCard
            loggedIn={loggedIn}
            searchResults={searchResults}
            handleBookmarkClick={handleBookmarkClick}
          />
        </section>
      ) : searchResults && searchResults?.articles?.length === 0 ? (
        <section className="searchresults__notfound">
          <img
            src={searchicon}
            className="searchresults__notfound-icon"
            alt="No results found icon"
          />
          <p className="searchresults__notfound-text">Nothing Found</p>
          <p className="searchresults__notfound-desc">
            Sorry, but nothing matched your search terms.
          </p>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchResults;
