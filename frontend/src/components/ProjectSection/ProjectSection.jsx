import React from "react";
import styles from "./ProjectSection.module.css";
import { useLanguage } from "../../context/LanguageContext";

const ProjectSection = () => {
  const { t } = useLanguage();
  const projectsData = t("projectSection.items", { returnObjects: true });

  const formatDescription = (description) => {
    const lines = description.split("\n");
    return lines.map((line, index) => {
      const [label, value] = line.split(":").map((part) => part.trim());
      return <p key={index} data-label={label} data-value={value} />;
    });
  };

  return (
    <section className={styles.projects_section}>
      <h2 className={styles.title}>{t("projectSection.title")}</h2>
      <div className={styles.slider_wrapper}>
        <div className={styles.grid_wrapper}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.project_card}>
              <img
                src={`/assets/project${(index % 11) + 1}.jpg`}
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
      </div>
    </section>
  );
};

export default ProjectSection;
