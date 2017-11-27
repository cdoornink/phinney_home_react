import React from "react";

export default function About() {
  return (
    <div>
      <div class="offset-content -large -center">
        <h2 className="description-header">Design Services</h2>
        <div className="offset-content -small">
          <div className="row">
            <div className="service-title col-1-2">Color consultations</div>
            <div className="service-title col-1-2">Space planning</div>
          </div>
        </div>
        <div className="offset-content -small">
          <div className="row">
            <div className="service-title col-1-2">Bathroom design</div>
            <div className="service-title col-1-2">Kitchen design</div>
          </div>
        </div>
        <div className="offset-content -small">
          <div className="row">
            <div className="service-title col-1-2">Home furnishing</div>
            <div className="service-title col-1-2">One day styling</div>
          </div>
        </div>
        <div className="offset-content -small">
          <div className="row">
            <div className="service-title col-1-2">Holiday styling</div>
          </div>
        </div>
      </div>
      <div className="offset-content -large -center contrast-box">
        <div className="description-header">
          Every project starts with a free in-home consulation!
        </div>
        <div className="description-body offset-content -small">
          We want to make sure that you feel comfortable with our vision and
          that we are the right fit for your design needs. We will come to you
          and spend an hour going over your space and what you are looking to
          do. blah blah blah. we are good!!!
        </div>
      </div>
    </div>
  );
}
