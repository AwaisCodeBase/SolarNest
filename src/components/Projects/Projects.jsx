import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Projects.module.css";

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = t("projectSection.items", { returnObjects: true });

  const formatDescription = (description) => {
    const lines = description.split("\n");
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };
  const sliderRef = useRef(null);

  // const projectsData = [
  //   {
  //     id: 1,
  //     image: "/SolarNest/assets/project1.png",
  //     title: t("projects.items.0.title"),
  //     description: t("projects.items.0.description"),
  //   },
  //   {
  //     id: 2,
  //     image: "/SolarNest/assets/project2.png",
  //     title: t("projects.items.1.title"),
  //     description: t("projects.items.1.description"),
  //   },
  //   {
  //     id: 3,
  //     image: "/SolarNest/assets/project3.png",
  //     title: t("projects.items.2.title"),
  //     description: t("projects.items.2.description"),
  //   },
  //   {
  //     id: 4,
  //     image: "/SolarNest/assets/project1.png",
  //     title: t("projects.items.3.title"),
  //     description: t("projects.items.3.description"),
  //   },
  //   {
  //     id: 5,
  //     image: "/SolarNest/assets/project2.png",
  //     title: t("projects.items.4.title"),
  //     description: t("projects.items.4.description"),
  //   },
  // ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.projects_section}>
      <h2 className={styles.title}>{t("projectSection.title")}</h2>
      <div className={styles.slider_wrapper}>
        <button className={styles.nav_button} onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.project_card}>
              <img
                src={`/SolarNest/assets/project${(index % 11) + 1}.jpg`}
                alt={project.title}
                className={styles.image}
              />
              <h3 className={styles.project_title}>{project.title}</h3>
              <p className={styles.project_description}>
                {formatDescription(project.description)}
              </p>
            </div>
          ))}
        </div>

        <button className={styles.nav_button} onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
