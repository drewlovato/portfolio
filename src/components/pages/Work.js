import React from "react";
import SingleProject from "../SingleProject";

import { projects } from "../data/ProjectData";

function Work() {
  return (
    <>
      <section className="work-section">
        <h1>Work</h1>
        <div className="work-cards">
          {projects.map((projects) => (
            <SingleProject
              title={projects.title}
              url={projects.url}
              image={projects.image}
              description={projects.description}
              technologies={projects.technologies}
              GitHubRepp={projects.GitHubRepo}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
