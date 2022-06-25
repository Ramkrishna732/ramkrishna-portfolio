import React from "react";
import "./project-card.css";
import Projetseparator from "../../common/projectSepretor/index";
function ProjectCard({ project }) {
  return (<div>
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GIthub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
          
        </div>
      </div>
     
      <img src={project.image} className="project-photo" alt="projectimage" />
    
    </div><Projetseparator/></div>

  );
}

export default ProjectCard;
