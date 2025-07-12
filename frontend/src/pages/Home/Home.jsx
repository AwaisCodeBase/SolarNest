import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import AnimatedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import RenEnergy from "../../components/RenEnergy/RenEnergy.jsx";
import Service from "../../components/Service/Service.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Construction from "../../components/Construction/Construction.jsx";
//import TeamSection from "../../components/TeamSection/TeamSection.jsx";
import { useLanguage } from "../../context/LanguageContext";
import { en, ar } from "../../translations";
import Clients from "../../components/Clients/Clients.jsx";
import ContactSection from "../../components/ContactSection/ContactSection.jsx";
import Bolt from "../../components/boltscene/Bolt.jsx";

const Home = () => {
  const { isArabic, t } = useLanguage();

  return (
    <div className={styles.home_container}>
      <div className={styles.hero_section}>
        {/* Video Background */}
        <video
          className={styles.video_background}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.hero_section_content}>
          <p className={styles.p1}>{t("hero.p1")}</p>
          <p className={styles.p2}>{t("hero.p2")}</p>
          <p className={styles.p3}>{t("hero.p3")}</p>
          <div className={styles.button_container}>
            <Link to="/contact" className={styles.btntext}>
              <button>{t("hero.button")}</button>
            </Link>
            <Link to="/services" className={styles.btntext}>
              <button>SERVICES</button>
            </Link>
          </div>
        </div>
      </div>
      <AnimatedStats />
      <Clients />
      {/* <Bolt/> */}
      {/* <Construction />
      <RenEnergy /> */}
      <Service />
      <Projects />
      {/* <TeamSection /> */}
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <p>{t("home.requestQuote")}</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Home;
