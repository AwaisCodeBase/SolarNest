import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Services.module.css";

const Services = () => {
  const { t } = useLanguage();
  const services = t("servicesPage.services", { returnObjects: true }) || [];

  return (
    <div className={styles.service_container}>
      <div className={styles.content_wrapper}>
        <h1 className={styles.service_heading}>{t("servicesPage.title")}</h1>

        <div className={styles.links_container}>
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.path}`}
              className={styles.service_box}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
