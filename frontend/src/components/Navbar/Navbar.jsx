import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { en, ar } from "../../translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isArabic, toggleLanguage } = useLanguage();
  const t = isArabic ? ar : en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle button

  const navLinks = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/services", label: t.nav.services },
    { path: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <Link to="/" className={styles.logoContainer}>
        <img
          src="/assets/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </Link>

      <div className={styles.navLinks}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.navLink} ${
              location.pathname === link.path ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles.language_selector}>
        <p className={styles.language_text}>
          {isArabic ? "العربية" : "ENGLISH"}
        </p>
        <div
          className={`${styles.toggle_container} ${
            isArabic ? styles.active : ""
          }`}
          onClick={toggleLanguage}
        >
          <div className={styles.toggle_circle} />
        </div>
      </div>

      <button
        className={`${styles.mobileMenuButton} ${
          isMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <Link to="/" onClick={closeMenu}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              className={styles.logo}
            />
          </Link>
          <button className={styles.closeButton} onClick={closeMenu}>
            <span></span>
            <span></span>
          </button>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.navLink} ${
              location.pathname === link.path ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        {/* {location.pathname === "/services" && (
          <div className={styles.mobileToggleButton}>
            <p>ARABIC</p>
            <img src="/assets/toggle.png" alt="Toggle" />
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
