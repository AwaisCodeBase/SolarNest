import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>PROJECTS</h2>
        </div>
        <div className={styles.content}>
          <dl className={styles.projectList}>
            <div className={styles.projectItem}>
              <dt className={styles.projectTitle}>Solar Panel Installation</dt>
              <dd className={styles.projectDescription}>
                <p>A residential solar panel setup in California.</p>
              </dd>
            </div>
            <div className={styles.projectItem}>
              <dt className={styles.projectTitle}>Wind Turbine System</dt>
              <dd className={styles.projectDescription}>
                <p>Commercial wind energy project for a farm.</p>
              </dd>
            </div>
            <div className={styles.projectItem}>
              <dt className={styles.projectTitle}>Battery Storage Unit</dt>
              <dd className={styles.projectDescription}>
                <p>Backup storage for energy surplus in a smart grid.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Projects;
