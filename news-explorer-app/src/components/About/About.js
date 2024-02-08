import "./About.css";
import about from "../../images/about.png";

const About = () => {
  return (
    <div className="about__container">
      <img src={about} className="about__image" alt="Loggedin user" />
      <div className="about__text">
        <h4 className="about__title">About the author</h4>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. <br />{" "}
          <br />
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
