import React from 'react';
import AboutCSS from "./About.module.css";
import pdfFile from '../../files/Portfolio_CV.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";

function About(){
  return (
    <>
      <div className={`${AboutCSS.container}`} id="about">
              <h4 className={`${AboutCSS.h4}`}>ABOUT</h4>
              <p className={`${AboutCSS.aboutText}`}>
                  In 2021, I transitioned into programming, graduating from 
                  <a href="https://johnabbott.qc.ca" target="_blank" rel="noreferrer" className={`${AboutCSS.link}`}> John Abbott College's</a> full-stack application development program in 2023. During an internship at<a href="https://www.kinoklik.ca/" target="_blank" rel="noreferrer" className={`${AboutCSS.link}`}> KinoKlik</a>, I assumed roles in both front-end and back-end development, also taking charge as a team leader, facilitating scrum meetings and mentoring colleagues.
              </p> 
              <p className={`${AboutCSS.aboutText}`}>
                  Post-internship, I joined 
                  <a href="https://veleax.com" target="_blank" rel="noreferrer" className={`${AboutCSS.link}`}> Veleax Inc.</a>, where I led the development of an application from inception to implementation, employing the latest technologies to meet the company's objectives. This experience deepened my technical expertise and underscored the importance of innovation and continuous learning in software development. 
              </p> 
              <p className={`${AboutCSS.aboutText}`}>
                  Today, I bring a solid background in full-stack development, combining technical proficiency with a passion for crafting seamless digital solutions. With a track record of success in both team environments and individual projects, I am committed to delivering exceptional results and driving forward innovation in the field.
              </p><br></br>
              <p>
                  <a href={pdfFile} target="_blank" rel="noreferrer" className={`${AboutCSS.cv}`}>
                    <span className={`${AboutCSS.resume}`}>RESUME</span>
                    <FontAwesomeIcon icon={faArrowsRotate} size="sm" className={`${AboutCSS.arrow}`}/>
                  </a>
              </p> 
      </div>
    </>
  );
};

export default About;