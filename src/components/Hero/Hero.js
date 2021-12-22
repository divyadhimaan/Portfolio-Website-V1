import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row >
    <LeftSection>
      <SectionTitle center>
        Hi, I am Divya Dhiman <br /><br />
        {/* Welcome to <br/> */}
        I build things for the web.
      </SectionTitle>
      <SectionText>
        I’m a software engineer specializing in building exceptional digital experiences. I’m a Web Developer and a Graphic Designer. <br />
        Welcome to my little slice of the internet! <br /> — I hope you find something useful! <br />
        If you’re curious, read more 
        <Link href="#about" >
          &nbsp;about me.
        </Link>
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;