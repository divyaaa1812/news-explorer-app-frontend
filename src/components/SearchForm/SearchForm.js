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
      className="searchform-container"
      onSubmit={(ev) => {
        ev.preventDefault();
        handleSubmit(searchKeyword);
      }}
    >
      <p className="searchform__title">What's going on in the world?</p>
      <p className="searchform__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchform__searchbox-container">
        <div className="searchform__searchbox">
          <input
            type="text"
            name="search"
            placeholder="Enter topic"
            className="searchform__searchbox-input"
            value={searchKeyword.search}
            onChange={handleChange}
          />
          <button className="searchform__searchbox-searchbtn">Search</button>
        </div>
        <div className="searchform__searchbox-error">{formErrors.search}</div>
      </div>
    </form>
  );
};

export default SearchForm;
