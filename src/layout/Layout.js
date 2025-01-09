import React, { useState, useEffect } from "react";
import { FormButton } from "../styles/GlobalComponents";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 200) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Container>
      <Header />
      <main>{children}</main>
      {showScroll && (
        <FormButton
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            padding: "20px 24px",
            margin: "0",
            zIndex: 1000,
            opacity: "70%",
          }}
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp />
        </FormButton>
      )}

      <Footer />
    </Container>
  );
};
