import React from "react";
import styles from "./Clients.module.css";
import Marquee from "react-fast-marquee";
import { useLanguage } from "../../context/LanguageContext";
import { en, ar } from "../../translations";

const clients = [
  {
    id: 1,
    src: "/SolarNest/assets/client1.png",
    alt: "client 1",
  },
  {
    id: 2,
    src: "/SolarNest/assets/client2.png",
    alt: "client 2",
  },
  {
    id: 3,
    src: "/SolarNest/assets/client3.png",
    alt: "client 3",
  },
  {
    id: 4,
    src: "/SolarNest/assets/client4.png",
    alt: "client 4",
  },
  {
    id: 5,
    src: "/SolarNest/assets/client5.png",
    alt: "client 5",
  },
  {
    id: 6,
    src: "/SolarNest/assets/client6.png",
    alt: "client 6",
  },
  {
    id: 7,
    src: "/SolarNest/assets/client7.png",
    alt: "client 7",
  },
  {
    id: 8,
    src: "/SolarNest/assets/client8.png",
    alt: "client 8",
  },
  {
    id: 9,
    src: "/SolarNest/assets/client9.png",
    alt: "client 9",
  },
  {
    id: 10,
    src: "/SolarNest/assets/client10.png",
    alt: "client 10",
  },
  {
    id: 11,
    src: "/SolarNest/assets/client11.png",
    alt: "client 11",
  },
  {
    id: 12,
    src: "/SolarNest/assets/client12.png",
    alt: "client 12",
  },
  {
    id: 13,
    src: "/SolarNest/assets/client13.png",
    alt: "client 13",
  },
  {
    id: 14,
    src: "/SolarNest/assets/client14.png",
    alt: "client 14",
  },
  {
    id: 15,
    src: "/SolarNest/assets/client15.png",
    alt: "client 15",
  },
  {
    id: 16,
    src: "/SolarNest/assets/client16.png",
    alt: "client 16",
  },
  {
    id: 17,
    src: "/SolarNest/assets/client17.png",
    alt: "client 17",
  },
  {
    id: 18,
    src: "/SolarNest/assets/client18.png",
    alt: "client 18",
  },
  {
    id: 19,
    src: "/SolarNest/assets/client19.png",
    alt: "client 19",
  },
  {
    id: 20,
    src: "/SolarNest/assets/client20.png",
    alt: "client 20",
  },
  {
    id: 21,
    src: "/SolarNest/assets/client21.png",
    alt: "client 21",
  },
  {
    id: 22,
    src: "/SolarNest/assets/client22.png",
    alt: "client 22",
  },
  {
    id: 23,
    src: "/SolarNest/assets/client23.png",
    alt: "client 23",
  },
  {
    id: 24,
    src: "/SolarNest/assets/client24.png",
    alt: "client 24",
  },
  {
    id: 25,
    src: "/SolarNest/assets/client25.png",
    alt: "client 25",
  },
  {
    id: 26,
    src: "/SolarNest/assets/client26.png",
    alt: "client 26",
  },
  {
    id: 27,
    src: "/SolarNest/assets/client27.png",
    alt: "client 27",
  },
  {
    id: 28,
    src: "/SolarNest/assets/client28.png",
    alt: "client 28",
  },
  {
    id: 29,
    src: "/SolarNest/assets/client29.png",
    alt: "client 29",
  },
  {
    id: 30,
    src: "/SolarNest/assets/client30.png",
    alt: "client 30",
  },
  {
    id: 31,
    src: "/SolarNest/assets/client31.png",
    alt: "client 31",
  },
  {
    id: 32,
    src: "/SolarNest/assets/client32.png",
    alt: "client 32",
  },
  {
    id: 33,
    src: "/SolarNest/assets/client33.png",
    alt: "client 33",
  },
  {
    id: 34,
    src: "/SolarNest/assets/client34.png",
    alt: "client 34",
  },
  {
    id: 35,
    src: "/SolarNest/assets/client35.png",
    alt: "client 35",
  },
  {
    id: 36,
    src: "/SolarNest/assets/client36.png",
    alt: "client 36",
  },
  {
    id: 37,
    src: "/SolarNest/assets/client37.png",
    alt: "client 37",
  },
  {
    id: 38,
    src: "/SolarNest/assets/client38.png",
    alt: "client 38",
  },
  {
    id: 39,
    src: "/SolarNest/assets/client39.png",
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
