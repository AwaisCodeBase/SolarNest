import React from "react";
import styles from "./Contact.module.css";
import Hero from "../../components/Hero/Hero";
import ContactSection from "../../components/ContactSection/ContactSection";

const Contact = () => {
  return (
    <div className={styles.contactUs_container}>
      <Hero
        backgroundImage="/SolarNest/assets/contact.png"
        title="Contact Us"
      />
      <ContactSection />
      <div className={styles.map_section}>
        {/* <img src="/SolarNest/assets/map.png" alt="" /> */}
        <iframe
          title="map"
          className={styles.map}
          src="https://www.google.com/maps?q=Makkah,Saudi+Arabia+123+Street+487+House&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* <MapSection /> */}
      </div>
    </div>
  );
};
export default Contact;
