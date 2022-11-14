import React from "react";
import styles from "../../style/Features.module.css";
import featureImage from "../../assets/featureImage.jpg";
import Height from "../../assets/Height.jpg";
import Closet from "../../assets/Closet.jpg";
import Shirt from "../../assets/Shirt.jpg";
import { FaPlay } from "react-icons/fa";


const Features = ({ darkmode }) => {
  const bodyContent = [
    {
      icon: Height,
      title: "Body measurement tracking",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
    {
      icon: Closet,
      title: "In home trial of clothes and closet",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
    {
      icon: Shirt,
      title: "Recommendation of clothes using AI",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    },
  ];
  return (
    <div className={darkmode ? `${styles.container} ${styles.darkContainer}` : styles.container}>
      <div className={styles.mainSection} style={darkmode ? { backgroundColor: "#08080C" } : {}}>
        <img
          className={styles.featureImage}
          src={featureImage}
          alt="features"
        />
        <div className={styles.content}>
          <h1>EVERYTHING YOU NEED!</h1>
          <div className={styles.organizeLine}>
            <div className={styles.line}></div>
            <div className={styles.greyLine}></div>
          </div>
          <div className={styles.body}>
            {bodyContent.map((content, i) => (
              <div key={i} className={styles.bodyContent}>
                <div className={styles.icon} style={{ background: `${!darkmode ? "#1EE1B3" : "#fff"}` }}>
                  <img src={content.icon} alt="icons" />
                </div>
                <div>
                  <h3>{content.title}</h3>
                  <p style={!darkmode ? { color: "#000" } : {}}>{content.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.footerSection} ${darkmode ? styles.darkfooterSection : styles.lightfooterSection}`}>
        <h2>
          Enhance your shopping experience <br /> with elevated expertise and efficient time constraints.
        </h2>
        <div className={styles.line}></div>
        <div className={styles.icon}>
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default Features;
