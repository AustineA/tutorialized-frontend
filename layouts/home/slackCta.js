import React from "react";
import Button from "../../components/button";
import HeadingCta from "../../components/headingCta";

const Cta = () => (
  <div className="cta-container">
    <div className="cta-body">
      <HeadingCta
        title="Get access to our secret Slack channel"
        subtitle="We’ll be hosting monthly Design and Code challenges to help you practice and build your skill."
      />
      <Button title="Get Started" link="/get-started" />
    </div>
  </div>
);

export default Cta;
