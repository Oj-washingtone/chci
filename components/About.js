import React from "react";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="about-section-header __title_show_small">
          <h1>
            Our <span>Story</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6 about-image-wrapper">
            <div className="composite-image-wrapper">
              <div className="image-wrapper-inner">
                <div className="about-composite-image about-composite-image-1">
                  <img src="/images/about/about1.jpg" alt="about" />
                </div>
                <div className="about-composite-image about-composite-image-2">
                  <img src="/images/events/event1.jpg" alt="about" />
                </div>
              </div>

              <div className="image-wrapper-inner-2">
                <div className="about-composite-image about-composite-image-3">
                  <img src="/images/about/about1.jpg" alt="about" />
                </div>
                <div className="about-composite-image about-composite-image-4"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 about-details-wrapper">
            <div className="about-section-header  __title_show_large">
              <h1>
                Our <span>Story</span>
              </h1>
            </div>

            <p className="__our_story_p">
              Founded in 2023 in Kochia, Homa Bay County, Kenya, CHCI is a
              faith-based, non-profit organization rooted in Christian values
              and teachings. Inspired by the love and compassion of Jesus
              Christ, we are committed to serving the most vulnerable members of
              our community—old age widows, orphans, vulnerable children, and
              unemployed youths. Driven by a biblical mandate, we aim to provide
              hope, support, and empowerment through sustainable programs. At
              CHCI, we strive to reflect true faith through our actions,
              creating a compassionate and caring community where everyone can
              experience the love of Christ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
