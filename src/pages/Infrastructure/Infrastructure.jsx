import React from 'react'
import styles from './Infrastructure.module.css'
import Hero from '../../components/Hero/Hero'
import AllServices from '../../components/AllServices/AllServices'
import { useLanguage } from "../../context/LanguageContext";

const Infrastructure = () => {
  const { t } = useLanguage();
  const servicesData = t("infrastructure.services", { returnObjects: true });

  return (
    <>
      <Hero
        backgroundImage="/SolarNest/assets/infra1.jpg"
        title={t("infrastructure.title")}
      />
      <div>
        <AllServices 
          services={servicesData} 
          title={t("infrastructure.title")} 
        />
      </div>
    </>
  )
}

export default Infrastructure