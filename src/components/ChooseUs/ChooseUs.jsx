import React from "react";
import styles from "./ChooseUs.module.css";

const ChooseUs = () => {
  const reasons = [
    {
      icon: "/SolarNest/assets/Customer_Insight.png",
      title: "Expertise & Experience",
      description:
        "Our team brings decades of combined experience in renewable energy solutions, ensuring your project is handled with the highest level of expertise and professionalism.",
        color: "#212122"
    },
    {
      icon: "/SolarNest/assets/Handshake.png",
      title: "Quality & Innovation",
      description:
        "We combine premium materials with cutting-edge technology to deliver sustainable energy solutions that are built to last and perform at optimal efficiency.",
        color: "#153318"
    },
    {
      icon: "/SolarNest/assets/Verified_Account.png",
      title: "Customer Satisfaction",
      description:
        "We prioritize your needs and goals, providing personalized service and support throughout the entire project lifecycle and beyond installation.",
        color: "#236835"
    },
  ];

  return (
    <section className={styles.choose_us_section}>
      <div className={styles.container}>
        <h2 className={styles.main_title}>WHY CHOOSE US</h2>

        <div className={styles.reasons_container}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reason_item}>
              <div className={styles.icon_container}
               style={{ backgroundColor: reason.color }}
              >
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className={styles.reason_icon}
                />
                 <span className={styles.badge}>{index + 1}</span>
              </div>
              <h3 className={styles.reason_title}>{reason.title}</h3>
              <p className={styles.reason_description}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
