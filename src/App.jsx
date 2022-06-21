import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AppProvider from "./helpers/AppProvider";

import Home from "./pages/home/Home";
import Login from "./pages/validation/Login";
import Register from "./pages/validation/Register";

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </AppProvider>
  );
}

export default App;
