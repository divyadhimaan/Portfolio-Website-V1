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
      I'm a software engineer passionate about crafting exceptional digital experiences. <br />
        Welcome to my corner of the web—take a look around and let’s build something amazing together!
        <br/>
        {/* If you're curious, read more
        <Link href="#about">&nbsp;about me.</Link> */}
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button> */}
    </LeftSection>
    {/* <RightSection></RightSection> */}
  </Section>
);

export default Hero;
