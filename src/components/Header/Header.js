import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { IoDocumentAttach } from "react-icons/io5";

import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    {/* <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2> */}
    <Div2>
      <SocialIcons
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dhimandivya713@gmail.com"
        target="_blank"
      >
        <AiFillMail size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/divyadhimaan">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/divya-dhiman/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/uc?export=download&id=17ImDETV1GuhI3PAiM36_N-M7rYcV8MZw">
        <IoDocumentAttach size="3rem" />
      </SocialIcons>
    </Div2>
  </Container>
);

export default Header;
