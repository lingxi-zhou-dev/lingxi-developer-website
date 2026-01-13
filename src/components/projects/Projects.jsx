import "./projects.scss";
import { motion } from "framer-motion";

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
              Angular + TypeScript app to help fantasy football players
              plan and organize NFL drafts.
            </p>
            <span>Angular · TypeScript · HTML · CSS</span>

            <a
              href="https://github.com/lingxi-zhou-dev/DraftPlanner"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              Details
            </a>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🍃 Tea House Ecommerce Site</h3>
            <p>
              E-commerce frontend built with Next.js and integrated with Shopify Storefront API
            </p>
            <span>Next.js · React · Zustand · Tailwind CSS</span>

            <a
              href="https://github.com/lingxi-zhou-dev/Cup-Crumb-Tea-House-Website.git"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              Details
            </a>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🎥 Machine Learning Video Clipper</h3>
            <p>
              Uses LLMs to detect high-impact moments in long videos and
              automatically cut vertical shorts.
            </p>
            <span>Python · FFmpeg · WhisperX · MoviePy</span>

            <a
              href="https://github.com/YOUR_USERNAME/video-clipper"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              Details
            </a>
          </motion.div>

          <motion.div className="projectCard" variants={itemVariants}>
            <h3>🛍️ Shopify Integration</h3>
            <p>
              Migrated a legacy WordPress site to Shopify-backed infrastructure for E-Commerce business.
            </p>
            <span>Shopify CLI · Cloudflare · Python</span>

            <a
              href="https://github.com/YOUR_USERNAME/shopify-integration"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              Details
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
