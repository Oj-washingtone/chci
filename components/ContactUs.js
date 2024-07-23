import React from "react";

export default function ContactUs() {
  return (
    <div className="section contact-us-wrapper">
      <div className="container">
        <div className="section-header">
          <h3>
            <span>Talk to</span> Us
          </h3>
          <p>
            We are always ready to listen to you. Feel free to reach out to us
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contatct-form-wrapper">
              <form>
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button className="__btn " type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            {/* LOcation phone and email */}
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <i className="bi bi-geo-alt-fill"></i>
                <span>123, Main Street, Lagos, Nigeria</span>
              </div>
              <div className="contact-info">
                <i className="bi bi-telephone-fill"></i>
                <span>+234 803 123 4567</span>
              </div>
              <div className="contact-info">
                <i className="bi bi-envelope-fill"></i>
                <span>
                  <a href="mailto:jalangowashingtone@gmail.com">
                    jalangowashingtone@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
