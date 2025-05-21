import React from "react";
import styles from "./Home.module.css";
import AnimatiedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import RenEnergy from "../../components/RenEnergy/RenEnergy.jsx";
import Service from "../../components/Service/Service.jsx";
import ChooseUs from "../../components/ChooseUs/ChooseUs.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Construction from "../../components/Construction/Construction.jsx";
import { useLanguage } from "../../context/LanguageContext";
import { en, ar } from "../../translations";

const Home = () => {
  const { isArabic } = useLanguage();
  const t = isArabic ? ar : en;

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
          <source src="/SolarNest/assets/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.hero_section_content}>
          <p className={styles.p1}>{t.hero.p1}</p>
          <p className={styles.p2}>{t.hero.p2}</p>
          <div className={styles.button_container}>
            <button>{t.hero.button}</button>
            <button>{t.hero.button}</button>
          </div>
        </div>
      </div>
      <AnimatiedStats />
      <Construction />
      <RenEnergy />
      <Service />
      <ChooseUs />
      <Projects />
    </div>
  );
};

export default Home;
