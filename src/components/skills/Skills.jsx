import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skills.scss";

const containerVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const skills = {
  Frontend: ["React", "JavaScript", "HTML", "CSS", "Framer Motion", "Vite"],
  Backend: ["Node.js", "Python", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Docker"],
  Other: ["UI/UX Design", "Performance Optimization", "SEO"],
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
          <motion.h1 variants={itemVariants}>Skills</motion.h1>
          <motion.h2 variants={itemVariants}>
            Tools & technologies I use
          </motion.h2>
        </motion.div>

        {/* Skills list */}
        <motion.div className="skillsContainer" variants={containerVariants}>
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              className="skillGroup"
              key={category}
              variants={itemVariants}
            >
              <h3>{category}</h3>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
