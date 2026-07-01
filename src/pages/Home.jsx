import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
  SiMongoose,
  SiVercel,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import taskPilotImg from "../images/TaskPilot.png";
import { useEffect, useState } from "react";
import Project from "../components/Projects/Project";

const Home = () => {
  const [isShowGoToTopBtn, setShowGoToTopButton] = useState(false);

  const scrollSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStacks = [
    {
      skill: "React",
      icon: FaReact,
    },
    {
      skill: "Node.js",
      icon: FaNodeJs,
    },
    {
      skill: "Express",
      icon: SiExpress,
    },
    {
      skill: "MongoDB",
      icon: SiMongodb,
    },
    {
      skill: "Bootstrap",
      icon: FaBootstrap,
    },

    { skill: "Git", icon: FaGitAlt },
    {
      skill: "GitHub",
      icon: FaGithub,
    },
    {
      skill: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      skill: "Mongoose",
      icon: SiMongoose,
    },
    {
      skill: "JWT",
      icon: SiJsonwebtokens,
    },
    {
      skill: "Vercel",
      icon: SiVercel,
    },
    {
      skill: "Vercel",
      icon: SiVercel,
    },
  ];

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
        <section className="py-5 mt-5" id="home">
          <h1 className="fw-bold">Rahul Kumawat</h1>

          <h3 className="text-muted fs-5 mt-3 ">Full Stack Developer</h3>

          <div
            className=" border-bottom border-3 border-success d-inline-block "
            style={{ width: "8vw", height: "10px" }}
          ></div>

          <p className="mt-3">
            MERN Stack Developer passionate about building responsive, scalable,
            and user-friendly web applications.
          </p>
          <p>
            Skilled in React, Node.js, Express.js, and MongoDB, with hands-on
            experience developing full-stack projects and REST APIs.
          </p>

          <div className="d-flex gap-3 mt-4">
            <button
              onClick={() => scrollSection("connect")}
              className="btn btn-success d-flex align-items-center gap-2"
            >
              Contact Me
            </button>

            <a
              href="https://drive.google.com/file/d/1mtf2Gztoznzsnh039aVCA1PKb-9uSeXl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              Resume
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-5 mt-5">
          <h1 className="fw-bold">Projects</h1>
          <h5 className="text-muted fs-5">
            Building solutions that solve real-world problems
          </h5>

          <div
            className=" border-bottom border-3 border-success d-inline-block "
            style={{ width: "8vw", height: "10px" }}
          ></div>

          <div className="row mt-5 g-4">
            {/* PROJECT 1 */}
            {/* Luxlina an ecommerce store */}

            <Project
              title="LUXLINA"
              description=" A modern e-commerce platform with product management,
                    authentication, and order handling."
              projectImgCover={
                "https://caleidoscope.in/wp-content/uploads/2022/11/Indian-Handicrafts-Online.jpg"
              }
              demoLink={"https://luxlina.vercel.app"}
              gitHubLink={"https://github.com/rahulCode1/luxlina.git"}
              tech={["React", "Node.js", "Express.js", "MongoDB", "JWT"]}
            />

            {/* PROJECT 2 */}
            {/* CRMFlow */}
            <Project
              title="CRMFlow"
              description="A modern lead management platform with lead assignment, status tracking, filtering, reporting, and secure CRUD operations."
              projectImgCover={
                "https://cdn.prod.website-files.com/645258dee17c72222bca47d8/6471c4333090a633cfa2683f_5f56051638262b79b5d580fd_VF-Blog-Cover-What-is-lead-management.jpeg"
              }
              demoLink={"https://crm-flow-sable.vercel.app"}
              gitHubLink={"https://github.com/rahulCode1/CRMFlow.git"}
              tech={["React", "Node.js", "Express.js", "MongoDB", "JWT"]}
            />

            {/* PROJECT 3 */}
            {/* CloudPix */}
            <Project
              title="CloudPix"
              description="A modern photo sharing platform with album management, Cloudinary image uploads, Google OAuth authentication, and secure sharing."
              projectImgCover={
                "https://sm.pcmag.com/pcmag_au/review/g/google-pho/google-photos_vm2z.jpg"
              }
              demoLink={"https://cloud-pix-six.vercel.app"}
              gitHubLink={"https://github.com/rahulCode1/CloudPix.git"}
              tech={[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Cloudinary",
                "Google OAuth",
              ]}
            />

            {/* PROJECT 4 */}
            {/* Travel AI */}
            <Project
              title="Travel AI"
              description="An AI-powered travel planner that generates personalized itineraries based on destination, budget, and trip duration."
              projectImgCover={
                "https://noblestudios.com/wp-content/uploads/ai-travel-planner-1-scaled.webp"
              }
              demoLink={"https://travel-ai-eight-tau.vercel.app"}
              gitHubLink={"https://github.com/rahulCode1/Travel_AI.git"}
              tech={[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mapbox",
                "DeepSeek AI",
              ]}
            />

            {/* PROJECT 5 */}
            {/* TaskPilot */}
            <Project
              title="TaskPilot"
              description="A modern task management platform with project organization, task assignment, progress tracking, and productivity reporting."
              projectImgCover={taskPilotImg}
              demoLink={"https://task-pilot-pearl.vercel.app"}
              gitHubLink={"https://github.com/rahulCode1/TaskPilot.git"}
              tech={["React", "Node.js", "Express.js", "MongoDB", "JWT"]}
            />
          </div>
        </section>

        {/* TECH STACK */}
        <section id="skills" className="py-5">
          <h1 className="fw-bold">Tech Stack</h1>
          <h3 className="text-muted fs-5">
            Technologies and tools I work with
          </h3>

          <div
            className=" border-bottom border-3 border-success d-inline-block "
            style={{ width: "8vw", height: "10px" }}
          ></div>

          <div className="d-flex flex-wrap gap-3 mt-5">
            {techStacks.map((tech) => (
              <span className="badge fs-5 border border-dark text-dark d-flex align-items-center gap-3">
                <tech.icon /> {tech.skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="py-5">
          <h1 className="fw-bold">Connect</h1>
          <h3 className="text-muted fs-5">
            Let’s collaborate on something amazing together
          </h3>

          <div
            className=" border-bottom border-3 border-success d-inline-block "
            style={{ width: "8vw", height: "10px" }}
          ></div>

          <div className="mt-4 d-flex flex-wrap row gap-2 justify-content-between">
            <div
              className="border border-2 p-3 rounded shadow mb-3"
              style={{ width: "49%" }}
            >
              <h4 className="d-flex align-items-center gap-3">
                <MdEmail size={34} /> Email
              </h4>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul7497678@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center fw-bold gap-2 text-decoration-none text-success"
              >
                rahul7497678@gmail.com
              </a>
            </div>

            <div
              className="border border-2 p-3 rounded shadow mb-3"
              style={{ width: "49%" }}
            >
              <h4 className="d-flex align-items-center gap-3">
                <FaGithub size={34} /> GitHub
              </h4>

              <a
                href="https://github.com/rahulCode1"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center fw-bold gap-2 text-decoration-none text-success"
              >
                Follow on GitHub
              </a>
            </div>
            <div
              className="border border-2 p-3 rounded shadow mb-3"
              style={{ width: "49%" }}
            >
              <h4 className="d-flex align-items-center gap-3">
                <FaLinkedin size={34} /> Linkedin
              </h4>

              <a
                href="https://www.linkedin.com/in/rahul-kumawat-562026413"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center fw-bold gap-2 text-decoration-none text-success"
              >
                Connect on Linkedin
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
