import React from "react";

export default function Subscribe() {
  return (
    <div className="section surbscribe-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="subscribe-header">Subscribe to our newsletter</h1>
            <p>
              Don't miss out on our events, activities and causes. Subscribe to
              our newsletter and stay updated on our communitment to make the
              world a better place.
            </p>
          </div>
          <div className="col-md-5">
            <div className="subscribe-form">
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
