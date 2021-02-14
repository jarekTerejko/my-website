import React from 'react'
import Hero from "../components/Hero";
import About from "../components/SectionAbout";
import Question from "../components/SectionQuestion";

const Home = ({ scrolledNav }) => {
  return (
    <>
      <Hero scrolledNav={scrolledNav} />
      <About />
      <Question />
    </>
  );
};

export default Home;
