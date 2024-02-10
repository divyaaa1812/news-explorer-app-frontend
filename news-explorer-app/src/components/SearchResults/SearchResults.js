import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="searchresult__container">
      <h3 className="searchresults__title"> Search results</h3>
      <NewsCardList searchResults={searchResults} />
    </div>
  );
};

export default SearchResults;
