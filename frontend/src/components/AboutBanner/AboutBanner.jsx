import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";

const AboutBanner = ({ backgroundImage, title, className }) => {
  const { t } = useLanguage();

  return (
    <div
     className={`${styles.main_container} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <h1>{t(title)}</h1>
      </div>
    </div>
  );
};

export default AboutBanner;
