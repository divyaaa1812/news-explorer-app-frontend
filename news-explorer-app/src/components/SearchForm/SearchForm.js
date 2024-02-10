import "./SearchForm.css";
import { useState } from "react";

const SearchForm = ({ onSearchClick }) => {
  const [value, setValue] = useState("");
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
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          required
        ></input>
        <span>
          <button
            className="search-btn"
            onClick={() => {
              onSearchClick(value);
            }}
          >
            Search
          </button>
        </span>
      </div>
    </>
  );
};

export default SearchForm;
