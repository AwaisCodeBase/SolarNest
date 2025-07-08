import React from "react";
import styles from "./RightTextLeftImage.module.css";
import { Submit } from "../Submit/Submit";

function RightTextLeftImage() {
  return (
    <>
      <div className={styles.main1}>
        <div className={styles.right}>
          <img src="./sapienstanding.png" alt="" />
        </div>

        <div className={styles.left}>
          <p className={styles.heading}>
            Discover your dream <span>startup</span>
          </p>
          <div className={styles.subheaddiv}>
            <p className={styles.subheading}>
              Join 500k+ entrepreneurs closing life-changing deals. Buy and sell
              SaaS, ecommerce, agencies,.
            </p>
            <Submit btn1text={"View Listings"} />
          </div>
        </div>
      </div>
    </>
  );
}

export { RightTextLeftImage };
