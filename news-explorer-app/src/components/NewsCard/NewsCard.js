import "./NewsCard.css";
import pic from "../../images/image_06.png";
import trash from "../../images/trash.png";

const NewsCard = () => {
  return (
    <div className="card__item">
      <div className="card__category-container">
        <p className="card__category-text">Nature</p>
      </div>
      <div className="card__trash-container">
        <img src={trash} alt="click to delete" className="card__trash-icon" />
      </div>
      <img src={pic} alt="click to preview image" className="card__image" />
      <div className="card__description">
        <p className="card__date">November 4, 2020</p>
        <p className="card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </p>
        <p className="card__subtitle">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="card__footer">treehugger</p>
      </div>
    </div>
  );
};

export default NewsCard;
