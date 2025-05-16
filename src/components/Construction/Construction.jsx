// import React from "react";
// import styles from "./Construction.module.css";

// const Construction = () => {
//   return (
//     <div className={styles.energy_section}>
//       <h1 className={styles.title}>Construction & MEP</h1>
//       <div className={styles.content_wrapper}>
//         <div className={styles.image_container}>
//          <div className={styles.div1}>
//          <img
//             className={styles.energy_image1}
//             src="/SolarNest/assets/construction.png"
//             alt="Construnction & MEP"
//           />
//          </div>
//           <div className={styles.div2}>
//           <img
//             className={styles.energy_image2}
//             src="/SolarNest/assets/MEP.png"
//             alt="Construnction & MEP"
//           />
//           </div>
//         </div>
//         <div className={styles.description_container}>
//           <h2>Construction & MEP</h2>
//           <p className={styles.description}>
//           We deliver Solar and Hybrid Energy Solutions for commercial and government clients. Our Battery Energy Storage Systems (BESS) improve grid reliability, while our EV Charging and Smart Energy Consulting support sustainable transitions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Construction;

















import React from "react";
import styles from "./Construction.module.css";

const Construction = () => {
  return (
    <div className={styles.energy_section}>
      <h1 className={styles.title}>Construction & MEP</h1>
      <div className={styles.content_wrapper}>
        <div className={styles.image_container}>
          <div className={`${styles.div1} ${styles.float_animation_1}`}>
            <img
              className={styles.energy_image1}
              src="/SolarNest/assets/construction.png"
              alt="Construction & MEP"
            />
          </div>
          <div className={`${styles.div2} ${styles.float_animation_2}`}>
            <img
              className={styles.energy_image2}
              src="/SolarNest/assets/MEP.png"
              alt="Construction & MEP"
            />
          </div>
        </div>
        <div className={styles.description_container}>
          <h2>Construction & MEP</h2>
          <p className={styles.description}>
            We deliver Solar and Hybrid Energy Solutions for commercial and government clients. Our Battery Energy Storage Systems (BESS) improve grid reliability, while our EV Charging and Smart Energy Consulting support sustainable transitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Construction;
