import React, { useRef } from "react";
import useActive from "../src/active";

export default ({ onChange }) => {
  const ref = useRef(null);
  const activeValue = useActive({
    refEl: ref,
    onChange
  });
  return <div ref={ref}>Is this active? {activeValue.toString()}</div>;
};
