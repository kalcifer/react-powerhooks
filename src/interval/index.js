import { useEffect, useState } from "react";

export default ({ startImmediate, duration, callback }) => {
  const [count, updateCount] = useState(0);
  const [intervalState, setIntervalState] = useState(
    startImmediate === undefined ? true : startImmediate
  );
  const [intervalId, setIntervalId] = useState(null);

  useEffect(
    () => {
      if (intervalState) {
        const intervalId = setInterval(() => {
          updateCount(count + 1);
          callback && callback();
        }, duration);
        setIntervalId(intervalId);
      }

      return () => {
        if (intervalId) {
          debugger;
          clearInterval(intervalId);
          setIntervalId(null);
        }
      };
    },
    [intervalState, count]
  );
  return {
    intervalId,
    start: () => {
      console.log(intervalId);
      setIntervalState(true);
    },
    stop: () => {
      console.log(intervalId);
      setIntervalState(false);
    }
  };
};
