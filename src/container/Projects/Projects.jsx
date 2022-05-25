import React from "react";
import ProjectCard from '../../components/Project-Card/ProjectCard';
import "./Projects.scss";

const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="title">Projects</h1>
      <ul className="projects">
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
      </ul>
  
    </div>
  );
};

export default Projects;
