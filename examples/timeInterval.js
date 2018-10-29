import React, { Fragment, useState } from "react";
import useInterval from "../src/interval";

export default () => {
  const [time, setTime] = useState(null);
  const { start, stop } = useInterval({
    duration: 1000,
    startImmediate: false,
    callback: () => {
      setTime(new Date().toLocaleTimeString());
    }
  });

  return (
    <Fragment>
      <div>The time is now {time}</div>
      <button onClick={() => stop()}>Stop interval</button>
      <button onClick={() => start()}>Start interval</button>
    </Fragment>
  );
};
