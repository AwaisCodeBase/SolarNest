import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./AnimatedStats.module.css";

const AnimatedStats = () => {
  const { t } = useLanguage();
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [tenderingCount, setTenderingCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  setIsVisible(true);

  // Total Projects counter (0 to 300)
  const totalProjectsInterval = setInterval(() => {
    setExperienceCount((prev) => {
      if (prev < 300) return prev + 5;
      clearInterval(totalProjectsInterval);
      return 300;
    });
  }, 40);

  // Completed Projects counter (0 to 180)
  const completedProjectsInterval = setInterval(() => {
    setProjectsCount((prev) => {
      if (prev < 180) return prev + 5;
      clearInterval(completedProjectsInterval);
      return 180;
    });
  }, 50);

  // Ongoing Projects counter (0 to 30)
  const ongoingProjectsInterval = setInterval(() => {
    setClientsCount((prev) => {
      if (prev < 30) return prev + 1;
      clearInterval(ongoingProjectsInterval);
      return 30;
    });
  }, 100);

  // In Tendering Projects counter (0 to 50)
  const tenderingInterval = setInterval(() => {
    setTenderingCount((prev) => {
      if (prev < 50) return prev + 2;
      clearInterval(tenderingInterval);
      return 50;
    });
  }, 70);

  return () => {
    clearInterval(totalProjectsInterval);
    clearInterval(completedProjectsInterval);
    clearInterval(ongoingProjectsInterval);
    clearInterval(tenderingInterval);
  };
}, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return Math.floor(num / 1000) + "k+";
    }
    return num + "+";
  };

  return (
    <div
      className={`${styles.stats_section} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.stats_container}>
        <div className={styles.stat_item}>
          <p className={styles.stat_label}>{t("stats.experience")}</p>
          <p className={styles.stat_value}>{formatNumber(experienceCount)}</p>
        </div>
        <div className={styles.stat_item}>
          <p className={styles.stat_label}>{t("stats.projects")}</p>
          <p className={styles.stat_value}>{formatNumber(projectsCount)}</p>
        </div>
        <div className={styles.stat_item}>
          <p className={styles.stat_label}>{t("stats.clients")}</p>
          <p className={styles.stat_value}>{formatNumber(clientsCount)}</p>
        </div>
        <div className={styles.stat_item}>
          <p className={styles.stat_label}>{t("stats.tendering")}</p>
          <p className={styles.stat_value}>{formatNumber(tenderingCount)}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
