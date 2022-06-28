import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
import Projectseperator from "../../common/projectseperator";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project,proj) => {
          return <ProjectCard key={proj} project={project }/>;
        })}
      </div>
      
    </div>
  );
}

export default Projects;
