import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from "./HeroStyles";

const Hero = () => (
  <Section row>
    <LeftSection>
      <SectionTitle center>
        Hi, I am Divya.
        <br />
        <SectionText style={{ fontWeight: "bold" }}>
          I build things for the web.
        </SectionText>
      </SectionTitle>
      <SectionText>
        I'm a software engineer specializing in building exceptional digital
        experiences. I'm a Web Developer. <br />
        Welcome to my little slice of the internet! <br /> — I hope you find
        something useful! <br />
        If you're curious, read more
        <Link href="#about">&nbsp;about me.</Link>
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button> */}
    </LeftSection>
    {/* <RightSection></RightSection> */}
  </Section>
);

export default Hero;
