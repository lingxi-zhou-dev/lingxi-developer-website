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
          <h2>Spare time projects!</h2>
        </motion.div>

        <motion.div
          className="projectList"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🏈 NFL Draft Planner</h3>
            <p>
            The NFL Draft Planner is an Angular and TypeScript-based application designed for 
            Fantasy Football enthusiasts to efficiently plan and organize their drafts.
            </p>
            <span>Angular · TypeScript · HTML . CSS</span>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🔢 Data Cleaning</h3>
            <p>
              Python-based tool for cleaning and graphing large datasets on Google Sheets.
            </p>
            <span>Python · Pandas</span>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🎥 Machine Learning Video Clipper</h3>
            <p>
            A exporatory project that takes long-form videos, 
            uses an LLM to identify and timestamp high-impact moments, 
            and then cuts them with FFmpeg into brand-consistent, vertical shorts for YouTube and TikTok.
            </p>
            <span>Python · FFmpeg · WhisperX · MoviePy</span>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🛍️ Shopify Integration</h3>
            <p>
              Integrate dated WordPress Website to use Shopify in the Backend.
            </p>
            <span>Shopify CLI · Cloudflare · Python</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
