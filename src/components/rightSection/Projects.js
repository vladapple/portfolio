import React from 'react';
import ProjectsCSS from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";


function Projects(){
  const projects = [
    {
      name: "Veleax",
      desc: "This practical implementation was custom-developed specifically for Veleax Company, a provider of application development services. Within this system, clients have the ability to initiate contact with Veleax through a dedicated contact form, receive confirmation emails, and register for training courses. Additionally, users are empowered to register, update their profiles, apply for available positions and professional courses, and track the progress of their applications.",
      tech: ["ReactJS", "Express", "NodeJS", "MongoDB", "AWS S3", "Heroku"],
      git: "https://github.com/vladapple/veleax",
      demo: "https://www.veleax.com",
      image: "https://veleax.s3.us-east-2.amazonaws.com/veleax.JPG",
      access: "private"
    },
    {
      name: "Moonrise Movies",
      desc: "This collaborative college project initiative aims to develop an application facilitating customers in accessing real-time information about the screenings at drive-in theaters, including schedules, movie titles, and pertinent details. Additionally, the platform will enable users to contribute feedback through ratings and reviews of the cinematic experiences.",
      tech: ["ASP.NET Core", "ASP.NET Identity", "Entity Framework", "Google Charts API", "Microsoft SQL Server", "Azure Storage Blobs", "Azure Application"],
      git: "https://github.com/vladapple/MoonriseMovies",
      demo: "https://moonrisemovies.azurewebsites.net/",
      image: "https://veleax.s3.us-east-2.amazonaws.com/moonrise.JPG",
      access: "public"
    },
    {
      name: "Green Horn Recruits",
      desc: "This collaborative college project aims to provide a platform for recruitment agents to view available jobs from business clients and pre-screen the best possible candidates for the jobs.",
      tech: ["WPF", "C#", "Azure", "Microsoft SQL Server"],
      git: "https://github.com/vladapple/GreenHorn",
      demo: "https://github.com/vladapple/GreenHorn",
      image: "https://veleax.s3.us-east-2.amazonaws.com/Green+horn+recruits.JPG",
      access: "public"
    }
  ]
  return (
    <div id="projects" className={`${ProjectsCSS.container}`}>
      <h4 className={`${ProjectsCSS.h4}`}>PROJECTS</h4>
      <div>
        {projects.map((project) => {
          return (
                  <div key={project.name} className={`${ProjectsCSS.project}`}>
                    <h3 className={`${ProjectsCSS.toolHeading}`}>Project: <a href={`${project.demo}`} target="_blank" rel="noreferrer" className={`${ProjectsCSS.toolHeadingColor}`}>{project.name}</a></h3>
                    <p className={`${ProjectsCSS.aboutText}`}>{project.desc}</p>
                    <a href={`${project.demo}`} target="_blank" rel="noreferrer">
                      <img src={`${project.image}`} alt={`${project.name}`} className={`${ProjectsCSS.projectImg}`}/>
                    </a><br></br>
                    {project.tech.map(item => (
                      <button key={item.toString()} className={`${ProjectsCSS.toolName}`}>{item}</button>
                    ))}
                    <div className={`${ProjectsCSS.icons}`}>
                      {project.access === "private" ? 
                      (
                        <FontAwesomeIcon icon={faGithub} className={`${ProjectsCSS.icon1}`} title="Private repository"/>
                      ):(
                        <a href={`${project.git}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={`${ProjectsCSS.icon}`}/></a>
                      )}
                      <a href={`${project.demo}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDesktop} size="sm" className={`${ProjectsCSS.icon}`}/></a>
                    </div> 
                  </div>
                );
        })}
      </div>
    </div>
  );
};

export default Projects;