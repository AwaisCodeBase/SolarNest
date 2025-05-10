import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  const serviceBoxes = [
    {
      title: "Construction",
      description:
        "Custom solar panel installations for residential and commercial properties",
      icon: "/Worker.png",
    },
    {
      title: "Solar",
      description: "Battery storage solutions for reliable power backup",
      icon: "/solar.png"
    },
    {
      title: "Engineering",
      description: "Electric vehicle charging infrastructure installation",
      icon: "/Engineer.png"
    },
    {
      title: "Earth Work",
      description: "Advanced grid management and monitoring systems",
      icon: "/Earth_Element.png"
    },
    {
      title: "Infrastructure",
      description: "Expert advice on energy efficiency and optimization",
      icon: "/infra.png"
    },
    {
      title: "Bid & Tendering",
      description: "Regular maintenance and support services",
      icon: "/Auction.png"
    },
    {
      title: "Integerated Facility",
      description: "Custom energy system design and planning",
      icon: "/int_fac.png"
    },
    {
      title: "Technology",
      description: "Comprehensive energy consumption analysis",
      icon: "/Circuit.png"
    },
    {
      title: "Electricity",
      description: "End-to-end project management services",
      icon: "/Electricity.png"
    },
    {
      title: "Renewable Energy",
      description: "24/7 technical support and assistance",
      icon: "Energy_Care.png"
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.main_section}>
        <h1 className={styles.title1}>SERVICES</h1>
        <div className={styles.services_grid}>
          {serviceBoxes.map((service, index) => (
            <div key={index} className={styles.service_box}>
              <div className={styles.icon_container}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className={styles.service_icon}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
