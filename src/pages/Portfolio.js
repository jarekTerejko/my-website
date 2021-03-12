import React, { useEffect, useState } from "react";
import { dataProjects } from "../data";
import Projects from "../components/Projects";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [portfolioProjects, setPortfolioProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true)
    setPortfolioProjects(dataProjects);
    setIsLoading(false);
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
      x: "-100vw",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {portfolioProjects ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Projects portfolioProjects={portfolioProjects} />
        </motion.div>
      ) : null}
    </>
  );
};

export default Portfolio;
