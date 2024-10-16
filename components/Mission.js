import React from "react";

export default function Mission() {
  return (
    <div className="mission-vision-wrapper">
      <div className="container">
        <div className="row mv-sections-wrapper">
          <div className="col-md-6">
            <div className="mv-image-wrapper">
              <img
                src="/images/events/event1.jpg"
                alt="Community"
                className="mv-image main-image"
              />
              <img
                src="/images/gallery/promoting-use-clean-water-hygiene-ar-generative-ai_1169648-117898.avif"
                alt="Children"
                className="mv-image sub-image"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mv-content-wrapper">
              <div className="mv-section">
                <h2 className="mv-section-header">Mission</h2>
                <p className="mv-description">
                  To demonstrate the love of Christ by empowering vulnerable
                  members of our community through compassionate care,
                  education, and sustainable development initiatives.
                </p>
              </div>
              <div className="mv-section">
                <h2 className="mv-section-header">Vision</h2>
                <p className="mv-description">
                  To create a compassionate and self-reliant community where
                  every individual, regardless of their circumstances, can
                  thrive and experience the love and support of their neighbors,
                  reflecting the teachings of Jesus Christ.
                </p>
              </div>
              <div className="mv-section">
                <h2 className="mv-section-header">Core Values</h2>
                <p className="mv-description">
                  A world where widows, orphans, and youths are empowered to
                  live a life of dignity and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
