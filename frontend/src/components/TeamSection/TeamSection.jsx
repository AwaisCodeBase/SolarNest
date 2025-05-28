import React, { useState, useRef, useEffect } from "react";
import styles from "./TeamSection.module.css";
import { useLanguage } from "../../context/LanguageContext";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const { isArabic, t } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      name: t("team.member1.name"),
      designation: t("team.member1.designation"),
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: t("team.member2.name"),
      designation: t("team.member2.designation"),
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 3,
      name: t("team.member3.name"),
      designation: t("team.member3.designation"),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: t("team.member4.name"),
      designation: t("team.member4.designation"),
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    },
    {
      id: 5,
      name: t("team.member5.name"),
      designation: t("team.member5.designation"),
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 6,
      name: t("team.member6.name"),
      designation: t("team.member6.designation"),
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
  ];

  useEffect(() => {
    const updateCardWidth = () => {
      if (gridRef.current) {
        const containerWidth = gridRef.current.offsetWidth;
        const gap = 24; // 1.5rem gap
        const newCardWidth = (containerWidth - gap * 2) / 3;
        setCardWidth(newCardWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      if (gridRef.current) {
        const scrollAmount = cardWidth + 24; // card width + gap
        gridRef.current.scrollLeft -= scrollAmount * 3;
      }
    }
  };

  const handleNextClick = () => {
    const maxIndex = Math.ceil(teamMembers.length / 3) - 1;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      if (gridRef.current) {
        const scrollAmount = cardWidth + 24; // card width + gap
        gridRef.current.scrollLeft += scrollAmount * 3;
      }
    }
  };

  return (
    <section className={styles.team_section}>
      <h2 className={styles.title}>{t("team.title")}</h2>
      <div className={styles.slider_wrapper}>
        <div className={styles.grid_wrapper} ref={gridRef}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.team_card}>
              <div className={styles.image_container}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                />
                <div className={styles.member_info}>
                  <h3 className={styles.member_name}>{member.name}</h3>
                  <p className={styles.member_designation}>
                    {member.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btn_div}>
          <button
            className={`${styles.nav_button} ${styles.prev_button}`}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          <button
            className={`${styles.nav_button} ${styles.next_button}`}
            onClick={handleNextClick}
            disabled={currentIndex >= Math.ceil(teamMembers.length / 3) - 1}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
