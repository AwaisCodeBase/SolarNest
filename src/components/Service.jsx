import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>SERVICES</h2>
        </div>
        <div className={styles.content}>
          <dl className={styles.serviceList}>
            <div className={styles.serviceItem}>
              <dt className={styles.serviceTitle}>Construction</dt>
              <dd className={styles.serviceDescription}>
                <p>
                  Custom solar panel installations for residential and
                  commercial properties
                </p>
              </dd>
            </div>
            <div className={styles.serviceItem}>
              <dt className={styles.serviceTitle}>Solar</dt>
              <dd className={styles.serviceDescription}>
                <p>Battery storage solutions for reliable power backup</p>
              </dd>
            </div>
            <div className={styles.serviceItem}>
              <dt className={styles.serviceTitle}>Engineering</dt>
              <dd className={styles.serviceDescription}>
                <p>Electric vehicle charging infrastructure installation</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Service;
