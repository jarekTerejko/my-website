import ProjectDetails from "../components/ProjectDetails";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Project = () => {
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ProjectDetails />
        <Footer />
      </motion.div>
    </>
  );
};

export default Project;
