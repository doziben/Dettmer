import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/UI/Header";
import "./styles/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import routes from "./pages/routes";
import AppProvider from "./helpers/AppProvider";

import Home from "./pages/home/Home";
import Login from "./pages/validation/Login";
import Register from "./pages/validation/Register";
import Contact from "./pages/home/Contact";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
