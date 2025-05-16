import React from 'react'
import styles from './Services.module.css'
import { Link } from 'react-router-dom'

const Services = () => {
  // Sample service links - you can replace with your actual services
  const serviceLinks = [
    { name: "Renewable Energy Solution", path: "renew" },
    { name: "Water & Gas Infrastructure", path: "water" },
    { name: "Pre Construction & Value Engineering", path: "pre" },
    { name: "Infrastructure Development", path: "infrastructure" },
    { name: "Bid and Tendering Services", path: "bid" },
    { name: "Electricity Infrastructure", path: "electricity" },
    { name: "MEP", path: "mep" },
    { name: "Construction & Civil Engineering", path: "constructon" },
    { name: "Earthwork and Site Development", path: "earth" },
    { name: "Integrated Facilities Management", path: "integerated" },
  ];

  return (
    <div className={styles.service_container}>
      <div className={styles.content_wrapper}>
        <h1 className={styles.service_heading}>Services</h1>
        
        <div className={styles.links_container}>
          {serviceLinks.map((service, index) => (
            <Link 
              key={index} 
              to={service.path} 
              className={styles.service_box}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services