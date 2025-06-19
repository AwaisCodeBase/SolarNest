import React from "react";
import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.jsx";
import { useLanguage } from "../../context/LanguageContext";
import TeamSection from "../../components/TeamSection/TeamSection.jsx";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.about_container}>
      <Hero
        backgroundImage="/assets/about.png"
        title="pages.aboutUs"
      />
      <div className={styles.text}>
        <p>{t("about.description")}</p>
      </div>
      <AnimatedStats />
      <ProjectSection />
      <TeamSection />
    </div>
  );
};

export default About;
