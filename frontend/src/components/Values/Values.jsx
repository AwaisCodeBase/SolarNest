import React from "react";
import styles from "./Values.module.css";
import { useLanguage } from "../../context/LanguageContext";

const icons = [
  "/assets/Worker.png",
  "/assets/solar.png",
  "/assets/Engineer.png",
  "/assets/Auction.png",
  "/assets/int_fac.png",
  "/assets/Circuit.png",
];

const Values = () => {
  const { t } = useLanguage();
  const values = t("values.items", { returnObjects: true });
  return (
    <section className={styles.values_section}>
      <h2 className={styles.heading}>{t("values.title")}</h2>
      <div className={styles.values_grid}>
        {values.map((value, idx) => (
          <div className={styles.value_box} key={idx}>
            <div className={styles.icon_container}>
              <img src={icons[idx]} alt={value.title} className={styles.icon} />
            </div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
