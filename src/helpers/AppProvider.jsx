import AppContext from "./AppContext";
import { useState } from "react";

export default function AppProvider(props) {
  const [headerState, setHeaderState] = useState(true);

  const headerHandler = (props) => {
    return setHeaderState(props);
  };

  return (
    <AppContext.Provider
      value={{
        headerState: headerState,
        showHeader: headerHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
