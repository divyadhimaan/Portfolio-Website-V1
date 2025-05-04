import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
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
    <FooterWrapper id="footer">
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
            2024 v1.4 Divya Dhiman. Template is free to use.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dhimandivya713@gmail.com"
            target="_blank"
          >
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/u/divyadhimaan/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/divyadhimaan" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/divya-dhiman/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://drive.google.com/uc?export=download&id=1Tt9SvMFmfwqWacJjwIL2NGXhtZHdxIE4">
            <IoDocumentAttach size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
