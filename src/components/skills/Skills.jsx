import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skills.scss";

const containerVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const skills = {
  Frontend: ["React", "JavaScript", "HTML", "CSS", "Framer Motion", "Vite"],
  Backend: ["Node.js", "Python", "REST APIs"],
  Tools: ["Git", "GitHub", "Docker", "VS Code"],
  Other: ["UI/UX", "Performance", "SEO"],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="skills"
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="wrapper">
        {/* Text */}
        <motion.div className="textContainer" variants={containerVariants}>
          <motion.h1>Skills</motion.h1>
          <motion.h2>Technologies I work with</motion.h2>
          <p>
            A focused set of tools and technologies I use to build reliable,
            modern software.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className="skillsContainer" variants={containerVariants}>
          {Object.entries(skills).map(([category, items]) => (
            <div className="skillGroup" key={category}>
              <h3>{category}</h3>
              <div className="bubbles">
                {items.map((skill) => (
                  <motion.span
                    className="bubble"
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
