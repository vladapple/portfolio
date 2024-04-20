import React from 'react';
import MySkillsCSS from "./MySkills.module.css";

function MySkills(){
  const tools = [
    {
      tool_name: "Programming Languages",
      tool_desc: ["Java", "C#", "Python", "JavaScript", "PHP", "HTML & CSS", "SQL"],
    },
    {
      tool_name: "Front-End",
      tool_desc: ["Bootstrap", "React", "WPF", "Thymeleaf", "Razor Pages", "Django", "Blazor"],
    },
    {
      tool_name: "Back-End",
      tool_desc: ["Java Spring Boot", "NodeJS", "Express", "Asp.NET"],
    },
    {
      tool_name: "Databases",
      tool_desc: ["MySQL", "Microsoft SQL Server", "SQLite", "PostgreSQL", "MongoDB"],
    },
    {
      tool_name: "Hosting",
      tool_desc: ["AWS(EC2, S3)", "Azure Cloud Services", "Heroku"],
    },
    {
      tool_name: "Editors",
      tool_desc: ["VS Code", "Visual Studio", "PHPStorm", "PyCharm", "Eclipse", "Spring Tool Suite"],
    },
    {
      tool_name: "Testing & QA",
      tool_desc: ["Postman", "JUnit", "Javadoc"],
    },
    {
      tool_name: "Dev. Process",
      tool_desc: ["Agile Methodology", "Scrum", "Trello (Kanban board)", "Git (GitHub, Bitbucket)"],
    },
  ]
  return (
    <>
      <div className={`${MySkillsCSS.container}`} id="skills">
        <div className={`${MySkillsCSS.skills}`}>
          <h4 className={`${MySkillsCSS.h4}`}>SKILLS</h4>
            {tools.map((tool) => {
              return (
                      <div key={tool.tool_name} className={`${MySkillsCSS.toolDiv}`}>
                        <h3 className={`${MySkillsCSS.toolHeading}`}>{tool.tool_name}</h3>
                        <p>
                          {tool.tool_desc.map(item => (
                            <button key={item.toString()} className={`${MySkillsCSS.toolName}`}>{item} </button>
                          ))}
                        </p>
                      </div>
                    );
            })}
        </div>
      </div>
    </>
  );
};

export default MySkills;