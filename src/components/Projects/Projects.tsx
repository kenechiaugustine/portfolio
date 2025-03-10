import uniqid from "uniqid";
import "./Projects.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { IProject } from "../../data/portfolio.interface";
import { projects } from "../../data/portfolio";

interface ProjectsProps {} // No props needed

const Projects: React.FC<ProjectsProps> = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project: IProject) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
