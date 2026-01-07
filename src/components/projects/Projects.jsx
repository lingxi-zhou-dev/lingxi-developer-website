import "./projects.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
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

const Projects = () => {
  return (
    <div className="projects">
      <div className="wrapper">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Projects</h1>
          <h2>Selected work & current interests</h2>
          <p>
            A mix of past projects and ideas I’m actively exploring — focused on
            clean architecture, usability, and performance.
          </p>
        </motion.div>

        <motion.div
          className="projectList"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="projectCard" variants={itemVariants}>
            <h3>Personal Portfolio</h3>
            <p>
              A modern React + Framer Motion portfolio focused on clarity,
              motion, and accessibility.
            </p>
            <span>React · SCSS · Framer Motion</span>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>Data Cleaning Toolkit</h3>
            <p>
              Python-based utilities for cleaning and validating large datasets,
              with reusable pipelines.
            </p>
            <span>Python · Pandas · CLI</span>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>AI Video Clip Tool (WIP)</h3>
            <p>
              Exploring ML-driven video segmentation to automatically generate
              short-form content.
            </p>
            <span>Python · ML · Video Processing</span>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>E-commerce Experiments</h3>
            <p>
              Researching lightweight e-commerce setups focused on performance
              and UX for small businesses.
            </p>
            <span>Next.js · Payments · UX</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
