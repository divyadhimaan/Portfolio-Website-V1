import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      {/* <Timeline /> */}
      <Projects />
      {/* <Technologies /> */}

      <Contact />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
