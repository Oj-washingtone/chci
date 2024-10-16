import React from "react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div id="gallery" className="section gallery-wrapper">
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
          <div className=" col-md-4">
            <div className="row">
              <div className="galerry-image image-1">
                <img
                  src="/images/gallery/close-up-view-person-washing-hands_23-2148777494.jpg"
                  alt="gallery"
                />
              </div>
            </div>
            <div className="row">
              <div className="galerry-image image-1">
                <img src="/images/events/event3.jpg" alt="gallery" />
              </div>
            </div>
          </div>
          <div className=" col-md-4">
            <div className="row">
              <div className="galerry-image">
                <img
                  src="/images/gallery/group-people-sit-front-machine-that-says-h_1262781-52644.jpg"
                  alt="gallery"
                />
              </div>
            </div>
            <div className="row">
              <div className="galerry-image">
                <img
                  src="/images/gallery/group-people-sit-front-machine-that-says-h_1262781-52644.jpg"
                  alt="gallery"
                />
              </div>
            </div>
          </div>
          <div className=" col-md-4">
            <div className="row">
              <div className="galerry-image">
                <img
                  src="/images/gallery/group-smiling-laughing-african-american-kids-with-happy-expression-png_1296627-5935.jpg"
                  alt="gallery"
                />
              </div>
            </div>
            <div className="row">
              <div className="galerry-image">
                <img
                  src="/images/gallery/promoting-use-clean-water-hygiene-ar-generative-ai_1169648-117898.avif"
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
