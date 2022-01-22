import React from "react";
import Heading from "../../components/heading";
import Button from "../../components/button";
import Guides from "../../components/guideCard";

const GuideSection = () => (
  <div className="guide-section">
    <div className="inner-body">
      <Heading
        title="Guides"
        subtitle="How to setup your development environment, and more…"
      />
      <Guides />
      <Button title="More  guides" link="/guides" />
    </div>
  </div>
);

export default GuideSection;
