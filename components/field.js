import React from "react";

const Field = fields => {
  return fields.map(({ type, name, placeholder, event }, index) => {
    <input
      key={name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={event}
    />;
  });
};

export default Field;
