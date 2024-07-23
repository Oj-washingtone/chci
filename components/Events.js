import React from "react";

export default function Events() {
  return (
    <div className="section events-wrapper">
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
                <h4 className="event-title">Event Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <h4 className="event-title"> Event Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <h4 className="event-title">Event Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
