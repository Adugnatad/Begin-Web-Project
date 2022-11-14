import DarkMode from "../../assets/DarkMode.svg";
import LightMode from "../../assets/LightMode.svg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import React from "react";
import styles from "../../style/HomePage.module.css";
const HomePage = ({ darkmode, changeDarkmode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.darkmodeButton} onClick={() => changeDarkmode(!darkmode)}><img src={darkmode ? DarkMode : LightMode} alt="dark-mode icon" /></button>
        <p style={{ margin: 0, color: "#1EE1B3", fontSize: "15px" }}>TAGLINE</p>
        <h1 className={styles.h1style}>BEGIN </h1>
        <hr
          style={{
            width: "80px",
            borderWidth: 0,
            height: 3,
            backgroundColor: "#1EE1B3",
            marginRight: 0,
          }}
        />
        <p className={styles.homepageContent}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident,
        </p>
        <button className={styles.getstartedButton}>
          Get Started
        </button>
      </div>
      <div className={styles.social}>
        <AiOutlineInstagram className={styles.icon} />
        <AiOutlineTwitter className={styles.icon} />
        <FaFacebookF className={styles.icon} />
      </div>
    </div>
  );
};

export default HomePage;
