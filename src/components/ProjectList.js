import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  // console.log(projects);

  // const projectElements = projects.map((project) => { <ProjectItem key={project.id} technologies={project.technologies}/>;
  // });


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (<ProjectItem key={project.id} technologies={project.technologies} name={project.name} about={project.about}/>))} 
      </div>
    </div>
  );
}

export default ProjectList;
