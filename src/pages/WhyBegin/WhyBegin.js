import React, { useState, useEffect } from "react";
import styles from "../../style/WhyBegin.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Jacket from "../../assets/Jacket.jpg";

const WhyBegin = ({ darkmode }) => {
  const cardContent = [
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi",
    },
  ];


  return (
    <div className={styles.container}>
      <div className={styles.mainContainer} style={{ backgroundColor: `${darkmode ? "#000" : "#3A322F"}` }}>
        <h2 style={{ textAlign: "center" }}> How it is useful for user and companies</h2>
        <div className={styles.line} style={{ width: "50px" }}></div>
        <div className={styles.cardContainer}>
          {cardContent.map((content, i) => (
            <div key={i} className={styles.card} style={darkmode ? { backgroundColor: "#0C0C11" } : {}}>
              <div className={styles.title}>
                <h3>{content.title}</h3>
                <MdOutlineKeyboardArrowRight color="1EE1B3" size={25} />
              </div>
              <p style={{ fontSize: "14px" }}>{content.body}</p>
            </div>
          ))}
        </div>
        <button className={darkmode ? `${styles.learnmoreButton} ${styles.darkbtn}` : `${styles.learnmoreButton} ${styles.lightbtn}`}>
          Learn More
        </button>
      </div>
      <div className={styles.footerContainer} style={
        darkmode ? { margin: "0", backgroundColor: "#0C0C11" } : { margin: "100px" }
      }>
        <div className={styles.content}>
          <h2>3D clothing simulation on user-designed metahuman</h2>
          <div className={styles.organizeLine}>
            <div className={styles.line}></div>
            <div className={styles.greyLine}></div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie
          </p>
          <div>
            <button className={styles.discover}>
              Discover More
              <MdOutlineKeyboardArrowRight color="1EE1B3" size={25} />
            </button>
          </div>
        </div>
        <div className={styles.footerImage}>
          <img src={Jacket} alt="Jacket" />
        </div>
      </div>
    </div>
  );
};

export default WhyBegin;
