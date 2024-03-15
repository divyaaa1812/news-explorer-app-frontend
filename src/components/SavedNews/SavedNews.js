import React, { useEffect, useContext } from "react";
import "./SavedNews.css";
import deleteicon from "../../images/deleteicon.svg";
import image from "../../images/image_06.png";
import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext ";
import * as auth from "../../utils/Auth";

const SavedNews = ({ savedArticles }) => {
  const [tooltipId, settooltipId] = useState("");
  const [savedItem, setSavedItem] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  const handleMouseLeave = () => {
    settooltipId("");
  };
  const handleMouseOver = () => {
    settooltipId();
  };
  const currentUserSavedArticles = [savedArticles.data].filter((item) => {
    console.log(item);
    return currentUser._id === item.owner;
  });
  console.log(currentUserSavedArticles);

  const getSavedArticles = async () => {
    try {
      const data = await auth.getSavedArticles();
      console.log(data);
      setSavedItem(data);
    } catch (error) {}
  };

  // useEffect(() => {
  //   getSavedArticles();
  // }, []);

  return (
    <div className="savednews__items">
      {currentUserSavedArticles.length > 0 &&
        currentUserSavedArticles.map((data) => {
          return (
            <div className="savednews__item">
              <div className="savednews__image-container">
                <img
                  src={data.urlToImage}
                  alt={`cover for saved news`}
                  className="savednews__image"
                />
              </div>
              <div className="savednews__description">
                <p className="savednews__date">{data.publishedAt}</p>
                <h1 className="savednews__title">{data.title}</h1>
                <p className="savednews__subtitle">{data.description}</p>
                <p className="savednews__footer">{data.source}</p>
              </div>
              <div className="savednews__category-container">
                <p className="savednews__category-text">Nature</p>
              </div>
              <img
                src={deleteicon}
                className="delete-icon"
                alt={`click to delete saved news`}
                onMouseLeave={handleMouseLeave}
                onMouseOver={() => handleMouseOver()}
                // onClick={onDelIconClick(data)}
              />
              {tooltipId !== "" && (
                <span id="tooltip-delete" className="tooltip-delete">
                  Remove from saved
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SavedNews;
