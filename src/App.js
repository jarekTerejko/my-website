import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
      <Navbar
        scrolledNav={scrolledNav}
        changeNav={changeNav}
        handleMenu={handleMenu}
        isOpen={isOpen}
      />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
          <Footer />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
