import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import specIcon from "../../assets/specIcon.png";
import styled from "@emotion/styled";
import styles from "./Accordion.module.css";

export default function SimpleAccordion({ darkmode }) {

  const h3Styles = {
    margin: "0px",
    padding: "10px",
    color: `${darkmode && "#ddd"} `
  };
  const divStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const CustomAccordionDetails = styled(AccordionDetails)`
    display: flex;
    padding: 20px;
    align-items: flex-start;
  `;
  const CustomTypography = styled(Typography)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  `;
  const CustomAccordion = styled(Accordion)`
    background-color: ${darkmode ? "#000" : "#fff"};
    width: 70%;
    @media (max-width: 780px) {
      width: 90%;
    }
    color: ${darkmode ? "#fff" : "#000"};
    border: 1px solid ${darkmode ? "#303036" : "#000"};
  `;



  return (
    <div style={divStyle}>
      <h2 style={{ marginTop: "50px" }}>Standard Features</h2>
      <hr
        style={{
          width: "40px",
          height: "3px",
          margin: "0 0 30px 0",
          borderWidth: "0",
          backgroundColor: "#1EE1B3",
        }}
      />
      <CustomAccordion elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="theme" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 style={h3Styles} className={styles.accordionTitle}> HARDWARE</h3>
        </AccordionSummary>
        <CustomAccordionDetails>
          <img src={specIcon} alt="spec Icon" />
          <CustomTypography component={"div"} className={styles.typographyStyle}>
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
            <hr align="right" />
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
          </CustomTypography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="theme" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 style={h3Styles} className={styles.accordionTitle}> HARDWARE</h3>
        </AccordionSummary>
        <CustomAccordionDetails>
          <img src={specIcon} alt="spec Icon" />
          <CustomTypography component={"div"} className={styles.typographyStyle}>
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
            <hr align="right" />
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
          </CustomTypography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="theme" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 style={h3Styles} className={styles.accordionTitle}> HARDWARE</h3>
        </AccordionSummary>
        <CustomAccordionDetails>
          <img src={specIcon} alt="spec Icon" />
          <CustomTypography component={"div"} className={styles.typographyStyle}>
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
            <hr align="right" />
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
          </CustomTypography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="theme" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 style={h3Styles} className={styles.accordionTitle}> HARDWARE</h3>
        </AccordionSummary>
        <CustomAccordionDetails>
          <img src={specIcon} alt="spec Icon" />
          <CustomTypography component={"div"} className={styles.typographyStyle}>
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
            <hr align="right" />
            Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
          </CustomTypography>
        </CustomAccordionDetails>
      </CustomAccordion>
    </div>
  );
}
