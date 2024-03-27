import "./Footer.scss";
import busytoddlermumlogo from "../../assets/logos/YummytoddlerMum.svg";
import facebook from "../../assets/icons/Icon-facebook.png";
import instagram from "../../assets/icons/Icon-instagram.png";
import twitter from "../../assets/icons/Icon-twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div>
        <Link to="/">
          <img
            className=""
            src={busytoddlermumlogo}
            alt="busytoddlermum-logo"
          />
        </Link>
        <p>
          Discover a treasure trove of toddler-approved meals, designed to be
          nutritious and fun.
        </p>
        <button>CONTACT US</button>
      </div>
      <div>
        <Link to="https://www.instagram.com/">
          <img className="footer-icon" src={instagram} alt="instagram" />
        </Link>
        <Link to="https://www.facebook.com/">
          <img className="footer-icon" src={facebook} alt="facebook" />
        </Link>
        <Link to="https://www.twitter.com/">
          <img className="footer-icon" src={twitter} alt="twitter" />
        </Link>
      </div>
      <h3 class="footer__copyright">© 2024 Busy Toddler Mum All Rights Reserved</h3>
    </div>
  );
}
export default Footer;
