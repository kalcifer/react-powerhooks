import { useEffect, useState, useCallback } from "react";

export default ({ startImmediate, time }) => {
  const [count, updateCount] = useState(0);
  const [intervalState, setIntervalState] = useState(
    startImmediate === undefined ? true : startImmediate
  );
  const [intervalId, setIntervalId] = useState(null);

  useEffect(
    () => {
      if (intervalState) {
        const intervalId = setInterval(() => updateCount(count + 1), time);
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
    intervalId,
    start: useCallback(() => {
      setIntervalState(true);
    }),
    stop: useCallback(() => {
      setIntervalState(false);
    })
  };
};
