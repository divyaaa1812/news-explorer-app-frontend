import "./SearchForm.css";
import React, { useState } from "react";

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
    <div className="header__searchform">
      <h1 className="searchform__title">What's going on in the world?</h1>
      <p className="searchform__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="searchform__searchbox-container"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSubmit(searchKeyword);
        }}
      >
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
      </form>
    </div>
  );
};

export default SearchForm;
