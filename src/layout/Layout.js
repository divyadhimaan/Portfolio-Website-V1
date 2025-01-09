import React from "react";
import { FormButton } from "../styles/GlobalComponents";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Layout = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <FormButton
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          padding: "20px 24px",
          margin: "0",
          zIndex: 1000,
          opacity: "70%"
        }}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp />
      </FormButton>
      <Footer />
    </Container>
  );
};
