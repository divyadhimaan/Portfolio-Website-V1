import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { IoDocumentAttach } from "react-icons/io5";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7888304878">7888304878</LinkItem>
        </LinkColumn> */}
        {/* <LinkColumn>
          <LinkTitle>Personal Email</LinkTitle>
          <LinkItem href="mailto:dhimandivya713@gmail.com">
            dhimandivya713@gmail.com
          </LinkItem>
        </LinkColumn> */}
        {/* <LinkColumn>
          <LinkTitle>Institute Email</LinkTitle>
          <LinkItem href="mailto:ddhiman_be19@thapar.edu">
            ddhiman_be19@thapar.edu
          </LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <AiOutlineCopyrightCircle /> Divya Dhiman. All rights reserved. 2024
            v1.3
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
