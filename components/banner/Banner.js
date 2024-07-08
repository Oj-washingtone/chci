import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-7 intro-statement-wrapper">
            <h1>Changing Lives with Love</h1>
            <p>
              Dedicated to uplifting widows, orphans, and youths through
              compassion and sustainable development.
            </p>
            <div className="actions">
              <button className="__btn __btn-primary">Donate</button>
              <button className="__btn __btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
