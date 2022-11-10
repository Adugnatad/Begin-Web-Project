import { Button } from "@mui/material";
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image1L from "../../assets/Image1L.png";
import Image2L from "../../assets/Image2L.png";
import Image3L from "../../assets/Image3L.png";
import Image4L from "../../assets/Image4L.png";
import Image5L from "../../assets/Image5L.png";
import styles from "./Slider.module.css";

const Slider = () => {
  const [i, setI] = useState(0);
  const images = [
    [Image1, Image2, Image3L, Image4, Image5],
    [Image5, Image1, Image2L, Image3, Image4],
    [Image4, Image5, Image1L, Image2, Image3],
    [Image3, Image4, Image5L, Image1, Image2],
    [Image2, Image3, Image4L, Image5, Image1],
  ];

  const goLeft = () => {
    setI((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      }
      return images.length - 1 + prevValue;
    });
  };

  const goRight = () => {
    setI((prevValue) => {
      if (prevValue < images.length - 1) {
        return prevValue + 1;
      }
      return images.length - 1 - prevValue;
    });
  };

  const carousel = () => {
    return images[i].map((image, index) => (
      <div key={index} className={styles.imageContainer}>
        <img key={index} src={image} alt="img" className={styles.image} />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <button className={styles.iconContainer}>
        <MdKeyboardArrowLeft className={styles.icon} onClick={() => goLeft()} />
      </button>
      {carousel()}

      <button className={styles.iconContainer}>
        <MdKeyboardArrowRight
          className={styles.icon}
          onClick={() => goRight()}
        />
      </button>
    </div>
  );
};

export default Slider;
