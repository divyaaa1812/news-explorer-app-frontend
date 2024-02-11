import "./NewsCard.css";
import trash from "../../images/trash.png";
import bookmark from "../../images/bookmark.png";
import { useState } from "react";
const NewsCard = ({ loggedIn, searchResults }) => {
  const [showMore, setShowMore] = useState(false);
  const cards = showMore
    ? searchResults?.articles
    : searchResults?.articles?.slice(0, 3);

  return (
    <div className="cards__container">
      <div className="card__items">
        {cards?.map((item) => {
          const publishedAt = new Date(item.publishedAt).toLocaleString(
            "default",
            {
              month: "long",
              day: "numeric",
            }
          );
          return (
            <div className="card__item" key={item.id}>
              <div>
                <img
                  src={item.urlToImage}
                  alt="click to preview image"
                  className="card__image"
                />
              </div>
              {loggedIn ? (
                <div className="card__category-container">
                  <p className="card__category-text">Nature</p>
                  <div className="card__trash-container">
                    <img
                      src={trash}
                      alt="click to delete"
                      className="card__trash-icon"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={bookmark}
                  alt="click to save news"
                  className="card__bookmark-icon"
                />
              )}
              <div className="card__description">
                <p className="card__date">{publishedAt}</p>
                <p className="card__title">{item.title}</p>
                <p className="card__subtitle">{item.description}</p>
                <p className="card__footer">{item.source.name.toUpperCase()}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="cards__showmore-btn"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default NewsCard;
