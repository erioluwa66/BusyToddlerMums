import "./Footer.scss";
import busytoddlermumlogo from "../../assets/logos/YummytoddlerMum.svg";
import facebook from "../../assets/icons/Icon-facebook.png";
import instagram from "../../assets/icons/Icon-instagram.png";
import twitter from "../../assets/icons/Icon-twitter.png";
import Linkedin from "../../assets/icons/icon-linkedin.png"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <Link to="/">
          <img
            className="footer__logo"
            src={busytoddlermumlogo}
            alt="busytoddlermum-logo"
          />
        </Link>
        <h3 className="footer__text">
          Discover a treasure trove of toddler-approved meals, designed to be
          nutritious and fun.
        </h3>
      </div>
      <div className="footer__bottom">
        <div className="footer__social">
          <Link to="https://www.instagram.com/">
            <img
              className="footer__social--icon"
              src={instagram}
              alt="instagram"
            />
          </Link>
          <Link to="https://www.facebook.com/">
            <img
              className="footer__social--icon"
              src={facebook}
              alt="facebook"
            />
          </Link>
          <Link to="https://www.twitter.com/">
            <img className="footer__social--icon" src={twitter} alt="twitter" />
          </Link>
          <Link to="https://www.linkedin.com/">
            <img
              className="footer__social--icon"
              src={Linkedin}
              alt="linkedin"
            />
          </Link>
        </div>
        <div>
          <h3 class="footer__copyright">
            © 2024 Busy Toddler Mum All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Footer;
