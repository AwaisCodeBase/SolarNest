import React from "react";
import { useRef, useEffect } from "react";
import styles from "./AllServices.module.css";
import ServiceCard from "./ServiceCard";

const AllServices = ({ 
  services = [], 
  title = "Our Services"
}) => {
  const sectionRef = useRef(null);

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

  // If no services are provided, show a message
  if (!services || services.length === 0) {
    return (
      <section className={styles.page}>
        <h2 className={styles.section_title}>{title}</h2>
        <p style={{ textAlign: 'center' }}>No services available.</p>
      </section>
    );
  }

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
      <h2 className={styles.section_title}>{title}</h2>
      <div className={styles.services_grid} ref={sectionRef}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
