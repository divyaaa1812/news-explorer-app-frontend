import "./NewsCard.css";
import trash from "../../images/trash.png";
import bookmark from "../../images/bookmark.png";
import { useEffect, useState } from "react";
const NewsCard = ({ loggedIn, searchResults }) => {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const cards = showMore
    ? searchResults?.articles
    : searchResults?.articles?.slice(0, visibleCount);

  return (
    <div className="cards__container">
      <div className="card__items">
        {cards?.map((item) => {
          console.log(item);
          const publishedAt = new Date(item.publishedAt).toLocaleString(
            "default",
            {
              month: "long",
              day: "numeric",
            }
          );
          return (
            <div className="card__item" key={item.id}>
              <div className="card__image-container">
                <img
                  src={item.urlToImage}
                  alt={`cover picture for news with title ${item?.title}`}
                  className="card__image"
                />
              </div>
              <div className="card__description">
                <p className="card__date">{publishedAt}</p>
                <p className="card__title">{item.title}</p>
                <p className="card__subtitle">{item.description}</p>
                <p className="card__footer">{item.source.name.toUpperCase()}</p>
              </div>
              {loggedIn ? (
                <div className="card__category-container">
                  <p className="card__category-text">Nature</p>
                  <div className="card__trash-container">
                    <img
                      src={trash}
                      alt={`click to delete news about ${item?.title}`}
                      className="card__trash-icon"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={bookmark}
                  alt={`click to save news about ${item?.title}`}
                  className="card__bookmark-icon"
                />
              )}
            </div>
          );
        })}
      </div>
      {searchResults?.articles?.length > visibleCount && (
        <button className="cards__showmore-btn" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </div>
  );
};

export default NewsCard;
