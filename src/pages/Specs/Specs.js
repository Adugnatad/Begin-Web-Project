import React from "react";
import styles from "../../style/Specs.module.css";
import SimpleAccordion from "../../components/Accordion/Accordion";
import Slider from "../../components/Slider/Slider";
import styled from "@emotion/styled";

const Specs = ({ darkmode }) => {
  const Spechr = styled.hr`
    width: 40px;
    height: 2px;
    margin: 30px 0;
    border-width: 0;
    background-color: #1EE1B3;
  `;
  return (
    <div className={darkmode ? styles.darkContainer : styles.container}>

      <SimpleAccordion darkmode={darkmode} />
      <h2>
        Cross store shopping in real time and cloth simulation on your own
        character!
      </h2>
      <Spechr />
      <Slider />
    </div>
  );
};

export default Specs;
