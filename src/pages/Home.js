import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/SectionAbout";
import Question from "../components/SectionQuestion";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {texts ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ScrollToTopBtn />
          <Hero heroText={texts.heroText} />
          <About aboutText={texts.aboutText} />
          <Question />
          <Footer />
        </motion.div>
      ) : null}
    </>
  );
};

export default Home;
