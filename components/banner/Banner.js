import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-5 intro-statement-wrapper">
            <h1>A Beacon of hope and love</h1>
            <p>
              Dedicated to uplifting widows, orphans, and youths through
              compassion and sustainable development.
            </p>
            <div className="actions">
              <button className="__btn __btn-primary">Donate</button>
              <button className="__btn __btn-secondary">Contact us</button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="banner-image-wrapper">
              <Image
                src="/images/group-smiling-laughing-african-american-kids-with-happy-expression-png_1296627-5935.png"
                alt="group-smiling laughing african kids with happy expression"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
