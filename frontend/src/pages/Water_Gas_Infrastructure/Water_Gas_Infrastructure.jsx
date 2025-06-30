import React from "react";
import styles from "./Water_Gas_Infrastructure.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Water_Gas_Infrastructure = () => {
  const { t } = useLanguage();
  const servicesData = t("waterGas.services", { returnObjects: true }) || [];

  // Ensure servicesData is an array
  if (!Array.isArray(servicesData)) {
    console.error("servicesData is not an array:", servicesData);
    return (
      <>
        <Hero
          backgroundImage="/assets/water.jpg"
          title="pages.waterGas"
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
        backgroundImage="/assets/water.jpg"
        title="pages.waterGas"
      />
      <div>
        <AllServices services={servicesData} title={t("waterGas.title")} />
      </div>
    </>
  );
};

export default Water_Gas_Infrastructure;
