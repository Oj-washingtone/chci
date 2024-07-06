import React from "react";

export default function Programs() {
  return (
    <div className=" programs-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="poppins-bold">Our Programs</h2>
            <p className="poppins-regular">
              Our programs are designed to uplift the underprivileged in society
              through sustainable development.
            </p>

            <div className="row">
              <div className="col-md-4">
                <div className="program-card">
                  <img src="images/b1.jpg" alt="Program" />
                  <h3 className="poppins-bold">Education</h3>
                  <p className="poppins-regular">
                    We provide education to children in need.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="program-card">
                  <img src="images/b1.jpg" alt="Program" />
                  <h3 className="poppins-bold">Education</h3>
                  <p className="poppins-regular">
                    We provide education to children in need.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="program-card">
                  <img src="images/b1.jpg" alt="Program" />
                  <h3 className="poppins-bold">Education</h3>
                  <p className="poppins-regular">
                    We provide education to children in need.
                  </p>
                </div>
              </div>
            </div>
            <button className="__btn __btn_primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
