import React from "react";

const Button = ({ title, link }) => (
  <a className="btn-gradient" href={link}>
    <div>{title}</div>
  </a>
);
export default Button;
