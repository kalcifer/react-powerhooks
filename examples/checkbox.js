import React from "react";
import useToggle from "../src/toggle";

export default ({ initialValue, children }) => {
  const [value, toggle] = useToggle(initialValue);
  return (
    <label>
      <input type="checkbox" onChange={toggle} checked={value} />
      {children}
    </label>
  );
};
