import React, { useEffect, useState } from "react";
import { dataProjects } from "../data";
import Projects from "../components/Projects";
import Loader from "../components/Loader";

const Portfolio = () => {
  const [portfolioProjects, setPortfolioProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPortfolioProjects(dataProjects);
    setIsLoading(!isLoading);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {portfolioProjects ? (
        <Projects portfolioProjects={portfolioProjects} />
      ) : null}
    </>
  );
};

export default Portfolio;
