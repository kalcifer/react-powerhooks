import { useEffect, useState, useCallback } from "react";

export default ({ startImmediate, time, cb }) => {
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
          cb();
        }, time);
        setIntervalId(intervalId);
      }

      return () => {
        if (intervalId) {
          setIntervalId(null);
          clearInterval(intervalId);
        }
      };
    },
    [intervalState, intervalId]
  );
  return {
    start: useCallback(() => {
      setIntervalState(true);
    }),
    stop: useCallback(() => {
      setIntervalState(false);
    })
  };
};
