import React, { useState } from "react";
import styles from "./AllServices.module.css";

const ServiceCard = ({ title, description, index, image }) => {
  const [expanded, setExpanded] = useState(false);

  // Controls how much of the description to show initially
  const maxDescriptionLength = 80;
  const isLongDescription = description.length > maxDescriptionLength;

  // Truncated version of description for initial display
  const shortDescription = isLongDescription
    ? `${description.substring(0, maxDescriptionLength)}...`
    : description;

  // Toggle expanded state
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={styles.service_box}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {image && (
        <div className={styles.service_image_container}>
          <img src={image} alt={title} className={styles.service_image} />
        </div>
      )}
      <h3>{title}</h3>
      <p style={{ whiteSpace: "pre-line" }}>
        {expanded || !isLongDescription ? description : shortDescription}
      </p>
      {isLongDescription && (
        <button onClick={toggleExpand} className={styles.read_more}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
