import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import ContactIntro from "../components/SectionContactIntro";

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(contactData);

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

  if (isLoading) {
    return <Loader />;
  }

  return contactData ? 
  <>
    <ContactIntro contactData={contactData} />
  </> : <NotFound />;
};

export default Contact;
