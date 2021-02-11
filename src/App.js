import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/projets" exact component={Projects} />
          <Route path="/contact" exact component={Contact} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
