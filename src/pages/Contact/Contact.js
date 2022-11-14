import React from "react";
import contactStyles from "../../style/Contact.module.css";
import Zozosuit from "../../assets/Zozosuit.jpg";
import { TiArrowSortedUp } from "react-icons/ti";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Contact = ({ focus, darkmode }) => {
  return (
    <div className={contactStyles.container}>
      <div className={contactStyles.topSection}>
        <h2>
          Using <span>nvidia</span> cloud to run and <br />
          produce realistic results.
        </h2>
      </div>

      <div className={contactStyles.middleSection}>
        <div className={contactStyles.zozoContainer}>
          <img src={Zozosuit} className={contactStyles.zozosuitImage} alt="suit" />
          <div className={contactStyles.separator}>
            <hr className={contactStyles.zozosuitLine} />
            <h3>ZOZOSUIT</h3>
          </div>
        </div>
        <p>
          In collaboration with ZOZOSUIT, our mirror will also provide a highly
          accurate replica of the user’s body via scanning and image processing.
          Through this, we will also be able to provide motion tracking for the
          user-customized metahuman in real time, making the experience
          incredibly realistic provided the mirror will be touch screen and
          interactive.
        </p>
      </div>

      <div className={contactStyles.bottomSection}>
        <div className={contactStyles.bottomMain}>
          <TiArrowSortedUp size={60} className={contactStyles.arrowIcon} onClick={() => focus("HomePageSection")} />
          <h2>BEGIN</h2>
          <div className={contactStyles.social}>
            <FaFacebookF className={contactStyles.icon} />
            <AiOutlineTwitter className={contactStyles.icon} />
            <AiOutlineInstagram className={contactStyles.icon} />
          </div>
        </div>
        <div className={contactStyles.footer}>
          <div className={contactStyles.rights}>
            <AiOutlineCopyrightCircle />
            <p>All Rights Reserved</p>
          </div>
          <div className={contactStyles.terms}>
            <a>Terms and Conditions</a>
            <p style={{ margin: "0 15px" }}>•</p>
            <a style={{ marginLeft: 0 }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
