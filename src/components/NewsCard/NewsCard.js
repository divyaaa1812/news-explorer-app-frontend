import "./NewsCard.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkactive from "../../images/bookmark-active.svg";
import bookmarkblue from "../../images/bookmarkblue.svg";
import { useEffect, useState } from "react";
import { addCardBookmark, removeCardBookmark } from "../../utils/Auth";

const NewsCard = ({ loggedIn, searchResults }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [tooltipId, settooltipId] = useState("");
  const [bookmarkIds, setbookmarkIds] = useState({});
  const [savedNews, setSavedNews] = useState([]);
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

  const handleBookmarkClick = (cardItem, key) => {
    let hasBookmark = bookmarkIds[key] ? true : false;
    // Check if this card is bookmarked
    if (hasBookmark) {
      // send a request to delete
      setbookmarkIds((prev) => {
        let newIds = { ...prev };
        delete newIds[key];
        return newIds;
      });
      removeCardBookmark(cardItem)
        .then((updatedCard) => {
          console.log(updatedCard);
          setSavedNews("");
        })
        .catch(console.error);
    } else {
      setbookmarkIds((prev) => {
        return {
          ...prev,
          [key]: true,
        };
      });
      addCardBookmark(cardItem)
        .then((bookmarkedCard) => {
          console.log(bookmarkedCard);
          setSavedNews(bookmarkedCard);
        })
        .catch(console.error);
    }
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
            <article className="card__item" key={key}>
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
            </article>
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
