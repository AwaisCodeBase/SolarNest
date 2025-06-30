import React from "react";
import styles from "./Renewable_Energy_Solution.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Renewable_Energy_Solution = () => {
  const { t } = useLanguage();
  const servicesData =
    t("renewableEnergy.services", { returnObjects: true }) || [];

  // Ensure servicesData is an array
  if (!Array.isArray(servicesData)) {
    console.error("servicesData is not an array:", servicesData);
    return (
      <>
        <Hero
          backgroundImage="/assets/renew.jpg"
          title={t("renewableEnergy.title")}
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
        backgroundImage="/assets/renew.jpg"
        title={t("renewableEnergy.title")}
      />
      <div>
        <AllServices
          services={servicesData}
          title={t("renewableEnergy.title")}
        />
      </div>
    </>
  );
};

export default Renewable_Energy_Solution;
