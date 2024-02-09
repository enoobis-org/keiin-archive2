import React from "react";
import facebook from "../icon/face.svg";
import tel from "../icon/tel.svg";
import twit from "../icon/twit.svg";
import whats from "../icon/whats.svg";
import "./navbar.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contain">
          <ul className="footer__items">
            <li className="footer__list">
              <a href="#" className="footer__link">
                about
              </a>
            </li>
            <li className="footer__list">
              <a href="#" className="footer__link">
                contact
              </a>
            </li>
            <li className="footer__list">
              <a href="#" className="footer__link">
                document
              </a>
            </li>
            <li className="footer__list">
              <a href="#" className="footer__link">
                resource
              </a>
            </li>
          </ul>
          <div className="footer__icon">
            <a href="#" className="icon">
              <img src={facebook} alt="icons" />
            </a>
            <a href="#" className="icon">
              <img src={tel} alt="icons" />
            </a>
            <a href="#" className="icon">
              <img src={whats} alt="icons" />
            </a>
            <a href="#" className="icon">
              <img src={twit} alt="icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
