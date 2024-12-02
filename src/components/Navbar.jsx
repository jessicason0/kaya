import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="wrapper">
        <nav className="navbar__content">
          <a href="#home">
            <div className="navbar__logo">
              <div className="navbar__logo-img">
                <img
                  src="data:image/png;base64,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"
                  alt="Kaya Logo"
                />
              </div>
              <div className="navbar__name">
                <div>KAYA</div>
                <div>GARDEN</div>
              </div>
            </div>
          </a>
          <ul className="navbar__links">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#menu">MENU</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#location">LOCATION</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
