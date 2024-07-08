import React from "react";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Some catchy statement</h1>
            <p>Some very nice statements</p>
            <button>Learn More</button>
          </div>
          <div className="col-md-6">
            <img src="/images/nextjs.png" alt="Next.js" />
          </div>
        </div>
      </div>
    </div>
  );
}
