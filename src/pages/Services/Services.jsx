import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const serviceBoxes = [
    {
      title: "Solar Solutions",
      description:
        "Custom solar panel installations for residential and commercial properties",
    },
    {
      title: "Energy Storage",
      description: "Battery storage solutions for reliable power backup",
    },
    {
      title: "EV Charging",
      description: "Electric vehicle charging infrastructure installation",
    },
    {
      title: "Smart Grid",
      description: "Advanced grid management and monitoring systems",
    },
    {
      title: "Energy Consulting",
      description: "Expert advice on energy efficiency and optimization",
    },
    {
      title: "Maintenance",
      description: "Regular maintenance and support services",
    },
    {
      title: "System Design",
      description: "Custom energy system design and planning",
    },
    {
      title: "Energy Audit",
      description: "Comprehensive energy consumption analysis",
    },
    {
      title: "Project Management",
      description: "End-to-end project management services",
    },
    {
      title: "Technical Support",
      description: "24/7 technical support and assistance",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.main_section}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.services_grid}>
          {serviceBoxes.map((service, index) => (
            <div key={index} className={styles.service_box}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
