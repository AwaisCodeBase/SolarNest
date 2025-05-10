import React, { useRef } from "react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: 1,
    image: "/SolarNest/assets/project1.png",
    title: "Solar Panel Installation",
    description: "A residential solar panel setup in California."
  },
  {
    id: 2,
    image: "/SolarNest/assets/project2.png",
    title: "Wind Turbine System",
    description: "Commercial wind energy project for a farm."
  },
  {
    id: 3,
    image: "/SolarNest/assets/project3.png",
    title: "Battery Storage Unit",
    description: "Backup storage for energy surplus in a smart grid."
  },
  {
    id: 4,
    image: "/SolarNest/assets/project1.png",
    title: "EV Charging Station",
    description: "Installation for electric vehicle fleet charging."
  },
  {
    id: 5,
    image: "/SolarNest/assets/project2.png",
    title: "Green Building Retrofit",
    description: "Energy optimization for corporate building."
  },
];

const Projects = () => {
  const sliderRef = useRef(null);

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
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.slider_wrapper}>
        <button className={styles.nav_button} onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.project_card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3 className={styles.project_title}>{project.title}</h3>
              <p className={styles.project_description}>{project.description}</p>
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
