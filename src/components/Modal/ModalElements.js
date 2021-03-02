import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  padding: 3rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const ModalWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-very-light-gray);
  text-align: center;
  padding: 5rem 3rem;
  box-shadow: 0px 0px 30px 1px var(--color-light-gray);
`;

export const ModalCloseBtn = styled.button`
  border: none;
  background: var(--color-grayish-dark-blue);
  padding: 0.5rem;
  border-radius: 50%;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  outline: none;
`;
