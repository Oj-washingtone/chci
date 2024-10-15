import React from "react";

export default function Subscribe() {
  return (
    <div className="section surbscribe-section">
      <div className="container">
        <div className="section-header get-involved-section-header">
          <h3>
            <span>Get</span> Involved
          </h3>
          <p>Join hands with us to make a lasting impact. </p>
        </div>

        <div className="row">
          <div className="col-md-7">
            <h1 className="subscribe-header">How can i get get involved</h1>
            <p>
              There are many ways you can contribute to our mission and help
              create positive change in our community. Here are some options:
            </p>

            <ul className="involvement-list">
              <li>Volunteer: Join us in our events and activities.</li>
              <li>Donate: Your contributions help fund our programs.</li>
              <li>Partner: Collaborate with us for greater impact.</li>
              <li>
                Spread the Word: Share our mission with friends and family.
              </li>
              <li>Participate: Join our community events and workshops.</li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="my-form-wrapper">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Email
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Message
                  </label>

                  <textarea
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  ></textarea>
                </div>
                <button type="submit" className="get-involved-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
