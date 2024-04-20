import React from "react";
import { useEffect } from "react";
import Details from "../components/leftSection/Details";
import About from "../components/rightSection/About";
import MySkills from "../components/rightSection/MySkills";
import Projects from "../components/rightSection/Projects";
import Contact from "../components/rightSection/Contact";
import PortfolioCSS from "./Portfolio.module.css"
import { Inter } from "../fonts";

function Portfolio() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <section className={`${PortfolioCSS.container}`}> 
      <Inter>
      <div className={`${PortfolioCSS.leftSection}`}>
        <div className={`${PortfolioCSS.subLeftSection}`}>
            <Details></Details>
        </div>
      </div>
        <div className={`${PortfolioCSS.rightSection}`}>
            <About></About>
            <MySkills></MySkills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
      </Inter>
    </section>
  );
}

export default Portfolio;
