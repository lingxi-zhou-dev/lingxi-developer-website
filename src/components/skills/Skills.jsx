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
  Programming: [
    "C#", "SQL", "Python", "Panda", "Go", "JavaScript", "C/C++", "Visual Basic" 
  ],
  Frameworks: [
    ".NET", "Blazor", "Angular", "React", "Django", "Node.js", "DevExpress"
  ],
  Tools: [
    "Azure DevOps", "Git", "Docker", "AWS", "Google Vertex AI", "Prometheus", "Grafana"
  ],
  Skills: [
    "Backend Services", "AI Implementation", "Data Science", "System Monitoring", "Data Engineering", "Software Security", "Database Design"
  ]
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
