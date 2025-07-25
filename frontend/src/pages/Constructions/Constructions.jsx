import React from "react";
import styles from "./Constructions.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Constructions = () => {
  const { t } = useLanguage();
  const servicesData = t("construction.services", { returnObjects: true });

  return (
    <>
      <Hero
        backgroundImage="/assets/construct.jpg"
        title={t("construction.slogan")}
      />
      <div>
        <AllServices services={servicesData} title={t("construction.title")} />
      </div>
    </>
  );
};

export default Constructions;
