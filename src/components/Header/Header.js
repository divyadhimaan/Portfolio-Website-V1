import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { NavMenu } from "../../styles/GlobalComponents";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  HamburgerMenu,
} from "./HeaderStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Div1>
        {/* <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="4rem" />
            <Span>Portfolio</Span>
          </a>
        </Link> */}

        <Link href="/" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="4rem" />
            <Span>Portfolio</Span>
          </div>
        </Link>
      </Div1>

      <HamburgerMenu style={{alignItems: "center",}} onClick={toggleMenu}>
        {isOpen ? (
          <>
            <AiOutlineClose size="3rem" />
          </>
        ) : (
          <AiOutlineMenu size="3rem" />
        )}
      </HamburgerMenu>
      <NavMenu isOpen={isOpen}>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </NavMenu>
      <Div2>
        <li>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      {/* <Div2>
        <SocialIcons
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dhimandivya713@gmail.com"
          target="_blank"
        >
          <AiFillMail size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/u/divyadhimaan/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/divyadhimaan" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/divya-dhiman/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://drive.google.com/uc?export=download&id=1Tt9SvMFmfwqWacJjwIL2NGXhtZHdxIE4">
          <IoDocumentAttach size="3rem" />
        </SocialIcons>
      </Div2> */}
    </Container>
  );
};
export default Header;
