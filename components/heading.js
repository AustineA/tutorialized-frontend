import React from "react";

const Heading = ({ title, subtitle }) => (
  <div className="heading-holder">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

export default Heading;
