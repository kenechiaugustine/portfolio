import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";
import { IProject } from "../../data/portfolio.interface"; 

interface ProjectContainerProps {
  project: IProject;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target="_blank"
        rel="noreferrer"
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        target="_blank"
        rel="noreferrer"
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;
