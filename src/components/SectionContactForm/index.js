import React, { useState } from "react";
import { HeroHeading } from "../Hero/HeroElements";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  ContactFormColLeft,
  ContactFormColRight,
  ContactFormCols,
  ContactFormErrorMsg,
  ContactFormLabel,
  ContactFormRow,
  ContactFormTextarea,
  ContactFormTextInput,
  ContactFormWrapper,
  ContactFormEl,
  ContactFormSubmitBtn,
  ChevronsRightIcon,
} from "./SectionFormElements";
import ChevronsIcon from "../../images/contact/chevrons-right.svg";
const ContactForm = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    email: "",
    msg: "",
  });
  const [isSubmited, setIsSubmited] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleInputChange = (e) => {
    if (isSubmited) {
      setIsSubmited(false);
    }
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const isMailValid = (email) => {
    return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
      email
    );
  };

  const clearInputs = () => {
    setInputValues({
      firstName: "",
      email: "",
      msg: "",
    });
  };

  const handleSubmit = (e) => {
    setIsSubmited(true);
    if (
      !inputValues.firstName ||
      !inputValues.email ||
      !inputValues.msg ||
      !isMailValid(inputValues.email)
    ) {
      e.preventDefault();
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...inputValues }),
      }).catch((error) => alert(error));

      e.preventDefault();
      setIsSubmited(false);
      clearInputs();
    }
  };

  return (
    <ContactFormWrapper>
      <WrapperEl>
        <ContactFormCols>
          <ContactFormColLeft>
            <HeroHeading as="h2">Kontakt</HeroHeading>
          </ContactFormColLeft>
          <ContactFormColRight>
            <ContactFormEl onSubmit={handleSubmit}>
              <ContactFormRow>
                <ContactFormLabel htmlFor="firstName">Imię</ContactFormLabel>
                <ContactFormTextInput
                  type="text"
                  name="firstName"
                  value={inputValues.firstName}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="John Doe"
                />
                {isSubmited && !inputValues.firstName && (
                  <ContactFormErrorMsg>
                    To pole nie może pozostać puste
                  </ContactFormErrorMsg>
                )}
              </ContactFormRow>
              <ContactFormRow>
                <ContactFormLabel htmlFor="email">Email</ContactFormLabel>
                <ContactFormTextInput
                  type="text"
                  name="email"
                  value={inputValues.email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="email@examle.com"
                />
                {isSubmited && !inputValues.email && (
                  <ContactFormErrorMsg>
                    To pole nie może pozostać puste
                  </ContactFormErrorMsg>
                )}
                {isSubmited &&
                  inputValues.email &&
                  !isMailValid(inputValues.email) && (
                    <ContactFormErrorMsg>
                      Sprawdź poprawność podanego adresu email
                    </ContactFormErrorMsg>
                  )}
              </ContactFormRow>
              <ContactFormRow>
                <ContactFormLabel htmlFor="msg">Wiadomość</ContactFormLabel>
                <ContactFormTextarea
                  value={inputValues.msg}
                  onChange={(e) => handleInputChange(e)}
                  name="msg"
                  placeholder="Jak mogę pomóc?"
                ></ContactFormTextarea>
                {isSubmited && !inputValues.msg && (
                  <ContactFormErrorMsg>
                    To pole nie może pozostać puste
                  </ContactFormErrorMsg>
                )}
              </ContactFormRow>
              <ContactFormSubmitBtn type="submit" as="button">
                Wyślij
                <ChevronsRightIcon src={ChevronsIcon} />
              </ContactFormSubmitBtn>
            </ContactFormEl>
          </ContactFormColRight>
        </ContactFormCols>
      </WrapperEl>
    </ContactFormWrapper>
  );
};

export default ContactForm;
