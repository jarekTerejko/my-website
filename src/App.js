import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

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
            <Home scrolledNav={scrolledNav} />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          {/* <Route path="/contact" exact component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
