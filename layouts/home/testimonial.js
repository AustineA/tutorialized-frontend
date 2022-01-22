import React from "react";
import HeadingCta from "../../components/headingCta";
import Testimonies from "../../components/testimonyCard";

const Testimonial = () => (
  <div className="testimonial-container">
    <div className="testimonial-body">
      <HeadingCta
        title="Over 5,000 people took our courses"
        subtitle="See what they are saying about us. You too can be part of our community of designers and developers."
      />
      <Testimonies />
    </div>
  </div>
);

export default Testimonial;
