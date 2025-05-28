import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./AnimatedStats.module.css";

const AnimatedStats = () => {
  const { t } = useLanguage();
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the animation when component mounts
    setIsVisible(true);

    // Experience counter (0 to 20)
    const experienceInterval = setInterval(() => {
      setExperienceCount((prev) => {
        if (prev < 20) return prev + 1;
        clearInterval(experienceInterval);
        return 20;
      });
    }, 100);

    // Projects counter (0 to 8000)
    const projectsInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev < 8000) return prev + 200;
        clearInterval(projectsInterval);
        return 8000;
      });
    }, 40);

    // Clients counter (0 to 8000)
    const clientsInterval = setInterval(() => {
      setClientsCount((prev) => {
        if (prev < 8000) return prev + 200;
        clearInterval(clientsInterval);
        return 8000;
      });
    }, 40);

    // Cleanup function
    return () => {
      clearInterval(experienceInterval);
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
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
      </div>
    </div>
  );
};

export default AnimatedStats;
