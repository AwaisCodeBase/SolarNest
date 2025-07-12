import React from "react";
import styles from "./Infrastructure.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Infrastructure = () => {
  const { t } = useLanguage();
  const servicesData = t("infrastructure.services", { returnObjects: true });

  return (
    <>
      <Hero backgroundImage="/assets/building2.jpg" title="infrastructure.slogan" />
      <div>
        <AllServices
          services={servicesData}
          title={t("infrastructure.title")}
        />
      </div>
    </>
  );
};

export default Infrastructure;
