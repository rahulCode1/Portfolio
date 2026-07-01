import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = ({
  title,
  description,
  demoLink,
  gitHubLink,
  projectImgCover,
  tech,
}) => {
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <img
            className="card-img-top"
            src={projectImgCover}
            alt={title}
            style={{ height: "220px", width: "100%", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>

            <div className="mb-3">
              {tech &&
                tech.map((tec) => (
                  <span className="badge rounded-pill text-bg-success m-1">
                    {tec}
                  </span>
                ))}
            </div>

            <div className="d-flex gap-3 mt-auto">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-1 text-decoration-none"
              >
                <HiOutlineExternalLink /> Demo
              </a>

              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-1 text-decoration-none"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
