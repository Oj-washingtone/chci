import React from "react";
import "@/styles/header.css";

export default function Header() {
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
            <div className="logo">logo</div>
            <div className="nav">
              <ul>
                <li>
                  <a href="/" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/gallery">Events</a>
                </li>

                <li>
                  <a href="/gallery">Blog</a>
                </li>
              </ul>
            </div>

            <button className="get-intouch">Get intouch</button>
          </div>
        </div>
      </div>
    </header>
  );
}
