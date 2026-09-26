import ProjectThumbnail from "../ProjectThumbnail/ProjectThumbnail";
import projects from "../../assets/data/projects.js";
import pieces from "../../assets/data/individuals.js";
import "./ProjectGrid.css";

export default function ThumbnailGrid({ projectIds }) {
  // Filter projects based on provided IDs, or show all if none provided
  const filteredProjects = projectIds
    ? projects.filter((project) => projectIds.includes(project.id))
    : projects;

  return (
    <div className="thumbnail-grid">
      {filteredProjects.map((project) => {
        // find the thumbnail piece
        const thumbnail = pieces.find((p) => p.id === project.thumbnailId);

        return (
          <ProjectThumbnail
            key={project.id}
            thumbnailID={project.id}
            title={project.title}
            path={thumbnail?.path}
            thumbnailAlt={thumbnail?.alt}
            year={project.year}
          />
        );
      })}
    </div>
  );
}
