import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./ChooseUs.module.css";

const ChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: "/SolarNest/assets/Customer_Insight.png",
      title: t("chooseUs.items.0.title"),
      description: t("chooseUs.items.0.description"),
      color: "#212122",
    },
    {
      icon: "/SolarNest/assets/Handshake.png",
      title: t("chooseUs.items.1.title"),
      description: t("chooseUs.items.1.description"),
      color: "#153318",
    },
    {
      icon: "/SolarNest/assets/Verified_Account.png",
      title: t("chooseUs.items.2.title"),
      description: t("chooseUs.items.2.description"),
      color: "#236835",
    },
  ];

  return (
    <section className={styles.choose_us_section}>
      <div className={styles.container}>
        <h2 className={styles.main_title}>{t("chooseUs.title")}</h2>

        <div className={styles.reasons_container}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reason_item}>
              <div
                className={styles.icon_container}
                style={{ backgroundColor: reason.color }}
              >
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className={styles.reason_icon}
                />
                <span className={styles.badge}>{index + 1}</span>
              </div>
              <h3 className={styles.reason_title}>{reason.title}</h3>
              <p className={styles.reason_description}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
