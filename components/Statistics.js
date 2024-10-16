import React from "react";

export default function Statistics() {
  return (
    <div className="section statistics-wrapper">
      <div className="container">
        <h2 className="statistics-header">
          We are dedicated to creating a lasting impact
        </h2>
        <div className="row impact-wrapper">
          {[
            { number: "1000+", label: "Children Supported" },
            { number: "10+", label: "Events Held" },
            { number: "500+", label: "Trees Planted" },
            { number: "10+", label: "Widows Supported" },
          ].map((stat, index) => (
            <div key={index} className="col-md-3">
              <div className="statistic">
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
