import React from "react";
import "./Projects.css";

const Card = (props) => {
  const { project } = props;
  const { title, content, tools, image } = project;

  return (
    <div className="project-card frosted-pane">
      <img className="float-right" src={image} alt="Project" />
      <div className="project-card-content">
        <h1>{title}</h1>
        <p>{content}</p>
        {tools && <p>{tools}</p>}
      </div>
    </div>
  );
};

export default Card;
