import React from "react";
import styles from "./Earthwork.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Earthwork = () => {
  const { t } = useLanguage();
  const servicesData = t("earthwork.services", { returnObjects: true });

  return (
    <>
      <Hero
        backgroundImage="/SolarNest/assets/earth.jpg"
        title={t("earthwork.title")}
      />
      <div>
        <AllServices services={servicesData} title={t("earthwork.title")} />
      </div>
    </>
  );
};

export default Earthwork;
