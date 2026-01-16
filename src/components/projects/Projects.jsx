import "./projects.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const projectsData = [
  {
    id: 1,
    title: "🏈 NFL Draft Planner",
    description:
      "Angular + TypeScript app to help fantasy football players plan and organize NFL drafts.",
    tech: "Angular · TypeScript · HTML · CSS",
    image: "https://via.placeholder.com/600x400?text=NFL+Draft+Planner",
    link: "https://github.com/lingxi-zhou-dev/DraftPlanner",
    showImage: true,
  },
  {
    id: 2,
    title: "🍃 Tea House Ecommerce Site",
    description:
      "E-commerce frontend built with Next.js and integrated with Shopify Storefront API",
    tech: "Next.js · React · Zustand · Tailwind CSS",
    image: "https://via.placeholder.com/600x400?text=Tea+House",
    link: "https://github.com/lingxi-zhou-dev/Cup-Crumb-Tea-House-Website.git",
    showImage: true,
  },
  {
    id: 3,
    title: "🎥 Machine Learning Video Clipper",
    description:
      "Uses LLMs to detect high-impact moments in long videos and automatically cut vertical shorts.",
    tech: "Python · FFmpeg · WhisperX · MoviePy",
    image: "https://via.placeholder.com/600x400?text=Video+Clipper",
    link: null,
    showImage: false,
  },
  {
    id: 4,
    title: "📦 Amazon Fulfillment Automation",
    description:
      "Automatically extract order information from Amazon Seller Central, auto-fill fulfillment forms in LaCore Connect, and track in Google Sheets.",
    tech: "JavaScript · TamperMonkey · Google Sheets App Script",
    image: "https://via.placeholder.com/600x400?text=Amazon+Automation",
    link: "https://github.com/lingxi-zhou-dev/Amazon-Order-Auto-Filler",
    showImage: false,
  },
];

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const handlePrevProject = () => {
    const currentIndex = projectsData.findIndex(
      (p) => p.id === selectedProjectId,
    );
    if (currentIndex > 0) {
      setSelectedProjectId(projectsData[currentIndex - 1].id);
    }
  };

  const handleNextProject = () => {
    const currentIndex = projectsData.findIndex(
      (p) => p.id === selectedProjectId,
    );
    if (currentIndex < projectsData.length - 1) {
      setSelectedProjectId(projectsData[currentIndex + 1].id);
    }
  };

  const currentIndex = projectsData.findIndex(
    (p) => p.id === selectedProjectId,
  );

  return (
    <div className="projects">
      <div className="wrapper">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Projects</h1>
        </motion.div>

        <div className="projectContainer">
          {/* Sidebar Menu */}
          <motion.div
            className="projectSidebar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="projectMenu">
              {projectsData.map((project) => (
                <button
                  key={project.id}
                  className={`menuItem ${
                    selectedProjectId === project.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  <span className="menuText">{project.title}</span>
                  <span className="menuTech">{project.tech}</span>
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Current Project Display */}
          <motion.div
            className="projectDisplay"
            key={selectedProjectId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {projectsData.map((project) => {
              if (project.id === selectedProjectId) {
                return (
                  <div
                    key={project.id}
                    className={`projectCard ${project.showImage ? "with-image" : "no-image"}`}
                  >
                    {project.showImage && (
                      <div className="projectImage">
                        <img src={project.image} alt={project.title} />
                      </div>
                    )}

                    <div className="projectContent">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <span>{project.tech}</span>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projectButton"
                        >
                          Details
                        </a>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </motion.div>

          {/* Mobile Navigation Arrows */}
          <div className="mobileNavigation">
            <button
              className="navArrow prevArrow"
              onClick={handlePrevProject}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            <span className="projectCounter">
              {currentIndex + 1} / {projectsData.length}
            </span>
            <button
              className="navArrow nextArrow"
              onClick={handleNextProject}
              disabled={currentIndex === projectsData.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
