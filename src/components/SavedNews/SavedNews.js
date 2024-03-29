import "./SavedNews.css";
import deleteicon from "../../images/deleteicon.svg";
import image from "../../images/image_06.png";
import { useState } from "react";

const SavedNews = () => {
  const [tooltipId, settooltipId] = useState("");

  const handleMouseLeave = () => {
    settooltipId("");
  };

  const handleMouseOver = () => {
    settooltipId();
  };

  return (
    <div className="savednews__items">
      <div className="savednews__item">
        <div className="savednews__image-container">
          <img
            src={image}
            alt={`cover for saved news`}
            className="savednews__image"
          />
        </div>
        <div className="savednews__description">
          <p className="savednews__date">November 4, 2020</p>
          <h1 className="savednews__title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h1>
          <p className="savednews__subtitle">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <p className="savednews__footer">treehugger</p>
        </div>
        <div className="savednews__category-container">
          <p className="savednews__category-text">Nature manuijyhhh</p>
        </div>
        <img
          src={deleteicon}
          className="delete-icon"
          alt={`click to delete saved news`}
          onMouseLeave={handleMouseLeave}
          onMouseOver={() => handleMouseOver()}
        />
        {tooltipId !== "" && (
          <span id="tooltip-delete" className="tooltip-delete">
            Remove from saved
          </span>
        )}
      </div>
    </div>
  );
};

export default SavedNews;
