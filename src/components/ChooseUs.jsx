import React from "react";
import styles from "./ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <div className={styles.chooseUsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>WHY CHOOSE US</h2>
        </div>
        <div className={styles.content}>
          <dl className={styles.reasonsList}>
            <div className={styles.reasonItem}>
              <dt className={styles.reasonTitle}>Expertise & Experience</dt>
              <dd className={styles.reasonDescription}>
                <p>
                  Our team brings decades of combined experience in renewable
                  energy solutions, ensuring your project is handled with the
                  highest level of expertise and professionalism.
                </p>
              </dd>
            </div>
            <div className={styles.reasonItem}>
              <dt className={styles.reasonTitle}>Quality & Innovation</dt>
              <dd className={styles.reasonDescription}>
                <p>
                  We combine premium materials with cutting-edge technology to
                  deliver sustainable energy solutions that are built to last
                  and perform at optimal efficiency.
                </p>
              </dd>
            </div>
            <div className={styles.reasonItem}>
              <dt className={styles.reasonTitle}>Customer Satisfaction</dt>
              <dd className={styles.reasonDescription}>
                <p>
                  We prioritize your needs and goals, providing personalized
                  service and support throughout the entire project lifecycle
                  and beyond installation.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
