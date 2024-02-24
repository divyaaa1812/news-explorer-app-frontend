import "./About.css";
import about from "../../images/about.png";

const About = () => {
  return (
    <section className="about__container">
      <img src={about} className="about__image" alt="Loggedin user" />
      <div className="about__text">
        <h4 className="about__title">About the author</h4>
        <p className="about__description">
          Hello! I'm Divya, a software professional with a rich background in
          Quality Assurance (QA) engineering and a newfound passion for web
          development. With years of experience ensuring the quality and
          reliability of software products, I am now embarking on an exciting
          journey to transition into the realm of web development.{" "}
        </p>
        <p>
          Through Practicum, I learned Comprehensive understanding of front-end
          technologies like HTML, CSS, and JavaScript, enabling me to create
          visually stunning and interactive user interfaces.With my newfound
          knowledge and skills, I am well-equipped to assist potential customers
          in achieving their web development goals.
        </p>
      </div>
    </section>
  );
};

export default About;
