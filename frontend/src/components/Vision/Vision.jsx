import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Vision.module.css";

const Vision = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.energy_section}>
      <h1 className={styles.title}>{t("vision.title")}</h1>
      <div className={styles.content_wrapper}>
        <div className={styles.image_container}>
          <div className={`${styles.div1} ${styles.float_animation_1}`}>
            <img
              className={styles.energy_image1}
              src="/assets/construction.png"
              alt={t("vision.title")}
            />
          </div>
          <div className={`${styles.div2} ${styles.float_animation_2}`}>
            <img
              className={styles.energy_image2}
              src="/assets/MEP.png"
              alt={t("vision.title")}
            />
          </div>
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>{t("vision.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
