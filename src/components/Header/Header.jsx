import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"; // Make sure to create a corresponding CSS file

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-icon">
          {/* Your icon image goes here */}
          <img src="path-to-your-icon.png" alt="App Icon" />
        </Link>
      </div>
      <div className="nav-right">
        <div className="dropdown">
          <button
            className="dropbtn"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Recipes
          </button>
          {dropdown && (
            <div
              className="dropdown-content"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link to="/recipes/breakfast">Breakfast</Link>
              <Link to="/recipes/dinner">Dinner</Link>
              <Link to="/recipes/lunch">Lunch</Link>
              <Link to="/recipes/smoothies">Smoothies</Link>
              <Link to="/recipes/snacks">Snacks</Link>
            </div>
          )}
        </div>
        <Link to="/meal-plan" className="nav-link">
          Meal Plan
        </Link>
      </div>
    </nav>
  );
};

export default Header;
