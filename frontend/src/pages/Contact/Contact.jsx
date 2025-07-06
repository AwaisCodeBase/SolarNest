import React from "react";
import styles from "./Contact.module.css";
import Hero from "../../components/Hero/Hero";
import ContactSection from "../../components/ContactSection/ContactSection";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className={styles.contactUs_container}>
      <Hero
        backgroundImage="/assets/contact.png"
        title="pages.contactUs"
      />
      <ContactSection />
      <div className={styles.map_section}>
        <iframe
          title="map"
          className={styles.map}
          src="https://www.google.com/maps?q=Makkah,Saudi+Arabia+123+Street+487+House&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
export default Contact;
