import "./SearchForm.css";

const SearchForm = () => {
  return (
    <>
      <h1 className="header__searchformtitle">What's going on in the world?</h1>
      <p className="header__searchformsubtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="header__searchbtn">
        <input
          type="text"
          name="searchbox"
          placeholder="Enter topic"
          className="searchbox__input-field"
          required
        ></input>
        <span>
          <button className="search-btn">Search</button>
        </span>
      </div>
    </>
  );
};

export default SearchForm;
