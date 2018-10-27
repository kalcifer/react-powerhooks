import { useState, useCallback } from "react";

export default initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(!value));
  return [value, toggler];
};
