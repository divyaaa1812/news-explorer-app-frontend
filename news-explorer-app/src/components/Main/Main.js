import SavedNews from "../SavedNews/SavedNews";
import "./Main.css";
import About from "../About/About";

const Main = ({ loggedIn }) => {
  return <main className="main">{loggedIn ? <SavedNews /> : <About />}</main>;
};

export default Main;
