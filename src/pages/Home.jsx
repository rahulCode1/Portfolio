import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import taskPilotImg from "../images/TaskPilot.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [isShowGoToTopBtn, setShowGoToTopButton] = useState(false);

  const scrollSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="container">
        {/* HERO SECTION */}
        <section className="py-5" id="home">
          <h1>Rahul Kumawat</h1>

          <h3 className="text-muted">Full Stack Developer</h3>

          <p className="mt-3">
            Passionate full-stack developer building intuitive web applications
            using modern technologies.
          </p>
          <p>
            Proficient in React, Node.js, Express.js and MongoDB for scalable
            and user-centric solutions.
          </p>

          <div className="d-flex gap-3 mt-4">
            <button
              onClick={() => scrollSection("connect")}
              className="btn btn-success d-flex align-items-center gap-2"
            >
              Contact Me
            </button>

            <a
              href="https://drive.google.com/file/d/1ebeY1pstXT4EaxvF8Uu7J7q9p0nuZ-Nb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              Resume
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-5">
          <h1>Projects</h1>
          <h5 className="text-muted">
            Building solutions that solve real-world problems
          </h5>

          <div className="row mt-4 g-4">
            {/* PROJECT 1 */}
            {/* Luxlina an ecommerce store */}
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://caleidoscope.in/wp-content/uploads/2022/11/Indian-Handicrafts-Online.jpg"
                  alt="LUXLINA project"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">LUXLINA</h5>

                  <p className="card-text">
                    A modern e-commerce platform with product management,
                    authentication, and order handling.
                  </p>

                  <div className="mb-3">
                    <span className="badge rounded-pill text-bg-success m-1">
                      React
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Node.js
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      MongoDB
                    </span>
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a
                      href="https://luxlina.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/luxlina.git"
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

            {/* PROJECT 2 */}
            {/* CRMFlow  , lead manage system */}
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://cdn.prod.website-files.com/645258dee17c72222bca47d8/6471c4333090a633cfa2683f_5f56051638262b79b5d580fd_VF-Blog-Cover-What-is-lead-management.jpeg"
                  alt="Anavya project"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">CRMFlow </h5>

                  <p className="card-text">
                    A lead management system with lead assignment, filtering,
                    status tracking, and secure CRUD operations.
                  </p>

                  <div className="mb-3">
                    <span className="badge rounded-pill text-bg-success m-1">
                      React
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Node.js
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      MongoDB
                    </span>
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a
                      href="https://crm-flow-sable.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/CRMFlow.git"
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

            {/* PROJECT 3 */}
            {/* CloudPix, Photos sharing app */}
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://sm.pcmag.com/pcmag_au/review/g/google-pho/google-photos_vm2z.jpg"
                  alt="Travel AI"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">CloudPix</h5>

                  <p className="card-text">
                    A photo sharing web app, User can create album, save images,
                    edit and share album.
                  </p>

                  <div className="mb-3">
                    <span className="badge rounded-pill text-bg-success m-1">
                      React
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Node.js
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      MongoDB
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      express
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Google OAuth
                    </span>
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a
                      href="https://cloud-pix-six.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/CloudPix.git"
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

            {/* PROJECT 4 */}
            {/* Travel Ai, Ai powered travel planner */}
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://noblestudios.com/wp-content/uploads/ai-travel-planner-1-scaled.webp"
                  alt="Travel AI"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Travel AI</h5>

                  <p className="card-text">
                    Travel AI, for generate persionalize travel plan based on
                    destination, duration and budget.
                  </p>

                  <div className="mb-3">
                    <span className="badge rounded-pill text-bg-success m-1">
                      React
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Node.js
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      MongoDB
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      express
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Google OAuth
                    </span>
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a
                      href="https://travel-ai-eight-tau.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/Travel_AI.git"
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

            {/* PROJECT 5 */}
            {/* TaskPiolit */}
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src={taskPilotImg}
                  alt="Travel AI"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">TaskPilot</h5>

                  <p className="card-text">
                    Built TaskPilot, a task management platform with task
                    assignment. Added reporting features to track progress and
                    productivity.
                  </p>

                  <div className="mb-3">
                    <span className="badge rounded-pill text-bg-success m-1">
                      React
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      Node.js
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      MongoDB
                    </span>
                    <span className="badge rounded-pill text-bg-success m-1">
                      express
                    </span>
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a
                      href="https://task-pilot-pearl.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/TaskPilot.git"
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
          </div>
        </section>

        {/* TECH STACK */}
        <section id="skills" className="py-5">
          <h1>Tech Stack</h1>
          <h3 className="text-muted">Technologies and tools I work with</h3>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="badge rounded-pill border border-success text-success d-flex align-items-center gap-1">
              <FaReact /> React
            </span>
            <span className="badge rounded-pill border border-success text-success d-flex align-items-center gap-1">
              <FaNodeJs /> Node.js
            </span>
            <span className="badge rounded-pill border border-success text-success d-flex align-items-center gap-1">
              <SiExpress /> Express
            </span>
            <span className="badge rounded-pill border border-success text-success d-flex align-items-center gap-1">
              <SiMongodb /> MongoDB
            </span>
            <span className="badge rounded-pill border border-success text-success d-flex align-items-center gap-1">
              <FaBootstrap /> Bootstrap
            </span>
            <span className="badge rounded-pill border border-success text-success d-flex align-items-center gap-1">
              <FaGitAlt /> Git
            </span>
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="py-5">
          <h1>Connect</h1>
          <h3 className="text-muted">
            Let’s collaborate on something amazing together
          </h3>

          <div className="mt-3">
            <div className="mb-3">
              <h5>Email</h5>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul7497678@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-decoration-none text-success"
              >
                <MdEmail />
                rahul7497678@gmail.com
              </a>
            </div>

            <div className="mb-3">
              <h5>GitHub</h5>
              <a
                href="https://github.com/rahulCode1"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-decoration-none"
              >
                <FaGithub /> Follow on GitHub
              </a>
            </div>
            <div className="mb-3">
              <h5>Linkedin</h5>
              <a
                href="https://www.linkedin.com/in/rahul-kumawat-562026413"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-decoration-none"
              >
                <FaLinkedin /> Connect on Linkedin
              </a>
            </div>
          </div>
        </section>

        {isShowGoToTopBtn && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed",
              bottom: "40px",
              border: "none",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: "0.6",
            }}
            className="btn btn-primary rounded-circle shadow end-0 mx-2 mx-md-5"
          >
            <FaArrowUp />
          </button>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;
