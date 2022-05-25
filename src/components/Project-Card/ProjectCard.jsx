import React from "react";
import "./ProjectCard.css";

const tempCard = {
  title: "Temp Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Suscipit tellus mauris a diam maecenas sed enim ut.",
  image: "https://images.unsplash.com/photo-1536323760109-ca8c07450053",
  link: "https://www.google.com",
};

const ProjectCard = () => {
  return (
    <div>
      <div id="container">
        <div className="card">
          <img src={tempCard.image} alt="Lago di Braies" />

          <div className="card__details">
            <div className="name">{tempCard.title}</div>

            <p>{tempCard.description}</p>
            <div className="link">
              <a href={tempCard.link} src="#">
                {" "}
                <button>Demo</button>
              </a>
              <a href={tempCard.link} src="#">
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
