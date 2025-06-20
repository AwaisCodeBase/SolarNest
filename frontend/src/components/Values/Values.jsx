import React from "react";
import styles from "./Values.module.css";
import { useLanguage } from "../../context/LanguageContext";

const icons = [
  "/SolarNest/assets/Worker.png",
  "/SolarNest/assets/solar.png",
  "/SolarNest/assets/Engineer.png",
  "/SolarNest/assets/Auction.png",
  "/SolarNest/assets/int_fac.png",
  "/SolarNest/assets/Circuit.png",
];

const Values = () => {
  const { t } = useLanguage();
  const values = t("values.items");
  return (
    <section className={styles.values_section}>
      <h2 className={styles.heading}>{t("values.heading")}</h2>
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
