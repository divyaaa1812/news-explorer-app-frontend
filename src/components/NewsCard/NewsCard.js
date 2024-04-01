import "./NewsCard.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkactive from "../../images/bookmark-active.svg";
import bookmarkblue from "../../images/bookmarkblue.svg";
import { useState } from "react";

const NewsCard = ({
  loggedIn,
  searchResults,
  handleBookmarkClick,
  onOpenModal,
}) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [tooltipId, settooltipId] = useState("");
  const cards = searchResults.slice(0, visibleCount);

  const activeBookmarkClassName = `card__bookmark-icon ${
    loggedIn ? "card__bookmark-icon_active" : "card__bookmark-icon_inactive"
  }`;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleMouseLeave = () => {
    settooltipId("");
  };

  const handleMouseOver = (id) => {
    settooltipId(id);
  };

  return (
    <div className="cards__container">
      <ul className="card__items">
        {cards?.map((item) => {
          const bookmarkClassName = `card__bookmark-icon_active ${
            loggedIn && item.isBookmarked ? "bookmark-blue" : ""
          }`;

          const srcValue =
            loggedIn && item.isBookmarked ? bookmarkblue : bookmarkactive;
          const publishedAt = new Date(item.publishedAt).toLocaleString(
            "default",
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          );
          return (
            <li className="card__item" key={item.key}>
              <div className="card__image-container">
                <img
                  src={item.urlToImage}
                  alt={`Illustration for news with title ${item?.title}`}
                  className="card__image"
                />
              </div>
              <div className="card__description">
                <p className="card__date">{publishedAt}</p>
                <h4 className="card__title">{item.title}</h4>
                <p className="card__subtitle">{item.description}</p>
              </div>
              <p className="card__footer">{item.source.name.toUpperCase()}</p>
              {loggedIn ? (
                <>
                  {item.isBookmarked ? (
                    <img
                      src={srcValue}
                      className={bookmarkClassName}
                      onClick={() => handleBookmarkClick(item)}
                      alt={`click to bookmark news about ${item?.title}`}
                    />
                  ) : (
                    <img
                      src={srcValue}
                      className={bookmarkClassName}
                      onClick={() => handleBookmarkClick(item)}
                      alt={`click to bookmark news about ${item?.title}`}
                    />
                  )}
                </>
              ) : (
                <div className="card__bookmark-container">
                  <img
                    src={bookmark}
                    alt={`click to save news about ${item?.title}`}
                    className={activeBookmarkClassName}
                    onMouseLeave={handleMouseLeave}
                    onMouseOver={() => handleMouseOver(item.key)}
                    onClick={() => onOpenModal("SignupModal")}
                  />
                  {tooltipId === item.key && (
                    <span id="tooltip-message" className="tooltip-message">
                      Sign in to save articles
                    </span>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {searchResults?.length > visibleCount && (
        <button className="cards__showmore-btn" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </div>
  );
};

export default NewsCard;
