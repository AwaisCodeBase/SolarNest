import React from "react";
import styles from "./Home.module.css";
import AnimatiedStats from "../../components/AnimatedStats/AnimatedStats.jsx";
import RenEnergy from "../../components/RenEnergy/RenEnergy.jsx";
import Service from "../../components/Service/Service.jsx";
import ChooseUs from "../../components/ChooseUs/ChooseUs.jsx";
import Projects from "../../components/Projects/Projects.jsx";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.hero_section}>
        {/* Video Background */}
        <video
          className={styles.video_background}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/SolarNest/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.hero_section_content}>
          <p className={styles.p1}>ENGINEERING THE FUTURE OF</p>
          <p className={styles.p2}>SAUDI ARABIA</p>
          <div className={styles.button_container}>
            <button>GET IN TOUCH</button>
            <button>GET IN TOUCH</button>
          </div>
        </div>
      </div>
      <AnimatiedStats />
      <RenEnergy />
      <Service />
      <ChooseUs />
      <Projects />
    </div>
  );
};

export default Home;
