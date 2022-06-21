import React from "react";

const AppContext = React.createContext({
  headerState: "",
  showHeader: () => {},
});

export default AppContext;
