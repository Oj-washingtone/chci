import React from "react";

export default function Mission() {
  return (
    <div className="section mission-vision-wrapper">
      <div className="container">
        <div className="row mv-sections-wrapper">
          <div className="col-md-4">
            <div className="vision-mission mission __card mv-section">
              <h2 className="mv-section-header ">Mission</h2>
              <p>
                To demonstrate the love of Christ by empowering vulnerable
                members of our community through compassionate care, education,
                and sustainable development initiatives.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="vision-mission vision __card mv-section">
              <h2 className="mv-section-header ">Vission</h2>
              <p>
                To create a compassionate and self-reliant community where every
                individual, regardless of their circumstances, can thrive and
                experience the love and support of their neighbors, reflecting
                the teachings of Jesus Christ.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="vision-mission values __card mv-section">
              <h2 className="mv-section-header ">Core values</h2>
              <p>
                A world where widows, orphans, and youths are empowered to live
                a life of dignity and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
