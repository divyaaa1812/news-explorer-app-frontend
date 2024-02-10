import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ searchResults }) => {
  {
    searchResults?.articles?.map((item) => {
      console.log(item);
      return (
        <div className="card__items">
          <NewsCard />
        </div>
      );
    });
  }
};

export default NewsCardList;
