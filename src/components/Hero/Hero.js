import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
  MainButton,
} from "../../styles/GlobalComponents";
import { LeftSection, RightSection } from "./HeroStyles";

const Hero = () => (
  <Section row>
    <LeftSection>
      <SectionTitle center>
        hi, I am Divya.
        <br />
        <SectionText style={{ fontWeight: "bold", margin: "10px auto"}}>
          Software Developer
        </SectionText>
      </SectionTitle>
      <SectionText style={{width: "100%", margin: "20px 0"}}>
        Welcome to my corner of the web!
        <br/>
        Take a look around and let’s build something amazing together!
        <br/>
      </SectionText>
      <Link href="/about" passHref>
        <MainButton shrink={true}>Learn more about me</MainButton>
      </Link>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button> */}
    </LeftSection>
    {/* <RightSection></RightSection> */}
  </Section>
);

export default Hero;
