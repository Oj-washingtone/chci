import React from "react";

export default function Footer() {
  return (
    <footer className="section footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="footer--section col-md-4">
            <div className="footer--section--title">About</div>
            {/* <div className="footer--section--logo">
              <img src="/images/logo/logo.png" alt="logo" />
            </div> */}
            <div className="footer--section--about">
              <p>
                CHCI, founded in 2023 in Kochia, Homa Bay County, Kenya, is a
                Christian faith-based non-profit dedicated to serving old age
                widows, orphans, vulnerable children, and unemployed youths.
                Guided by the love of Christ, we provide hope and empowerment
                through sustainable programs, fostering a compassionate
                community rooted in Christian values.
              </p>
            </div>
          </div>
          <div className="footer--section col-md-4">
            <div className="footer--section--title">Quick Links</div>
            <div className="footer--section--links">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="/services">Our Programs</a>
                </li>
                <li>
                  <a href="/services">Donate</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer--section col-md-4">
            <div className="footer--section--title">Contact Us</div>
            <div className="footer--section--contact">
              <p>
                <span>Address:</span> P.O. Box 123, Kochia, Homa Bay County,
                Kenya
              </p>
              <p>
                <span>Phone:</span> +254 123 456 789
              </p>
              <p>
                <span>Email: </span>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="copy-right-wrapper">
            <p>
              &copy; 2024 <span>Humanity touch Charity Organization</span> All
              rights reserved
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
