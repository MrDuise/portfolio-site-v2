import React from "react";
import "./ProjectCard.css";



const ProjectCard = (props) => {
  return (
    <div>
      <div id="container">
        <div className="card">
          <img src={props.image} alt="Lago di Braies" />

          <div className="card__details">
            <div className="name">{props.title}</div>

            <p>{props.description}</p>
            <div className="link">
              <a href={props.demoLink} src="#">
                {" "}
                <button>Demo</button>
              </a>
              <a href={props.githubRepo} src="#">
                {" "}
                <button>Source</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
