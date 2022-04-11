import { FOOTER_PARAGRAPH } from "../../../utils/constants";
import logo from "../../../images/logo.svg";
import logoTitle from "../../../images/logoTitle.svg";
import facebook from "../../../images/facebook.svg";
import twitter from "../../../images/twitter.svg";
import linkedin from "../../../images/linkedin.svg";
import instagram from "../../../images/instagram.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Footer() {
  const language = useSelector((state) => state.language.language);
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright-container">
          <div className="footer__logos-container">
            <img src={logo} alt="logo dorus" className="footer__logo" />
            <img
              src={logoTitle}
              alt="logo dorus"
              className="footer__logo-title"
            />
          </div>
          <p className="footer__copyright">&copy; 2020-2021 Dorus</p>
        </div>
        <p className="footer__paragraph">
          {FOOTER_PARAGRAPH[language]}{" "}
          <mark className="footer__paragraph-decoration">back less than</mark>{" "}
          you <mark className="footer__paragraph-decoration">invested</mark>
        </p>
        <ul className="footer__social-container">
          <li>
            <Link to="#" className="footer__social-link">
              <img src={facebook} alt="" className="footer__social-image" />
            </Link>
          </li>
          <li>
            <Link to="#" className="footer__social-link">
              <img src={twitter} alt="" className="footer__social-image" />
            </Link>
          </li>
          <li>
            <Link to="#" className="footer__social-link">
              <img src={linkedin} alt="" className="footer__social-image" />
            </Link>
          </li>
          <li>
            <Link to="#" className="footer__social-link">
              <img src={instagram} alt="" className="footer__social-image" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
