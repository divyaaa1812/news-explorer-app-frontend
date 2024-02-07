import SavedNews from "../SavedNews/SavedNews";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <SavedNews />
      <NewsCard />
    </main>
  );
};

export default Main;
