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
      <nav className="footer__nav">
        <ul className="footer__nav-links">
          <NavLink exact to="/" className="footer__nav-link" target="_blank">
            Home
          </NavLink>
          <a
            href="https://tripleten.com/"
            className="footer__nav-link"
            target="_blank"
          >
            Practicum
          </a>
        </ul>
        <ul className="footer__nav-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fbicon}
              alt="click to open facebook account"
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
              alt="click to open github account"
              className="footer__github-icon"
            />
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
