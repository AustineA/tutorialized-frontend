import React from "react";

const Tech = () => (
  <ul className="tech-icons">
    {Logos.map((tech, index) => (
      <li key={index}>
        <img src={tech.icon} />
      </li>
    ))}
  </ul>
);

export default Tech;

const Logos = [
  {
    icon: "/images/XD.svg",
  },
  {
    icon: "/images/React.svg",
  },
  {
    icon: "/images/Angular.svg",
  },
  {
    icon: "/images/Vue.svg",
  },
  {
    icon: "/images/Javascript.svg",
  },
  {
    icon: "/images/Figma.svg",
  },
];
