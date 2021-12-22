import React from "react";
import Card from "./Project-Card";
import "./Projects.css";
import { projects } from "../Store/Store";

const Projects = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="center heading frosted-pane">
          <h1 className="title-regular">MY PROJECTS</h1>
        </div>
        <div className="projects">
          {projects.map((project) => {
            return <Card project={project} key={project.serial_key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
