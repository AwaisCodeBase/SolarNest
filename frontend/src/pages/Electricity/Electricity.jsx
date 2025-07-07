import React from "react";
import styles from "./Electricity.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Electricity = () => {
  const { t } = useLanguage();
  const servicesData = t("electricity.services", { returnObjects: true });

  return (
    <>
      <Hero
        backgroundImage="/assets/high_voltage.png"
        title={t("electricity.slogan")}
      ></Hero>
      <div>
        <AllServices services={servicesData} title={t("electricity.title")} />
      </div>
    </>
  );
};

export default Electricity;
