import "./Footer.css";
import githubicon from "../../images/github.png";
import fbicon from "../../images/fb.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>© 2024 Supersite, Powered by News API</p>
      </div>
      <div className="footer__nav">
        <div className="footer__nav-links">
          <p className="footer__nav-link">Home</p>
          <p className="footer__nav-link">Practicum</p>
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
