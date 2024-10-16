import React from "react";

export default function Gallery() {
  return (
    <div className="section gallery-wrapper">
      <div className="container">
        <div className="section-header">
          <h3>
            <span>Our photo</span> Gallery
          </h3>
          <p>
            Support pur program by donating or Volunteerin. together lets make
            our comunities better blaces
          </p>
        </div>

        <div className="row">
          <div className=" col-md-4">col 1</div>
          <div className=" col-md-4">
            <div className="row">row 1</div>
            <div className="row">row 2</div>
          </div>
          <div className=" col-md-4">
            <div className="row">row 1</div>
            <div className="row">row 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
