"use client";

import React, { useState } from "react";
import "@/styles/header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-top-stripe">
          <div className="container">
            <div className="header-contact">
              <span>
                <i className="bi bi-telephone-fill"></i> +234 803 123 4567
              </span>
              <span>
                <i className="bi bi-envelope-fill"></i>
                info@example.com
              </span>
            </div>
            <div className="header-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <img src="/images/logo/logo.png" alt="logo" />
            </div>
            <div className={`nav nav-large ${showMenu ? "open" : ""}`}>
              <ul>
                <li>
                  <a href="/" className="active" onClick={handleMenuItemClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" onClick={handleMenuItemClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/#programs" onClick={handleMenuItemClick}>
                    Our Programs
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={handleMenuItemClick}>
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/#events" onClick={handleMenuItemClick}>
                    Events
                  </a>
                </li>
                <li>
                  <a href="/#get-involved" onClick={handleMenuItemClick}>
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="/#gallery" onClick={handleMenuItemClick}>
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <button className="get-intouch">Contact us</button>

            <div
              className={`hamburger ${showMenu ? "ham-open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
