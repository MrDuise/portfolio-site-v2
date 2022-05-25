import React from "react";
import "./Skills.scss";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <div>
      <div className="container">
        <h1>Technical Skills</h1>
        <p>
          Below is a quick overview of my main technical skill sets and
          technologies I use
        </p>
        <div className="inner-container">
        <ul className="skills">
          {SkillList.skills.map((skill) => (
            <li className="skill-item">
              <img src={skill.image} alt="" />
              <h5>{skill.title}</h5>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Skills;
