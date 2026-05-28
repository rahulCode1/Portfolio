import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import warkasansImg from "../images/Workasana.png";

const Home = () => {
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
            Proficient in React, Node.js, and MongoDB for scalable and
            user-centric solutions.
          </p>

          <div className="d-flex gap-3 mt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulkumawat50665@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success d-flex align-items-center gap-2"
            >
              <MdEmail /> Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/1tNQ1T86rIDEqvc-uzSPWQfpJNKMg0xFM/view?usp=sharing"
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
            {/* Luslina an ecommerce store */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://caleidoscope.in/wp-content/uploads/2022/11/Indian-Handicrafts-Online.jpg"
                  alt="LUXLINA project"
                />

                <div className="card-body">
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

                  <div className="d-flex gap-3">
                    <a
                      href="https://major-project-frontend-kappa.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/MajorProject-frontend.git"
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
            {/* Anavya , lead manage system */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://cdn.prod.website-files.com/645258dee17c72222bca47d8/6471c4333090a633cfa2683f_5f56051638262b79b5d580fd_VF-Blog-Cover-What-is-lead-management.jpeg"
                  alt="Anavya project"
                />

                <div className="card-body">
                  <h5 className="card-title">Anavya</h5>

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

                  <div className="d-flex gap-3">
                    <a
                      href="https://major-project2-frontend-rho.vercel.app/leads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/BI_Assignment-1-frontend.git"
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
            {/* kaviosPix, Photos sharing app */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://sm.pcmag.com/pcmag_au/review/g/google-pho/google-photos_vm2z.jpg"
                  alt="Travel AI"
                />

                <div className="card-body">
                  <h5 className="card-title">kaviosPix</h5>

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

                  <div className="d-flex gap-3">
                    <a
                      href="https://kavios-pix-frontend-eight.vercel.app/albums"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/kaviosPix_frontend.git"
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
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src="https://noblestudios.com/wp-content/uploads/ai-travel-planner-1-scaled.webp"
                  alt="Travel AI"
                />

                <div className="card-body">
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

                  <div className="d-flex gap-3">
                    <a
                      href="https://trip-planner-frontend-xd1n.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/trip_planner_frontend.git"
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
            {/* Workasana */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  className="card-img-top"
                  src={warkasansImg}
                  alt="Travel AI"
                />

                <div className="card-body">
                  <h5 className="card-title">Workasana</h5>

                  <p className="card-text">
                    Built Workasana, a task management platform with task
                    assignment, and authentication. Added reporting features to
                    track progress and productivity.
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

                  <div className="d-flex gap-3">
                    <a
                      href="https://fsp-1-assignment-frontend-sigma.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <HiOutlineExternalLink /> Demo
                    </a>

                    <a
                      href="https://github.com/rahulCode1/FSP1_Assignment_frontend.git"
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
                href="mailto:rahulkumawat50665@gmail.com"
                className="d-flex align-items-center gap-2 text-decoration-none text-success"
              >
                <MdEmail /> rahulkumawat50665@gmail.com
              </a>
            </div>

            <div>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
