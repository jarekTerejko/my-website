import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/SectionAbout";
import Question from "../components/SectionQuestion";
import Loader from "../components/Loader";

const Home = () => {
  const [texts, setTexts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      {isLoading ? <Loader /> : null}
      {texts ? (
        <>
          <Hero heroText={texts.heroText} />
          <About aboutText={texts.aboutText} />
          <Question />
        </>
      ) : null}
    </>
  );
};

export default Home;
