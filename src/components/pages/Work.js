import SingleProject from "../SingleProject";

import { projects } from "../data/ProjectData";

export default function Work() {
  return (
    <>
      <section className="work-section">
        <h1>Work</h1>
        <div className="work-cards">
          {projects.map((project) => (
            <SingleProject
              title={project.title}
              url={project.url}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              GitHubRepp={project.GitHubRepo}
            />
          ))}
        </div>
      </section>
    </>
  );
}
