import "./ProjectThumbnail.css";
import { Link } from "react-router-dom";

export default function ProjectThumbnail({
  thumbnailID,
  title,
  path,
  thumbnailAlt,
  year,
}) {
  return (
    <Link to={`/projects/${thumbnailID}`}>
      <div className="project-thumbnail">
        <img
          src={path}
          alt={thumbnailAlt}
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
        <div className="project-data">
          <h2>{title}</h2>
          <p>{year}</p>
        </div>
      </div>
    </Link>
  );
}
