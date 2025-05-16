// ContactSection.jsx
import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.leftDescription}>
        <h1 className={styles.title}>
          Let's talk<br />
          on something <span>great</span><br />
          together
        </h1>
        <div className={styles.contactDetails}>
          <div className={styles.contacts_info}>
            <img src="/SolarNest/assets/email.png" alt="" />
            <p>admin@blackemerald.net</p>
          </div>
          <div className={styles.contacts_info}>
            <img src="/SolarNest/assets/phone.png" alt="" />
            <p>+1 (201) 123 4468</p>
          </div>
          <div className={styles.contacts_info}>
            <img src="/SolarNest/assets/location.png" alt="" />
            <p>Makkah, Saudi Arabia123 Street 487 House</p>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.formTitle}>I'm interested in:</h2>
        <div className={styles.interestButtons}>
          {['Renewable Energy', 'Water & Gas', 'MEP', 'Pre Construction', 'Infrastructure Development', 'Construction', 'Bid & Tendering Service', 'Electricity Infrastructure', 'Earth & Site Development', 'Integerated Facilitated Management'].map((item, index) => (
            <button key={index} className={styles.interestButton}>{item}</button>
          ))}
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <div className={styles.inputWrapper}>
              <input type="text" id="name" className={styles.input} />
              <div className={styles.line}></div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputWrapper}>
              <input type="email" id="email" className={styles.input} />
              <div className={styles.line}></div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <div className={styles.inputWrapper}>
              <textarea id="description" className={styles.textarea}></textarea>
              <div className={styles.line}></div>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
