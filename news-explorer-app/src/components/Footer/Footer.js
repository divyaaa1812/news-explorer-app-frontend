import "./Footer.css";
import githubicon from "../../images/github.png";
import fbicon from "../../images/fb.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>© 2020 Supersite, Powered by News API</p>
      </div>
      <div className="footer__nav-links">
        <p className="footer__nav-link">Home</p>
        <p className="footer__nav-link">Practicum</p>
        <img src={githubicon} className="footer__github-icon" />
        <img src={fbicon} className="footer__facebook-icon" />
      </div>
    </footer>
  );
};

export default Footer;
