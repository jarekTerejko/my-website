import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { ImageEl } from "../Image/ImageElement";
import { ModalCloseBtn, ModalOverlay, ModalWrapper } from "./ModalElements";
import { LinkR } from "../Link/LinkElement";
import X from "../../images/contact/close.svg";
import Lottie from "lottie-web";
import { useEffect } from "react";
import Envelope from "../../images/contact/envelope-tick.json";
import { motion } from "framer-motion";

const Modal = ({ closeModal }) => {
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.querySelector(".envelope"),
      animationData: Envelope,
      loop: false,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <ModalOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ModalWrapper
        transition={{ delay: 0.1 }}
        initial={{ y: "-200vh" }}
        animate={{ y: 0 }}
      >
        <ModalCloseBtn onClick={closeModal}>
          <ImageEl src={X} />
        </ModalCloseBtn>
        <div className="envelope" style={{ maxWidth: 200 }}></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.5 }}
        >
          <DescriptionText>Twoja wiadomość została wysłana!</DescriptionText>
        </motion.div>
        <LinkR onClick={closeModal} to="/">
          Home
        </LinkR>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
