import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Experience from './Experience/Experience';
import Skill from './Skill/Skill';
import Hobby from './Hobby/Hobby';
import Contact from './Contact/Contact';
/* import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer'; */

import { PortfolioProvider } from '../context/context';

import { helloData, experienceData, skillData, hobbyData } from '../data/data';

function App() {
  /* const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []); */

  const [hello, setHello] = useState({});
  const [experience, setExperience] = useState({
    companies: []
  });
  const [skill, setSkill] = useState({
    domains: []
  });
  const [hobby, setHobby] = useState({
    hobbies: []
  });

  useEffect(() => {
    setHello({ ...helloData });
    setExperience({ ...experienceData });
    setSkill({ ...skillData });
    setHobby({ ...hobbyData });
  }, []);

  /* return (
    <PortfolioProvider value={{ home }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  ); */

  return (
    <PortfolioProvider value={{ hello, experience, skill, hobby }}>
      <Header></Header>
      <main>
        <Hello />
        <Experience />
        <Skill />
        <Hobby />
        <Contact />
      </main>
    </PortfolioProvider>
  )
}

export default App;
