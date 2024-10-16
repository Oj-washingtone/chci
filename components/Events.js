import React from "react";

export default function Events() {
  return (
    <div id="events" className="section events-wrapper">
      <div className="container">
        <div className="section-header">
          <h3>
            <span>Upcoming</span> Events
          </h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="event">
              <div className="event-image">
                <div className="event-date">
                  <h1>Dec 12</h1>
                </div>
                <img src="/images/events/event1.jpg" alt="event" />
              </div>
              <div className="event-details">
                <h4 className="event-title">Tree Planting</h4>
                <p>
                  Join us as we come together to plant trees and promote
                  environmental sustainability. Let's make a lasting impact by
                  improving our community and contributing to a greener future!
                </p>
              </div>

              <div className="event-footer">
                <a href="#" className="">
                  Read more <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="event ">
              <div className="event-date">
                <h1>Dec 12</h1>
              </div>
              <div className="event-image">
                <img src="/images/events/event2.jpg" alt="event" />
              </div>

              <div className="event-details">
                <h4 className="event-title">Community Clean Up</h4>
                <p>
                  Help us beautify our community! Join our cleanup event to
                  remove waste, improve public spaces, and promote a cleaner,
                  healthier environment for everyone. Together, we can make a
                  difference!
                </p>
              </div>

              <div className="event-footer">
                <a href="#" className="">
                  Read more <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="event ">
              <div className="event-date">
                <h1 className="event-title">Dec 12</h1>
              </div>

              <div className="event-image">
                <img src="/images/events/event3.jpg" alt="event" />
              </div>
              <div className="event-details">
                <h4 className="event-title">Tree Seedling Preparation</h4>
                <p>
                  Be part of our tree seedling preparation event! Join us as we
                  prepare and nurture seedlings for future planting. Together,
                  we can contribute to reforestation efforts and ensure a
                  greener tomorrow.
                </p>
              </div>
              <div className="event-footer">
                <a href="#" className="">
                  Read more <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
