import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ backgroundImage, title }) => {
  return (
    <div
      className={styles.main_container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
