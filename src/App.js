import HomePage from "./pages/HomePage/HomePage";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./theme";
import About from "./pages/About/About";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import { useRef } from "react";
import Features from "./pages/Features/Features";
import WhyBegin from "./pages/WhyBegin/WhyBegin";
import Specs from "./pages/Specs/Specs";
import CrossStore from "./pages/Cross-Store Shopping/CrossStore";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  const HomePageSection = useRef();
  const AboutSection = useRef();
  const FeatureSection = useRef();
  const WhyBeginSection = useRef();
  const SpecSection = useRef();
  const CrossStoreSection = useRef();
  const ContactSection = useRef();

  const [darkmode, setDarkmode] = useState(false);

  const changeDarkmode = () => {
    setDarkmode(!darkmode);
  }

  const focus = (page) => {
    if (page === "AboutSection") {
      AboutSection.current.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "FeatureSection") {
      FeatureSection.current.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "WhyBeginSection") {
      WhyBeginSection.current.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "Spec") {
      SpecSection.current.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "Cross") {
      CrossStoreSection.current.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "Contact") {
      ContactSection.current.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "HomePageSection") {
      HomePageSection.current.scrollIntoView({ behavior: "smooth" });

    }
  };

  return (
    <div className="container">
      <CssBaseline />
      <div className="container">
        <ThemeProvider theme={Theme}>
          <Header focus={focus} darkmode={darkmode} changeDarkmode={changeDarkmode} />
          <div ref={HomePageSection}>
            <HomePage darkmode={darkmode} changeDarkmode={changeDarkmode} />
          </div>
          <div ref={AboutSection}>
            <About darkmode={darkmode} />
          </div>
          <div ref={FeatureSection}>
            <Features darkmode={darkmode} />
          </div>
          <div ref={WhyBeginSection}>
            <WhyBegin darkmode={darkmode} />
          </div>
          <div ref={SpecSection}>
            <Specs darkmode={darkmode} />
          </div>
          <div ref={CrossStoreSection}>
            <CrossStore darkmode={darkmode} />
          </div>
          <div ref={ContactSection}>
            <Contact focus={focus} darkmode={darkmode} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
