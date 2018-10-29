import React, { Fragment } from "react";
import useInterval from "../src/interval";

export default ({ startImmediate = true, time = 1000 }) => {
  const { start, stop } = useInterval({ time, startImmediate });
  return (
    <Fragment>
      <div>The time is now {new Date().toLocaleTimeString()}</div>
      <button onClick={() => stop()}>Stop interval</button>
      <button onClick={() => start()}>Start interval</button>
    </Fragment>
  );
};
