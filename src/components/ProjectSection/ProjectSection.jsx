import React, { useRef } from "react";
import styles from "./ProjectSection.module.css";

const projectsData = [
  {
    id: 1,
    image: "/SolarNest/assets/project1.png",
    title: "Solar Panel Installation",
    description: "A residential solar panel setup in California.",
  },
  {
    id: 2,
    image: "/SolarNest/assets/project2.png",
    title: "Wind Turbine System",
    description: "Commercial wind energy project for a farm.",
  },
  {
    id: 3,
    image: "/SolarNest/assets/project3.png",
    title: "Battery Storage Unit",
    description: "Backup storage for energy surplus in a smart grid.",
  },
  {
    id: 4,
    image: "/SolarNest/assets/project1.png",
    title: "EV Charging Station",
    description: "Installation for electric vehicle fleet charging.",
  },
  {
    id: 5,
    image: "/SolarNest/assets/project2.png",
    title: "Green Building Retrofit",
    description: "Energy optimization for corporate building.",
  },
  {
    id: 1,
    image: "/SolarNest/assets/project1.png",
    title: "Solar Panel Installation",
    description: "A residential solar panel setup in California.",
  },
  {
    id: 2,
    image: "/SolarNest/assets/project2.png",
    title: "Wind Turbine System",
    description: "Commercial wind energy project for a farm.",
  },
  {
    id: 3,
    image: "/SolarNest/assets/project3.png",
    title: "Battery Storage Unit",
    description: "Backup storage for energy surplus in a smart grid.",
  },
  {
    id: 4,
    image: "/SolarNest/assets/project1.png",
    title: "EV Charging Station",
    description: "Installation for electric vehicle fleet charging.",
  },
  {
    id: 5,
    image: "/SolarNest/assets/project2.png",
    title: "Green Building Retrofit",
    description: "Energy optimization for corporate building.",
  },
  {
    id: 1,
    image: "/SolarNest/assets/project1.png",
    title: "Solar Panel Installation",
    description: "A residential solar panel setup in California.",
  },
  {
    id: 2,
    image: "/SolarNest/assets/project2.png",
    title: "Wind Turbine System",
    description: "Commercial wind energy project for a farm.",
  },
  {
    id: 3,
    image: "/SolarNest/assets/project3.png",
    title: "Battery Storage Unit",
    description: "Backup storage for energy surplus in a smart grid.",
  },
  {
    id: 4,
    image: "/SolarNest/assets/project1.png",
    title: "EV Charging Station",
    description: "Installation for electric vehicle fleet charging.",
  },
  {
    id: 5,
    image: "/SolarNest/assets/project2.png",
    title: "Green Building Retrofit",
    description: "Energy optimization for corporate building.",
  },
];

const ProjectSection = () => {

  return (
    <section className={styles.projects_section}>
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.slider_wrapper}>

        <div className={styles.grid_wrapper}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.project_card}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <h3 className={styles.project_title}>{project.title}</h3>
              <p className={styles.project_description}>
                {project.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProjectSection;