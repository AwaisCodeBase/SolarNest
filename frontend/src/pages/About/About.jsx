import React from "react";
import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.jsx";
import { useLanguage } from "../../context/LanguageContext";
//import TeamSection1 from "../../components/TeamSection1/TeamSection1.jsx";
import Values from "../../components/Values/Values.jsx";
import Vision from "../../components/Vision/Vision.jsx";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.about_container}>
      <Hero
        backgroundImage="/assets/about.png"
        title="pages.aboutUs"
      />
      <AnimatedStats />
      <div className={styles.headingContainer} >
        <div className={styles.heading}>
          <p>{t("about.mission")}</p>
        </div>
      </div>
      <div className={`${styles.text} ${styles.mission}`}>
        <p>{t("about.description")}</p>
      </div>
      <Values />
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <p>{t("about.whoWeAre.heading")}</p>
        </div>
      </div>
      <div className={`${styles.text} ${styles.whoWeAreScroll}`}>
        <p>{t("about.whoWeAre.description")}</p>
      </div>
      <Vision />
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <p>{t("team.title")}</p>
        </div>
      </div>
      <div className={styles.teamDescription}>
        <p>{t("team.description.paragraph1")}</p>
        <p>{t("team.description.paragraph2")}</p>
        <p>{t("team.description.paragraph3")}</p>
      </div>
      {/* <TeamSection1 /> */}
      <ProjectSection />
    </div>
  );
};

export default About;
