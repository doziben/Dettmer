import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/UI/Header";
import Test from "./components/estate/test";

import routes from "./pages/routes";
import AppProvider from "./helpers/AppProvider";

import Home from "./pages/home/Home";
import Login from "./pages/validation/Login";
import Register from "./pages/validation/Register";
import Contact from "./pages/home/Contact";

function App() {
  return (
    <Header>
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

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AppProvider>
    </Header>
  );
}

export default App;
