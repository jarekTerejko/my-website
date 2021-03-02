import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { HeroHeading } from "../Hero/HeroElements";
import { ImageEl } from "../Image/ImageElement";
import { ModalCloseBtn, ModalOverlay, ModalWrapper } from "./ModalElements";
import { LinkR } from "../Link/LinkElement";
import Send from "../../images/contact/send.svg";
import X from "../../images/contact/close.svg";

const Modal = ({ closeModal }) => {
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ModalWrapper
        transition={{ delay: 0.1 }}
        initial={{ y: "-200vh" }}
        animate={{ y: 0 }}
      >
        <ModalCloseBtn onClick={closeModal}>
          <ImageEl src={X} />
        </ModalCloseBtn>
        <ImageEl src={Send} style={{ marginBottom: "2rem" }} />
        <HeroHeading>Dziękuję</HeroHeading>
        <DescriptionText>Twoja wiadomość została wysłana!</DescriptionText>
        <LinkR onClick={closeModal} to="/">
          Home
        </LinkR>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
