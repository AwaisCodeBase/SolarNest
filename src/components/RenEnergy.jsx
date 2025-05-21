import React from "react";
import styles from "./RenEnergy.module.css";

const RenEnergy = () => {
  return (
    <div className={styles.renEnergySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>RENEWABLE ENERGY</h2>
          <p className={styles.subtitle}>Solar, batteries & EV Charging</p>
          <p className={styles.description}>
            We deliver Solar and Hybrid Energy Solutions for commercial and
            government clients. Our Battery Energy Storage Systems (BESS)
            improve grid reliability, while our EV Charging and Smart Energy
            Consulting support sustainable transitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenEnergy;
