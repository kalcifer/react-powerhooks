import { useEffect, useState } from "react";

//initial={{ sounds: true, music: true, graphics: 'medium' }}

export default initial => {
  const [mapValue, setMapValue] = useState(() => initial);

  return {
    values: mapValue,
    clear: () => setMapValue({}),
    reset: () => setMapValue(initial),
    set: (key, updater) => {
      setMapValue(prev => ({
        ...prev,
        [key]: typeof updater === "function" ? updater(prev[key]) : updater
      }));
    },
    get: key => mapValue[key],
    has: key => mapValue[key] != null,
    delete: key => setMapValue(({ [key]: deleted, ...prev }) => prev)
  };
};
