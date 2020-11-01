import { useState } from "react";

export const useHoverIcon = (inicialState) => {
  const [booleanValue, setBoolean] = useState(inicialState);

  const changeBooleanValue = () => {
    setBoolean(!booleanValue);
  };

  return [booleanValue, changeBooleanValue];
};
