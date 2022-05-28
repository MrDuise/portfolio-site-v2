import React from "react";
import ProjectCard from "../../components/Project-Card/ProjectCard";
import "./Projects.scss";
import projects from "./projects.list";


const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="title">Projects</h1>
      <h2 className="sub-title">The following is a list of projects I have done</h2>
      <ul className="projects">
        {projects.projects.map((project) => (
          <li >
            <ProjectCard
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              githubRepo={project.githubRepo}
              image={project.image}
            />
          </li>
        ))}

     
       
      </ul>
    </div>
  );
};

export default Projects;
