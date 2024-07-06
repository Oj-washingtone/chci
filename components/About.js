import React from "react";

export default function About() {
  return (
    <div className="about-wrapper section ">
      <div className="container">
        {/* Two columns */}
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              Our mission is to provide the best possible experience for our
              customers. We strive to provide the best service and the best
              products to our customers. We are committed to providing the best
              possible experience for our customers.
            </p>

            <button className="__btn __btn_secondary">Learn More</button>
          </div>
          <div className="col-md-6">
            <div className="about-image-wrapper">
              <img src="images/b1.jpg" alt="About us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
