import React from "react";
import styles from "./RenEnergy.module.css";

const RenEnergy = () => {
  return (
    <div className={styles.energy_section}>
      <h1 className={styles.title}>RENEWABLE ENERGY</h1>
      <div className={styles.content_wrapper}>
        <div className={styles.image_container}>
          <img
            className={styles.energy_image}
            src="/SolarNest/assets/enginer.png"
            alt="Renewable Energy"
          />
        </div>
        <div className={styles.description_container}>
          <h2>Solar, batteries & EV Charging</h2>
          <p className={styles.description}>
          We deliver Solar and Hybrid Energy Solutions for commercial and government clients. Our Battery Energy Storage Systems (BESS) improve grid reliability, while our EV Charging and Smart Energy Consulting support sustainable transitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenEnergy;
