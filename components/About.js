import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="about-wrapper section">
        <div className="container">
          <div className="row">About</div>
          <div className="row">
            <h1 className="poppins-bold section-title">
              Helping people in need around the world
            </h1>

            <p className="poppins-regular">
              We are a non-profit organization that is dedicated to uplifting
              underprivileged in the society through sustainable development.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="sub-section">
                <h3 className="section-subtitle poppins-bold">
                  <span className="title-part ">Our</span>
                  Mission
                </h3>
                <p className="poppins-regular">
                  Our mission is to provide sustainable development to
                  underprivileged communities around the world.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sub-section">
                <h3 className=" section-subtitle poppins-bold">
                  <span className="title-part">Our</span> Vision
                </h3>
                <p className="poppins-regular">
                  Our vision is to create a world where everyone has access to
                  basic necessities of life.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sub-section">
                <h3 className=" section-subtitle poppins-bold">
                  <span className="title-part">Our</span> Values
                </h3>
                <p className="poppins-regular">
                  Our values are integrity, respect, and compassion for all
                  people.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="summary-item">images here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
