import React from "react";
import styles from "./MEP.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const MEP = () => {
  const { t } = useLanguage();
  const servicesData = t("mep.services", { returnObjects: true }) || [];

  // Ensure servicesData is an array
  if (!Array.isArray(servicesData)) {
    console.error("servicesData is not an array:", servicesData);
    return (
      <>
        <Hero
        backgroundImage="/assets/mep.png"
        title={t("mep.title")} />
        <div>
          <p>Error loading services. Please try again later.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Hero backgroundImage="/assets/MEP.png" title={t("mep.title")} />
      <div>
        <AllServices services={servicesData} title={t("mep.title")} />
      </div>
    </>
  );
};

export default MEP;
