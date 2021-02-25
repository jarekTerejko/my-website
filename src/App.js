import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolledNav, setScrolledNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  return (
    <>
      <Router>
        <Navbar
          scrolledNav={scrolledNav}
          changeNav={changeNav}
          handleMenu={handleMenu}
          isOpen={isOpen}
        />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/project/:id" exact>
            <Project />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
