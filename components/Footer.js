import React from "react";

export default function Footer() {
  return (
    <footer className="section footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="footer--section col-md-4">About</div>
          <div className="footer--section col-md-4">Links</div>
          <div className="footer--section col-md-4">Contact</div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="copy-right-wrapper">
            <p>
              &copy; 2024 <span>Charity</span> All rights reserved
            </p>
            <div className="footer-socials">
              <a href="#" className="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
