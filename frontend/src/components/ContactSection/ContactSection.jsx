import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import { useLanguage } from "../../context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interests: [],
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const interestOptions = t("contactSection.interests", {
    returnObjects: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch(
        "https://blackemerald-email-module.vercel.app/api/contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({
        name: "",
        email: "",
        message: "",
        interests: [],
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        loading: false,
        error: error.message || t("contactSection.form.error"),
        success: false,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.text}>
          <p>{t("contactSection.title.line1")}</p>
          <p>
            {t("contactSection.title.line2")}{" "}
            <span>{t("contactSection.title.highlight")}</span>
          </p>
          <p>{t("contactSection.title.line3")}</p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img src="/assets/email.png" alt="Email" />
            <span>{t("contactSection.contactInfo.email")}</span>
          </div>
          <div className={styles.contactItem}>
            <img src="/assets/phone.png" alt="Phone" />
            <span>{t("contactSection.contactInfo.phone")}</span>
          </div>
          <div className={styles.contactItem}>
            <img src="/assets/location.png" alt="Location" />
            <span>{t("contactSection.contactInfo.address")}</span>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <form onSubmit={handleSubmit}>
          {status.error && (
            <div className={styles.errorMessage}>{status.error}</div>
          )}
          {status.success && (
            <div className={styles.successMessage}>
              {t("contactSection.form.success")}
            </div>
          )}
          <div className={styles.interestsContainer}>
            <p>{t("contactSection.form.interests")}</p>
            <div className={styles.interestButtons}>
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  className={`${styles.interestButton} ${
                    formData.interests.includes(interest) ? styles.active : ""
                  }`}
                  onClick={() => handleInterestChange(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>{t("contactSection.form.name.label")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("contactSection.form.name.placeholder")}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>{t("contactSection.form.email.label")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("contactSection.form.email.placeholder")}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>{t("contactSection.form.message.label")}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t("contactSection.form.message.placeholder")}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={status.loading}
          >
            {status.loading
              ? t("contactSection.form.sending")
              : t("contactSection.form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
