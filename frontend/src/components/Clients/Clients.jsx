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










// import React, { useState, useCallback } from "react";
// import styles from "./Clients.module.css";
// import Marquee from "react-fast-marquee";
// import { useLanguage } from "../../context/LanguageContext";
// import { en, ar } from "../../translations";



// const clients = [
//   {
//     id: 1,
//     src: "/assets/client1.png",
//     webp: "/assets/client1.webp",
//     alt: "Client 1 Logo",
//     name: "Client 1"
//   },
//   {
//     id: 2,
//     src: "/assets/client2.png",
//     webp: "/assets/client2.webp",
//     alt: "Client 2 Logo",
//     name: "Client 2"
//   },
//   {
//     id: 3,
//     src: "/assets/client3.png",
//     webp: "/assets/client3.webp",
//     alt: "Client 3 Logo",
//     name: "Client 3"
//   },
//   {
//     id: 4,
//     src: "/assets/client4.png",
//     webp: "/assets/client4.webp",
//     alt: "Client 4 Logo",
//     name: "Client 4"
//   },
//   {
//     id: 5,
//     src: "/assets/client5.png",
//     webp: "/assets/client5.webp",
//     alt: "Client 5 Logo",
//     name: "Client 5"
//   },
//   {
//     id: 6,
//     src: "/assets/client6.png",
//     webp: "/assets/client6.webp",
//     alt: "Client 6 Logo",
//     name: "Client 6"
//   },
//   {
//     id: 7,
//     src: "/assets/client7.png",
//     webp: "/assets/client7.webp",
//     alt: "Client 7 Logo",
//     name: "Client 7"
//   },
//   {
//     id: 8,
//     src: "/assets/client8.png",
//     webp: "/assets/client8.webp",
//     alt: "Client 8 Logo",
//     name: "Client 8"
//   },
//   {
//     id: 9,
//     src: "/assets/client9.png",
//     webp: "/assets/client9.webp",
//     alt: "Client 9 Logo",
//     name: "Client 9"
//   },
//   {
//     id: 10,
//     src: "/assets/client10.png",
//     webp: "/assets/client10.webp",
//     alt: "Client 10 Logo",
//     name: "Client 10"
//   },
//   {
//     id: 11,
//     src: "/assets/client11.png",
//     webp: "/assets/client11.webp",
//     alt: "Client 11 Logo",
//     name: "Client 11"
//   },
//   {
//     id: 12,
//     src: "/assets/client12.png",
//     webp: "/assets/client12.webp",
//     alt: "Client 12 Logo",
//     name: "Client 12"
//   },
//   {
//     id: 13,
//     src: "/assets/client13.png",
//     webp: "/assets/client13.webp",
//     alt: "Client 13 Logo",
//     name: "Client 13"
//   },
//   {
//     id: 14,
//     src: "/assets/client14.png",
//     webp: "/assets/client14.webp",
//     alt: "Client 14 Logo",
//     name: "Client 14"
//   },
//   {
//     id: 15,
//     src: "/assets/client15.png",
//     webp: "/assets/client15.webp",
//     alt: "Client 15 Logo",
//     name: "Client 15"
//   },
//   {
//     id: 16,
//     src: "/assets/client16.png",
//     webp: "/assets/client16.webp",
//     alt: "Client 16 Logo",
//     name: "Client 16"
//   },
//   {
//     id: 17,
//     src: "/assets/client17.png",
//     webp: "/assets/client17.webp",
//     alt: "Client 17 Logo",
//     name: "Client 17"
//   },
//   {
//     id: 18,
//     src: "/assets/client18.png",
//     webp: "/assets/client18.webp",
//     alt: "Client 18 Logo",
//     name: "Client 18"
//   },
//   {
//     id: 19,
//     src: "/assets/client19.png",
//     webp: "/assets/client19.webp",
//     alt: "Client 19 Logo",
//     name: "Client 19"
//   },
//   {
//     id: 20,
//     src: "/assets/client20.png",
//     webp: "/assets/client20.webp",
//     alt: "Client 20 Logo",
//     name: "Client 20"
//   },
//   {
//     id: 21,
//     src: "/assets/client21.png",
//     webp: "/assets/client21.webp",
//     alt: "Client 21 Logo",
//     name: "Client 21"
//   },
//   {
//     id: 22,
//     src: "/assets/client22.png",
//     webp: "/assets/client22.webp",
//     alt: "Client 22 Logo",
//     name: "Client 22"
//   },
//   {
//     id: 23,
//     src: "/assets/client23.png",
//     webp: "/assets/client23.webp",
//     alt: "Client 23 Logo",
//     name: "Client 23"
//   },
//   {
//     id: 24,
//     src: "/assets/client24.png",
//     webp: "/assets/client24.webp",
//     alt: "Client 24 Logo",
//     name: "Client 24"
//   },
//   {
//     id: 25,
//     src: "/assets/client25.png",
//     webp: "/assets/client25.webp",
//     alt: "Client 25 Logo",
//     name: "Client 25"
//   },
//   {
//     id: 26,
//     src: "/assets/client26.png",
//     webp: "/assets/client26.webp",
//     alt: "Client 26 Logo",
//     name: "Client 26"
//   },
//   {
//     id: 27,
//     src: "/assets/client27.png",
//     webp: "/assets/client27.webp",
//     alt: "Client 27 Logo",
//     name: "Client 27"
//   },
//   {
//     id: 28,
//     src: "/assets/client28.png",
//     webp: "/assets/client28.webp",
//     alt: "Client 28 Logo",
//     name: "Client 28"
//   },
//   {
//     id: 29,
//     src: "/assets/client29.png",
//     webp: "/assets/client29.webp",
//     alt: "Client 29 Logo",
//     name: "Client 29"
//   },
//   {
//     id: 30,
//     src: "/assets/client30.png",
//     webp: "/assets/client30.webp",
//     alt: "Client 30 Logo",
//     name: "Client 30"
//   },
//   {
//     id: 31,
//     src: "/assets/client31.png",
//     webp: "/assets/client31.webp",
//     alt: "Client 31 Logo",
//     name: "Client 31"
//   },
//   {
//     id: 32,
//     src: "/assets/client32.png",
//     webp: "/assets/client32.webp",
//     alt: "Client 32 Logo",
//     name: "Client 32"
//   },
//   {
//     id: 33,
//     src: "/assets/client33.png",
//     webp: "/assets/client33.webp",
//     alt: "Client 33 Logo",
//     name: "Client 33"
//   },
//   {
//     id: 34,
//     src: "/assets/client34.png",
//     webp: "/assets/client34.webp",
//     alt: "Client 34 Logo",
//     name: "Client 34"
//   },
//   {
//     id: 35,
//     src: "/assets/client35.png",
//     webp: "/assets/client35.webp",
//     alt: "Client 35 Logo",
//     name: "Client 35"
//   },
//   {
//     id: 36,
//     src: "/assets/client36.png",
//     webp: "/assets/client36.webp",
//     alt: "Client 36 Logo",
//     name: "Client 36"
//   },
//   {
//     id: 37,
//     src: "/assets/client37.png",
//     webp: "/assets/client37.webp",
//     alt: "Client 37 Logo",
//     name: "Client 37"
//   },
//   {
//     id: 38,
//     src: "/assets/client38.png",
//     webp: "/assets/client38.webp",
//     alt: "Client 38 Logo",
//     name: "Client 38"
//   },
//   {
//     id: 39,
//     src: "/assets/client39.png",
//     webp: "/assets/client39.webp",
//     alt: "Client 39 Logo",
//     name: "Client 39"
//   }
// ];
















// const ClientLogo = ({ client, isVisible }) => {
//   const [imageError, setImageError] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = useCallback(() => {
//     setImageLoaded(true);
//   }, []);

//   const handleImageError = useCallback(() => {
//     setImageError(true);
//   }, []);

//   if (!isVisible) {
//     return <div className={styles.logoContainer} />;
//   }

//   return (
//     <div className={styles.logoContainer}>
//       {!imageError ? (
//         <picture>
//           {/* Use WebP for modern browsers */}
//           <source srcSet={client.webp} type="image/webp" />
//           {/* Fallback to PNG */}
//           <img
//             src={client.src}
//             alt={client.alt}
//             className={`${styles.logoImage} ${imageLoaded ? styles.loaded : styles.loading}`}
//             loading="lazy"
//             onLoad={handleImageLoad}
//             onError={handleImageError}
//             title={client.name}
//           />
//         </picture>
//       ) : (
//         // Fallback placeholder if image fails to load
//         <div className={styles.logoPlaceholder}>
//           <span className={styles.placeholderText}>{client.name}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// const Clients = () => {
//   const { isArabic } = useLanguage();
//   const t = isArabic ? ar : en;

//   return (
//     <div className={styles.clientSection}>
//       <div className={styles.headingContainer}>
//         <div className={styles.heading}>
//           <p>{t.clients.heading}</p>
//         </div>
//       </div>
//       <div className={styles.carouselContainer}>
//         <Marquee 
//           speed={40} 
//           gradient={false} 
//           pauseOnHover={true}
//           gradientColor="rgba(255, 255, 255, 0.1)"
//           gradientWidth={50}
//         >
//           {clients.map((client) => (
//             <ClientLogo 
//               key={client.id} 
//               client={client} 
//               isVisible={true} 
//             />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Clients;