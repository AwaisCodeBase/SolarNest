import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
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
              <img className={styles.icons} src="/SolarNest/assets/facebook_icon.png" alt="" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img className={styles.icons} src="/SolarNest/assets/Instagram.png" alt="" />
            </a>
          </div>
        </div>

        <div className={styles.links_container}>
          <div className={styles.link_group}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.link_group}>
            <h3>SERVICES</h3>
            <ul>
              <li>
                <a href="/services">Solar Solutions</a>
              </li>
              <li>
                <a href="/services">Energy Management</a>
              </li>
              <li>
                <a href="/services">Consulting</a>
              </li>
            </ul>
          </div>

          <div className={styles.link_group}>
            <h3>RESOURCES</h3>
            <ul>
              <li>
                <a href="/about">Our Projects</a>
              </li>
              <li>
                <a href="/contact">Support</a>
              </li>
              <li>
                <a href="/contact">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>Copyright &copy; 2025 BlackEmerald</p>
      </div>
    </footer>
  );
};

export default Footer;
