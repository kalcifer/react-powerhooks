import { useState, useCallback } from "react";

export default initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value), [setValue]);
  return [value, toggler];
};
