import React from "react";

export default function Banner() {
  return (
    <div className="barner">
      <div className="container">
        <div className="row">
          <div className="intro-wrapper">
            <h1 className="intro poppins-bold">
              Inspiring Hope, Empowering Lives
            </h1>
            <p className="poppins-regular">
              Dedicated to uplifting the underprivileged in society through
              sustainable development.
            </p>
            <button className="__btn __btn_primary">Donate Today</button>
          </div>
        </div>
      </div>
    </div>
  );
}
