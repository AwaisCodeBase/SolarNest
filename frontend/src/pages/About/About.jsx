import React from "react";
import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero.jsx";
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import ProjectSection from "../../components/ProjectSection/ProjectSection.jsx";
import { useLanguage } from "../../context/LanguageContext";
import Service from "../../components/Service/Service.jsx";
import Values from "../../components/Values/Values.jsx";
import Vision from "../../components/Vision/Vision.jsx";
import AboutBanner from "../../components/AboutBanner/AboutBanner.jsx";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.about_container}>
      <AboutBanner backgroundImage="/assets/about2.jpg" title="pages.aboutUs"  className={styles.smallhero} />
      {/* <Hero backgroundImage="/assets/about2.jpg" title="pages.aboutUs"  className={styles.smallhero}/> */}
      <AnimatedStats />
      <div className={styles.whoWeAreSection}>
        <div className={styles.whoWeAreBackground}>
          <div className={styles.whoWeAreContent}>
            <div className={styles.heading}>
              <p>{t("about.whoWeAre.heading")}</p>
            </div>
          </div>
        </div>
        <div className={styles.whoWeAreDescription}>
          <p>{t("about.whoWeAre.description")}</p>
        </div>
      </div>
      <div className={styles.missionSection}>
        <div className={styles.missionImage}>
          <img src="/assets/ourMission.png" alt="Our Mission" />
        </div>
        <div className={styles.missionContent}>
          <div className={styles.heading}>
            <p>{t("about.mission")}</p>
          </div>
          <div className={styles.text}>
            <p>{t("about.description")}</p>
          </div>
        </div>
      </div>
       
      <Vision />
      <Values />
      <div className={styles.teamSection}>
        <div className={styles.teamBackground}>
          <div className={styles.teamContent}>
            <div className={styles.heading}>
              <p>{t("team.title")}</p>
            </div>
          </div>
        </div>
        <div className={styles.teamDescription}>
          <p>{t("team.description.paragraph1")}</p>
          <p>{t("team.description.paragraph2")}</p>
          <p>{t("team.description.paragraph3")}</p>
        </div>
      </div>
      <ProjectSection />
    </div>
  );
};

export default About;
