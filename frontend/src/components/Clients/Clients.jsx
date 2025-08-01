import React from "react";
import styles from "./Clients.module.css";
import Marquee from "react-fast-marquee";
import { useLanguage } from "../../context/LanguageContext";
import { en, ar } from "../../translations";

const clients = [
  {
    id: 1,
    src: "/assets/client1.jpg",
    alt: "client 1",
  },
  {
    id: 2,
    src: "/assets/client2.png",
    alt: "client 2",
  },
  {
    id: 3,
    src: "/assets/client3.jpg",
    alt: "client 3",
  },
  {
    id: 4,
    src: "/assets/client4.png",
    alt: "client 4",
  },
  {
    id: 5,
    src: "/assets/client5.png",
    alt: "client 5",
  },
  {
    id: 6,
    src: "/assets/client6.jpg",
    alt: "client 6",
  },
  {
    id: 7,
    src: "/assets/client7.jpg",
    alt: "client 7",
  },
  {
    id: 8,
    src: "/assets/client8.png",
    alt: "client 8",
  },
  {
    id: 9,
    src: "/assets/client9(1).png",
    alt: "client 9",
  },
  {
    id: 10,
    src: "/assets/client10.png",
    alt: "client 10",
  },
  {
    id: 11,
    src: "/assets/client11.jpg",
    alt: "client 11",
  },
  {
    id: 12,
    src: "/assets/client12.jpg",
    alt: "client 12",
  },
  {
    id: 13,
    src: "/assets/client13.png",
    alt: "client 13",
  },
  {
    id: 14,
    src: "/assets/client14.jpg",
    alt: "client 14",
  },
  {
    id: 15,
    src: "/assets/client15.png",
    alt: "client 15",
  },
  {
    id: 16,
    src: "/assets/client16.png",
    alt: "client 16",
  },
  {
    id: 17,
    src: "/assets/client17.png",
    alt: "client 17",
  },
  {
    id: 18,
    src: "/assets/client18.png",
    alt: "client 18",
  },
  {
    id: 19,
    src: "/assets/client19.png",
    alt: "client 19",
  },
  {
    id: 20,
    src: "/assets/client20.png",
    alt: "client 20",
  },
  {
    id: 21,
    src: "/assets/client21.png",
    alt: "client 21",
  },
  {
    id: 22,
    src: "/assets/client22.png",
    alt: "client 22",
  },
  {
    id: 23,
    src: "/assets/client23.png",
    alt: "client 23",
  },
  {
    id: 24,
    src: "/assets/client24.png",
    alt: "client 24",
  },
  {
    id: 25,
    src: "/assets/client25.png",
    alt: "client 25",
  },
  {
    id: 26,
    src: "/assets/client26.png",
    alt: "client 26",
  },
  {
    id: 27,
    src: "/assets/client27.png",
    alt: "client 27",
  },
  {
    id: 28,
    src: "/assets/client28.png",
    alt: "client 28",
  },
  {
    id: 29,
    src: "/assets/client29.png",
    alt: "client 29",
  },
  {
    id: 30,
    src: "/assets/client30.png",
    alt: "client 30",
  },
  {
    id: 31,
    src: "/assets/client31.png",
    alt: "client 31",
  },
  {
    id: 32,
    src: "/assets/client32.png",
    alt: "client 32",
  },
  {
    id: 33,
    src: "/assets/client33.png",
    alt: "client 33",
  },
  {
    id: 34,
    src: "/assets/client34.png",
    alt: "client 34",
  },
  {
    id: 35,
    src: "/assets/client35.png",
    alt: "client 35",
  },
  {
    id: 36,
    src: "/assets/client36.png",
    alt: "client 36",
  },
  {
    id: 37,
    src: "/assets/client37.png",
    alt: "client 37",
  },
  {
    id: 38,
    src: "/assets/client38.png",
    alt: "client 38",
  },
  {
    id: 39,
    src: "/assets/client39.png",
    alt: "client 39",
  },
];

const Clients = () => {
  const { isArabic } = useLanguage();
  const t = isArabic ? ar : en;

  return (
    <div className={styles.clientSection}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <p>{t.clients.heading}</p>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {clients.map((client) => (
            <div key={client.id} className={styles.logoContainer}>
              <img
                src={client.src}
                alt={client.alt}
                className={styles.logoImage}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;










