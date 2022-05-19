import { motion } from "framer-motion";
import Lottie from "lottie-web";
import { useEffect } from "react";
import NotFoundAnimation from "../../images/404/42969-404-error-cat.json";
import { WrapperEl } from "../Wrapper/WrapperElement";
import { LinkR } from "../Link/LinkElement";
import {
  NotFoundWrapper,
  NotFoundHeading,
  NotFoundContent,
} from "../NotFound/NotFoundElements";

const NotFound = () => {
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.querySelector(".animation-container"),
      animationData: NotFoundAnimation,
      loop: false,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <>
      <NotFoundWrapper>
        <WrapperEl>
          <NotFoundContent>
            <div className="animation-container"></div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
              }}
            >
              <NotFoundHeading>Taka strona nie istnieje</NotFoundHeading>
              <LinkR to="/">Start</LinkR>
            </motion.div>
          </NotFoundContent>
        </WrapperEl>
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
