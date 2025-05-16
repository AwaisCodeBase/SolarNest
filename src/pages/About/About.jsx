import React from "react";
import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.jsx";

const About = () => {
  return (
    <div className={styles.about_container}>
      <Hero
      backgroundImage="/SolarNest/assets/about.png"
      title="About Us"
      />
      <div className={styles.text}>
        <p>At Black Emerald, we deliver cutting-edge construction, renewable energy, and bid management solutions tailored for Saudi Arabia’s dynamic development landscape.
        With over 20 years of expertise, we specialize in engineering, infrastructure, and energy projects that drive the nation forward, aligning with Saudi Vision 2030.</p>
      </div>
      <AnimatedStats />
      <ProjectSection />
    </div>
  );
};

export default About;
