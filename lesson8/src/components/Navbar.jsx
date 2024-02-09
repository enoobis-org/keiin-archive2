import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="menu">
          <div className="menu__logo">
            <a href="https://chat.openai.com/auth/login" target="_blank">
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png"
                alt="logo-gpt"
              />
            </a>
          </div>
          <ul className="menu__items">
            <li className="menu__list">
              <a href="#" className="menu__link">
                About Us
              </a>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link">
                Shop
              </a>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link">
                Blog
              </a>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link">
                Diary
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
