import { motion } from "framer-motion";
import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 6rem;
`;

export const NotFoundContent = styled.div`
  margin-top: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 550px) {
    margin-top: 10rem;
  }
`;

export const NotFoundHeading = styled.h1`
  margin-bottom: 3rem;
  font-size: 5rem;
  max-width: 50rem;
  text-align: center;

  @media screen and (max-width: 550px) {
    font-size: 3rem;
  }
`;
