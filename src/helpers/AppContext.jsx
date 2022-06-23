import React from "react";

const AppContext = React.createContext({
  headerState: true,
  showHeader: () => {},
});

export default AppContext;
