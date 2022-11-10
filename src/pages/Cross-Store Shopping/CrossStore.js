import { Button } from "@mui/material";
import React from "react";
import styles from "../../style/CrossStore.module.css";
const CrossStore = ({ darkmode }) => {
  return (
    <div className={darkmode ? `${styles.container} ${styles.dark}` : `${styles.container} ${styles.light}`}>
      <div className={styles.content}>
        <p style={!darkmode ? { color: "#000" } : {}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulpuLorem ipsum dolor
          sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
          ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo con
        </p>
        <button className={darkmode ? `${styles.crossStoreButton} ${styles.darkbtn}` : `${styles.crossStoreButton} ${styles.lightbtn}`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CrossStore;
