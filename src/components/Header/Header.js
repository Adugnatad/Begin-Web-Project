import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import DarkMode from "../../assets/DarkMode.svg";
import LightMode from "../../assets/LightMode.svg";
import { GrClose } from "react-icons/gr";
import { FaBars } from 'react-icons/fa';

const Header = ({ focus, darkmode, changeDarkmode }) => {
    const [navOpen, setNavOpen] = useState(false);


    useEffect(() => {
        const ulElement = document.getElementsByTagName('ul')[0];
        const navOverlay = document.getElementsByClassName(styles.overlay)[0];
        const MenuButton = document.getElementsByClassName(styles.menuButton)[0];
        const handleMenuClick = () => {
            ulElement.classList.add(styles.appbarContainer_open);
            navOverlay.classList.add(styles.navoverlay_open);
        }
        const handleNavOverlayClick = () => {
            ulElement.classList.remove(styles.appbarContainer_open);
            navOverlay.classList.remove(styles.navoverlay_open);
            setNavOpen(false);
        }

        navOverlay.addEventListener('click', handleNavOverlayClick);
        MenuButton.addEventListener("click", handleMenuClick);

        if (navOpen) {
            handleNavOverlayClick();
        }

        return () => {
            MenuButton.removeEventListener("click", handleMenuClick);
            navOverlay.removeEventListener("click", handleNavOverlayClick);
        };
    }, [navOpen]);

    return (
        <div className={!darkmode ? `${styles.appbarContainer} ${styles.appbarContainerLight}` : `${styles.appbarContainer} ${styles.appbarContainerDark}`}>
            <ul>
                <li className={styles.listHeader}>
                    <span>BEGIN</span>
                    <GrClose size={20} className={styles.closeIcon} onClick={() => setNavOpen(!navOpen)} />
                </li>
                <li onClick={() => focus("AboutSection")}>About</li>
                <li onClick={() => focus("FeatureSection")}>Features</li>
                <li onClick={() => focus("WhyBeginSection")}>Why Begin</li>
                <li onClick={() => focus("Spec")}>Specs</li>
                <li onClick={() => focus("Cross")}>Cross-Store Shopping</li>
                <li onClick={() => focus("Contact")}>Contact</li>
            </ul>
            <button className={styles.menuButton}><FaBars size={20} /></button>
            <div className={styles.overlay}></div>
            <div className={styles.buttonSection}>
                <button className={styles.darkmodeButton} onClick={() => changeDarkmode(!darkmode)}><img src={darkmode ? DarkMode : LightMode} alt="dark-mode icon" /></button>
                <button className={styles.Login}>Login</button>
                <button className={styles.signupButton}>Sign Up</button>
            </div>
        </div>
    )
}

export default Header