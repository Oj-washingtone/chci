import React from "react";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="/images/about.jpg" alt="About Us" />
          </div>
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique, purus eget tristique fermentum, sem eros bibendum
              tortor, nec dapibus felis augue nec odio. Sed nec quam sed nunc
              fermentum ultricies. Nullam auctor, sapien nec convallis
              consectetur, nunc libero luctus mi, vel lacinia metus nunc vel
              turpis. Sed nec quam sed nunc fermentum ultricies. Nullam auctor,
              sapien nec convallis consectetur, nunc libero luctus mi, vel
              lacinia metus nunc vel turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
