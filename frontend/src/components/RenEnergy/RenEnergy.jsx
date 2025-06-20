import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./RenEnergy.module.css";

const RenEnergy = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.energy_section}>
      <h1 className={styles.title}>{t("renewableEnergy.title")}</h1>
      <div className={styles.content_wrapper}>
        <div className={styles.image_container}>
          <div className={styles.background_animation}></div>
          <img
            className={styles.energy_image}
            src="/SolarNest/assets/enginer.png"
            alt={t("renewableEnergy.title")}
          />
        </div>
        <div className={styles.description_container}>
          <h2>{t("renewableEnergy.subtitle")}</h2>
          <p className={styles.description}>
            {t("renewableEnergy.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenEnergy;
