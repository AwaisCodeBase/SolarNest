import React from "react";
import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.jsx";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.about_container}>
      <Hero
        backgroundImage="/SolarNest/assets/about.png"
        title="pages.aboutUs"
      />
      <div className={styles.text}>
        <p>{t("about.description")}</p>
      </div>
      <AnimatedStats />
      <ProjectSection />
    </div>
  );
};

export default About;
