import "./SearchForm.css";
import React, { useState, useEffect } from "react";

const SearchForm = ({ onSearchClick }) => {
  const [searchKeyword, setsearchKeyword] = useState({
    search: "",
  });
  const [formErrors, setFormErrors] = useState({
    search: "",
  });

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    // search field validation
    if (!searchKeyword.search) {
      formIsValid = false;
      errors.search = "Please enter a keyword";
    }
    setFormErrors(errors);
    return formIsValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsearchKeyword({ ...searchKeyword, [name]: value });
  };

  const handleSubmit = (searchKeyword) => {
    if (validateForm()) {
      onSearchClick(searchKeyword.search);
    }
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        handleSubmit(searchKeyword);
      }}
    >
      <h1 className="header__searchformtitle">What's going on in the world?</h1>
      <p className="header__searchformsubtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="header__searchform">
        <div className="header__searchbtn">
          <input
            type="text"
            name="search"
            placeholder="Enter topic"
            className="searchbox__input-field"
            value={searchKeyword.search}
            onChange={handleChange}
          />
          <button className="searchbox__search-btn">Search</button>
        </div>
        <div className="searchbox__input-field-error">{formErrors.search}</div>
      </div>
    </form>
  );
};

export default SearchForm;
