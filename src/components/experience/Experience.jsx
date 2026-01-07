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
    role: "Software Engineer",
    company: "Medical Media Company",
    date: "2023 – Present",
    description:
      "Building internal tools and public-facing websites. Working with AI integrations, automation, and modern frontend architecture.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    date: "2021 – 2023",
    description:
      "Designed and developed marketing websites and dashboards with a strong focus on UX, performance, and clean design.",
  },
  {
    role: "Computer Science Graduate",
    company: "University",
    date: "2017 – 2021",
    description:
      "Studied software engineering, data structures, algorithms, databases, and operating systems.",
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
