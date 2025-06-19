import React from "react";
import styles from "./Footer.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { en, ar } from "../../translations";

const Footer = () => {
  const { isArabic } = useLanguage();
  const t = isArabic ? ar : en;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_section}>
          {/* <h3>Contact Us</h3> */}
          <div className={styles.social_icons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img
                className={styles.icons}
                src="/assets/facebook_icon.png"
                alt=""
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img
                className={styles.icons}
                src="/assets/Instagram.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className={styles.links_container}>
          <div className={styles.link_group}>
            <h3>{t.footer.company}</h3>
            <ul>
              <li>
                <a href="/about">{t.footer.aboutUs}</a>
              </li>
              <li>
                <a href="/services">{t.footer.services}</a>
              </li>
              <li>
                <a href="/contact">{t.footer.contact}</a>
              </li>
            </ul>
          </div>

          <div className={styles.link_group}>
            <h3>{t.footer.services}</h3>
            <ul>
              <li>
                <a href="/services">{t.footer.solarSolutions}</a>
              </li>
              <li>
                <a href="/services">{t.footer.energyManagement}</a>
              </li>
              <li>
                <a href="/services">{t.footer.consulting}</a>
              </li>
            </ul>
          </div>

          <div className={styles.link_group}>
            <h3>{t.footer.resources}</h3>
            <ul>
              <li>
                <a href="/about">{t.footer.ourProjects}</a>
              </li>
              <li>
                <a href="/contact">{t.footer.support}</a>
              </li>
              <li>
                <a href="/contact">{t.footer.faq}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
