import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './Bolt.module.css';

const Bolt = () => {
  return (
    <div className={styles.sceneContainer}>
        <div className={styles.whitebox}></div>
      <Spline scene="https://prod.spline.design/7IsFIm80cIG3X3CQ/scene.splinecode" />
      {/* <Spline scene="https://prod.spline.design/7IsFIm80cIG3X3CQ/scene.splinecode" /> */}
    </div>
  );
};

export default Bolt;
