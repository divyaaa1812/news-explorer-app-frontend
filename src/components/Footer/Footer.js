import "./Footer.css";
import githubicon from "../../images/github.svg";
import fbicon from "../../images/fb.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>© 2024 Supersite, Powered by News API</p>
      </div>
      <div className="footer__nav">
        <div className="footer__nav-links">
          <NavLink exact to="/" className="footer__nav-link">
            Home
          </NavLink>
          <NavLink exact to="/" className="footer__nav-link">
            Practicum
          </NavLink>
        </div>
        <div className="footer__nav-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fbicon}
              alt="Facebook"
              className="footer__facebook-icon"
            />
          </a>
          <a
            href="https://github.com/divyaaa1812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubicon}
              alt="Github"
              className="footer__github-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
