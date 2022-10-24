import { useState } from "react";

type useToggleType = [boolean, () => void];

const useToggle = (initializeValue?: boolean): useToggleType => {
  const [state, setState] = useState<boolean>(initializeValue ?? false);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

export default useToggle;
