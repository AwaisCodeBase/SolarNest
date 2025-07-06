import React from "react";
import styles from "./Bid.module.css";
import Hero from "../../components/Hero/Hero";
import AllServices from "../../components/AllServices/AllServices";
import { useLanguage } from "../../context/LanguageContext";

const Bid = () => {
  const { t } = useLanguage();
  const servicesData = t("bid.services", { returnObjects: true });

  return (
    <>
      <Hero
        backgroundImage="/assets/bid.png"
        title={t("bid.title")}
      />
      <div>
        <AllServices services={servicesData} title={t("bid.title")} />
      </div>
    </>
  );
};

export default Bid;
