import React, { useState } from "react";
import styles from "../../style/About.module.css";
import UnrealEngine from "../../assets/UnrealEngineLogo.svg";
import Nvidia from "../../assets/NvidiaLogo 1.svg";
import Marvelous from "../../assets/MarvelousLogo 1.svg";
import Clo from "../../assets/CloLogo 1.svg";
import Browzwear from "../../assets/BrowzwearLogo 1.svg";
import AboutImage from "../../assets/AboutImage.svg";
import AboutImage2 from "../../assets/AboutImage2.png";
import AboutImage3 from "../../assets/AboutImage3.png";
import { Button } from "@mui/material";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const About = ({ darkmode }) => {
  const [image, setImage] = useState(0);
  const images = [AboutImage, AboutImage2, AboutImage3];
  const handleForward = () => {
    if (image < images.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  };
  const handleBackward = () => {
    if (image > 0) {
      setImage(image - 1);
    } else {
      setImage(images.length - 1);
    }
  };
  return (
    <div className={darkmode ? `${styles.container} ${styles.dark}` : `${styles.container} ${styles.light}`}>
      <div className={styles.companies}>
        <img src={UnrealEngine} alt="unReal" />
        <img src={Nvidia} alt="Nvidia" />
        <img src={Browzwear} alt="Browzwear" />
        <img src={Clo} alt="Clo" />
        <img src={Marvelous} alt="Marvelous" />
      </div>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2 style={{ margin: "0" }}>Introducing</h2>
          <div className={styles.organizeLine}>
            <div className={styles.line}></div>
            <div className={styles.greyLine}></div>
          </div>
          <p>
            The newly designed BEGIN will completely alter the reality of
            fashion, individually and commercially as we know it. A major
            attribute of this mirror is to provide the user with the resources
            of complex fashion and style that many find difficult to obtain. Its
            main focus will be the user’s stylistic preferences and will then
            provide the user with an outfit which meets their own style while
            simultaneously using expert knowledge to ensure an outfit of pride.
            <br />
            <br />
            Because self-presentation is such a prominent element of judgement,
            all kinds of people are vehemently dressing in all kinds of ways to
            fit certain descriptions, norms, and anything that will allow their
            confidence to break through the cracks of self-doubt.
          </p>
          <button className={darkmode ? `${styles.learnmoreButton} ${styles.learnmoreButtonDark}` : `${styles.learnmoreButton} ${styles.learnmoreButtonLight}`}>
            Learn More
          </button>
        </div>
        <div className={styles.corousel}>
          <hr
            className={styles.imageBar}
            style={{
              marginLeft: `${image === 0 ? "50px" : image === 1 ? "150px" : "220px"}`,
            }}
          />
          <div className={styles.image}>
            <img src={images[image]} alt="AboutImage" />
            <div className={styles.imageTag}>
              <h3 style={{ color: "#1EE1B3" }}>Lorem Ipsum</h3>
              <p style={{ margin: 0, width: "300px", textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
            </div>
            <div className={styles.navigationIcons}>
              <IoChevronBackSharp
                className={styles.icons}
                onClick={handleBackward}
              />
              <IoChevronForwardSharp
                className={styles.icons}
                onClick={handleForward}
              />
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default About;
