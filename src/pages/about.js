import React, { useState } from "react";
import {
  FormButton,
  Section,
  SectionText,
  SectionTitle,
  HamburgerMenu,
  ButtonContainer,
  NavMenu,
  BoldText
} from "../styles/GlobalComponents";
import {
  AiOutlineArrowUp,
  AiOutlineClose,
  AiOutlineMenu,
  AiFillHome
} from "react-icons/ai";
import { Layout } from "../layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./About.module.css";
import { NavLink } from "../components/Header/HeaderStyles";
import Footer from "../components/Footer/Footer";


const About = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ButtonContainer>
        <FormButton
          style={{ borderRadius: "50%", padding: "20px 24px", margin: "30px" }}
          onClick={() => router.push("/")}
        >
          <AiFillHome />
        </FormButton>
        <HamburgerMenu
          style={{ padding: "12px 24px", margin: "30px", alignItems: "right" }}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <AiOutlineClose size="3rem" />
          ) : (
            <AiOutlineMenu size="3rem" />
          )}
        </HamburgerMenu>
      </ButtonContainer>

      <NavMenu isOpen={isOpen}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="#footer">Socials</a>
          </li>
        </ul>
      </NavMenu>
      <Section>
        <div className={styles.photoContainer}>
          <img
            src="/images/me.jpeg"
            alt="Description of image"
            className={styles.photo}
          />
        </div>

        <SectionText>
          <BoldText>Hi again! I’m Divya.</BoldText>
          <br />
          <br />
          A passionate full-stack software developer with a knack for
          transforming ideas into innovative, user-friendly web applications.
          <br />
          <br />
          With over a year of professional experience, I specialize in crafting
          clean, scalable, and efficient solutions using modern technologies
          like Python, Java, JavaScript, React, and Node.js. My journey has been
          enriched by working on impactful fintech projects that challenge me to
          think critically, innovate, and deliver value.
          <br />
          <br />
          I thrive in collaborative environments that inspire creativity and
          problem-solving. My commitment to continuous growth keeps me engaged
          with the latest advancements in web development, cloud technologies,
          and industry best practices.
          <br />
          <br />
          When I’m not coding, you’ll likely find me trekking scenic trails,
          contributing to open-source projects, or indulging in artistic
          pursuits like painting. These passions fuel my creativity and drive
          for excellence.
          <br />
          <br />
          Take a moment to explore my portfolio to see my work and personal
          projects. If you’re looking for someone to collaborate with or simply
          want to connect, feel free to reach out. I’d be thrilled to hear from
          you! ♡
        </SectionText>
      </Section>
      <FormButton
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          padding: "20px 24px",
          margin: "0",
          zIndex: 1000,
        }}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp />
      </FormButton>

      <Footer/>
    </>
  );
};

export default About;
