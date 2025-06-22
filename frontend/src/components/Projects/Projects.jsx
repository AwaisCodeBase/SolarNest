import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Projects.module.css";

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = t("projectSection.items", { returnObjects: true });
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const formatDescription = (description) => {
    const lines = description.split("\n");
    return lines.map((line, index) => {
      const [label, value] = line.split(":").map((part) => part.trim());
      return <p key={index} data-label={label} data-value={value} />;
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }
      clearTimeout(slider.scrollTimeout);
      slider.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => {
      slider.removeEventListener("scroll", handleScroll);
      clearTimeout(slider.scrollTimeout);
    };
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current && !isScrolling) {
      const { clientWidth } = sliderRef.current;
      const cardWidth = clientWidth / 3; // Width of one card
      const gap = 32; // Gap between cards
      const scrollAmount = cardWidth + gap; // Total scroll amount for one card

      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.projects_section}>
      <h2 className={styles.title}>{t("projectSection.title")}</h2>
      <div className={styles.slider_wrapper}>
        <button
          className={`${styles.nav_button} ${
            isScrolling ? styles.disabled : ""
          }`}
          onClick={() => scroll("left")}
          disabled={isScrolling}
        >
          &#8249;
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.project_card}>
              <img
                src={`/SolarNest/assets/Picture${(index % 55) + 1}.jpg`}
                alt={project.title}
                className={styles.image}
              />
              <h3 className={styles.project_title}>{project.title}</h3>
              <div className={styles.project_description}>
                {formatDescription(project.description)}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.nav_button} ${
            isScrolling ? styles.disabled : ""
          }`}
          onClick={() => scroll("right")}
          disabled={isScrolling}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
