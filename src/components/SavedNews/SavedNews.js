import React, { useEffect, useContext } from "react";
import "./SavedNews.css";
import deleteicon from "../../images/deleteicon.svg";
import { useState } from "react";
import * as api from "../../utils/MainApi";

const SavedNews = ({ onDelIconClick }) => {
  const [tooltipId, settooltipId] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const handleMouseLeave = () => {
    settooltipId("");
  };
  const handleMouseOver = () => {
    settooltipId();
  };

  useEffect(() => {
    api.getSavedArticles().then((response) => {
      setSavedArticles(response);
    });
  }, []);

  return (
    <div className="savednews__items">
      {savedArticles.map((card) => {
        const publishedAt = new Date(card.publishedAt).toLocaleString(
          "default",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }
        );
        return (
          <div className="savednews__item" key={card._id}>
            <div className="savednews__image-container">
              <img
                src={card.urlToImage}
                alt={`cover for saved news`}
                className="savednews__image"
              />
            </div>
            <div className="savednews__description">
              <p className="savednews__date">{publishedAt}</p>
              <h1 className="savednews__title">{card.title}</h1>
              <p className="savednews__subtitle">{card.description}</p>
            </div>
            <p className="savednews__footer">{card.source.toUpperCase()}</p>
            <div className="savednews__category-container">
              <p className="savednews__category-text">{card.category}</p>
            </div>
            <img
              src={deleteicon}
              className="delete-icon"
              alt={`click to delete saved news`}
              onMouseLeave={handleMouseLeave}
              onMouseOver={() => handleMouseOver()}
              onClick={() => {
                // delete from savedArticles
                setSavedArticles((oldSavedArticles) => {
                  const newSavedArtices = oldSavedArticles.filter(
                    (item) => item.key !== card.key
                  );
                  return [...newSavedArtices];
                });
                onDelIconClick(card);
              }}
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
