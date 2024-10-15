import React from "react";

export default function Statistics() {
  return (
    <div className="section statistics-wrapper">
      <div className="container">
        <h2 className="statistics-header">
          We are dedicated to creating a lasting impact
        </h2>
        <div className="row impact-wrapper">
          <div className="col-md-3">
            <div className="statistic">
              <h2>1000+</h2>
              <p>Children Supported</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statistic">
              <h2>10+</h2>
              <p>Events Held</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statistic">
              <h2>500+</h2>
              <p>Trees Planted</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="statistic">
              <h2>10+</h2>
              <p>Widows Supported</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
