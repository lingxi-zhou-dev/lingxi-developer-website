import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./experience.scss";

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

const experiences = [
  {
    role: "Software Developer",
    company: "Tenex Software Solutions",
    date: "Sep 2023 – Nov 2025",
    description:
      "Modernized election management software by architecting cross-server infrastructure in Blazor, C#, and SQL",
  },
  {
    role: "Software Engineer Intern",
    company: "Microsoft",
    date: "May 2023 – Aug 2023",
    description:
      "Optimized Azure Storage performance by implementing a negative caching mechanism to reduce Key Vault accesses in C#",
  },
  {
    role: "Supervised Research",
    company: "University of South Florida",
    date: "Aug 2022 – Dec 2022",
    description:
      "Researched algorithmic mechanics for collectible card games and studied Machine Learning techniques and principles",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="experience"
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="wrapper">
        {/* Left text */}
        <motion.div className="textContainer" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>Experience</motion.h1>
          <motion.h2 variants={itemVariants}>
            Where I’ve been & what I’ve built
          </motion.h2>
        </motion.div>

        {/* Right timeline */}
        <motion.div className="experienceContainer" variants={containerVariants}>
          {experiences.map((exp, index) => (
            <motion.div
              className="experienceItem"
              key={index}
              variants={itemVariants}
            >
              <div className="header">
                <h3>{exp.role}</h3>
                <span>{exp.date}</span>
              </div>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
