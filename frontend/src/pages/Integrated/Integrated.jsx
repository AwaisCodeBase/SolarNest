import React from "react";
import styles from "./Integrated.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Integrated = () => {
  const { t } = useLanguage();
  const hardServicesData = t("integrated.hardServices.services", {
    returnObjects: true,
  });
  const softServicesData = t("integrated.softServices.services", {
    returnObjects: true,
  });

  return (
    <>
      <Hero
        backgroundImage="/assets/manag.jpg"
        title={t("integrated.title")}
      />
      <div>
        <AllServices
          services={hardServicesData}
          title={t("integrated.hardServices.title")}
        />
      </div>

      <div>
        <AllServices
          services={softServicesData}
          title={t("integrated.softServices.title")}
        />
      </div>
    </>
  );
};

export default Integrated;
