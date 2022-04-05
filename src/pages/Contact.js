import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ContactForm from "../components/SectionContactForm";
import ContactIntro from "../components/SectionContactIntro";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Contact = () => {
  const [contactData, setContactData] = useState(null);
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
      setContactData(data.contactData);
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
      {contactData ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ContactIntro contactData={contactData} />
          <ContactForm />
          <Footer />
        </motion.div>
      ) : null}
    </>
  );
};

export default Contact;
