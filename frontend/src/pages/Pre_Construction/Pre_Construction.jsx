import React from "react";
import styles from "./Pre_Construction.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Pre_Construction = () => {
  const { t } = useLanguage();
  const servicesData =
    t("preConstruction.services", { returnObjects: true }) || [];

  // Ensure servicesData is an array
  if (!Array.isArray(servicesData)) {
    console.error("servicesData is not an array:", servicesData);
    return (
      <>
        <Hero
          backgroundImage="/SolarNest/assets/pre.jpg"
          title="pages.preConstruction"
        />
        <div>
          <p>Error loading services. Please try again later.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Hero
        backgroundImage="/SolarNest/assets/pre.jpg"
        title="pages.preConstruction"
      />
      <div>
        <AllServices
          services={servicesData}
          title={t("preConstruction.title")}
        />
      </div>
    </>
  );
};

export default Pre_Construction;
