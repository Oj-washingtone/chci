import React from "react";

export default function Activities() {
  return (
    <div className="section activities-wrapper">
      <div className="section-header">
        <h3>
          <span>Our</span> Programs
        </h3>
        <p>
          To kick start and sustain these initiatives, below, we outline the
          specific needs for each program and our implementation strategy.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="programs-image-wrapper">
              <div className="program-composite-image p-image-1">
                <img src="/images/events/event1.jpg" alt="activities" />
              </div>
              <div className="program-composite-image p-image-2">
                <img src="/images/b1.jpg" alt="activities" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className="activity-card">
                  <h3 className="activity-title">Support for Old Age Widows</h3>
                  <p>
                    We provide financial assistance, healthcare, and social
                    inclusion to old age widows in rural Kenya, ensuring they
                    live with dignity and hope. "Religion that God our Father
                    accepts as pure and faultless is this: to look after orphans
                    and widows in their distress." (James 1:27)
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="activity-card">
                  <h3 className="activity-title">Youth Empowerment</h3>
                  <p>
                    {" "}
                    We equip young people with IT and entrepreneurial skills to
                    foster self-reliance and create new opportunities, in line
                    with God's plans for a prosperous future. "Plans to prosper
                    you and not to harm you, plans to give you hope and a
                    future." (Jeremiah 29:11)
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="activity-card">
                  <h3 className="activity-title">School Support Program</h3>
                  <p>
                    We ensure orphans and vulnerable children have access to
                    quality education and necessary support through educational
                    supplies, scholarships, and mentorship. "Let the little
                    children come to me, for the kingdom of heaven belongs to
                    such as these." (Matthew 19:14)
                  </p>
                </div>
              </div>
            </div>
            {/* <button className="__btn __btn-primary">Get Involved</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
