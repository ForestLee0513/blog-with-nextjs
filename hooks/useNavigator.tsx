import { useEffect, useState } from "react";

const useNavigator = () => {
  const [navigatorState, setNavigatorState] = useState({} as Navigator);

  useEffect(() => {
    if (!navigator) return;

    setNavigatorState(navigator);
  }, []);

  return navigatorState;
};

export default useNavigator;
