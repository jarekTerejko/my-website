import React from "react";
import Hero from "../components/Hero";
import About from "../components/SectionAbout";
import Question from "../components/SectionQuestion";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const Home = () => {
  const [texts, setTexts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(texts);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setTexts(data.heroData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // return () => {
    //   cleanup
    // }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return texts ? (
    <>
      <Hero heroText={texts.heroText} />
      <About aboutText={texts.aboutText} />
      <Question />
    </>
  ) : (
    <NotFound />
  );
};

export default Home;
