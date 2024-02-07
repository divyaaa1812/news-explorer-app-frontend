import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  return (
    <header className="savednewsheader">
      <div className="header__title-container">
        <p className="header__title savednewsheader-title">Saved articles</p>
        <p className="header__title savednewsheader-subtitle">
          Elise, you have 5 saved articles
        </p>
        <p className="header__title savednewsheader-text">
          By keywords:{" "}
          <span className="header__title savednewsheader-keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
};
export default SavedNewsHeader;
