import React from "react";
import { useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Service.module.css";

const Service = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  const serviceBoxes = [
    {
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
      icon: "/SolarNest/assets/Worker.png",
    },
    {
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
      icon: "/SolarNest/assets/solar.png",
    },
    {
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
      icon: "/SolarNest/assets/Engineer.png",
    },
    {
      title: t("services.items.3.title"),
      description: t("services.items.3.description"),
      icon: "/SolarNest/assets/Earth_Element.png",
    },
    {
      title: t("services.items.4.title"),
      description: t("services.items.4.description"),
      icon: "/SolarNest/assets/infra.png",
    },
    {
      title: t("services.items.5.title"),
      description: t("services.items.5.description"),
      icon: "/SolarNest/assets/Auction.png",
    },
    {
      title: t("services.items.6.title"),
      description: t("services.items.6.description"),
      icon: "/SolarNest/assets/int_fac.png",
    },
    {
      title: t("services.items.7.title"),
      description: t("services.items.7.description"),
      icon: "/SolarNest/assets/Circuit.png",
    },
    {
      title: t("services.items.8.title"),
      description: t("services.items.8.description"),
      icon: "/SolarNest/assets/Electricity.png",
    },
    {
      title: t("services.items.9.title"),
      description: t("services.items.9.description"),
      icon: "/SolarNest/assets/Energy_Care.png",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.main_section}>
        <h1 className={styles.title1}>{t("services.title")}</h1>
        <div className={styles.services_grid} ref={sectionRef}>
          {serviceBoxes.map((service, index) => (
            <div
              key={index}
              className={styles.service_box}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
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
    </section>
  );
};

export default Service;
