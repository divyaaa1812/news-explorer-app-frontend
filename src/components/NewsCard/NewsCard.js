import "./NewsCard.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkactive from "../../images/bookmark-active.svg";
import bookmarkblue from "../../images/bookmarkblue.svg";
import { useState } from "react";

const NewsCard = ({
  loggedIn,
  searchResults,
  handleBookmarkClick,
  bookmarkIds,
}) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [tooltipId, settooltipId] = useState("");
  const cards = searchResults?.articles?.slice(0, visibleCount);

  const getBookmarkClass = (loggedIn, bookmarked) => {
    const classes = ["card__bookmark-icon"];

    if (loggedIn) {
      classes.push("card__bookmark-icon_active");
    } else {
      classes.push("card__bookmark-icon_inactive");
    }

    if (bookmarked) {
      classes.push("bookmark-blue");
    }

    return classes.join(" ");
  };

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
        {cards?.map((item, index) => {
          let key = `${item.source.id}-${index}`;
          let hasBookmark = bookmarkIds[key] ? true : false;
          const publishedAt = new Date(item.publishedAt).toLocaleString(
            "default",
            {
              month: "long",
              day: "numeric",
            }
          );
          return (
            <li className="card__item" key={key}>
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
                  {hasBookmark ? (
                    <img
                      src={bookmarkblue}
                      className={getBookmarkClass(loggedIn, hasBookmark)}
                      onClick={() => handleBookmarkClick(item, key)}
                      alt={`click to bookmark news about ${item?.title}`}
                    />
                  ) : (
                    <img
                      src={bookmarkactive}
                      className={getBookmarkClass(loggedIn, hasBookmark)}
                      onClick={() => handleBookmarkClick(item, key)}
                      alt={`click to bookmark news about ${item?.title}`}
                    />
                  )}
                </>
              ) : (
                <div className="card__bookmark-container">
                  <img
                    src={bookmark}
                    alt={`click to save news about ${item?.title}`}
                    className={getBookmarkClass(loggedIn, hasBookmark)}
                    onMouseLeave={handleMouseLeave}
                    onMouseOver={() => handleMouseOver(key)}
                  />
                  {tooltipId === key && (
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
      {searchResults?.articles?.length > visibleCount && (
        <button className="cards__showmore-btn" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </div>
  );
};

export default NewsCard;
