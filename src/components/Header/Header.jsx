import "./Header.scss";
import busytoddlermumlogo from "../../assets/logos/YummytoddlerMum.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isRecipesPage = location.pathname.startsWith("/Recipes");
  const isMealPlanPage = location.pathname.startsWith("/Meal-plan");
  const isRootPath = location.pathname === "/";
  const isHomePage = isRootPath;

  return (
    <header className="header">
      <div className="header__content-main-wrap">
        <Link to="/" className="header-logo-link">
          <img
            className="header__logo"
            src={busytoddlermumlogo}
            alt="busytoddlermum-logo"
          />
        </Link>
        <nav className="header__nav">
          <ul className="header-list">
            <li className="header-list__item">
              <Link
                to="/"
                className={`header-list__link ${
                  isHomePage || isRootPath ? "header-list__link--active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="header-list__item">
              <Link
                to="/recipes"
                className={`header-list__link ${
                  isRecipesPage ? "header-list__link--active" : ""
                }`}
              >
                Recipes
              </Link>
            </li>
            <li className="header-list__item">
              <Link
                to="/meal-plan"
                className={`header-list__link ${
                  isMealPlanPage ? "header-list__link--active" : ""
                }`}
              >
                Meal-plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
