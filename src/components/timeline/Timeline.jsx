import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./timeline.scss";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const timelineEvents = [
  {
    date: "Aug 2020",
    title: "🚌 University of South Florida",
    subtitle: "Tampa, FL",
    description: "Started Computer Science Program",
    type: "education",
  },
  {
    date: "Aug 2022 - Dec 2022",
    title: "🔬 AMHR Lab",
    subtitle: "Tampa, FL",
    description: "Supervised Research",
    type: "research",
  },
  {
    date: "May 2023 - Aug 2023",
    title: "💼 Microsoft",
    subtitle: "Redmond, WA",
    description: "Software Engineer Intern",
    type: "internship",
  },
  {
    date: "Sep 2023 - May 2024",
    title: "💼 Tenex Software Solutions",
    subtitle: "Tampa, FL",
    description: "Software Developer Intern",
    type: "internship",
  },
  {
    date: "May 2024",
    title: "🎓 University of South Florida",
    subtitle: "Tampa, FL",
    description: "Graduated with B.S. in Computer Science",
    type: "education",
  },
  {
    date: "July 2024 - November 2025",
    title: "💼 Tenex Software Solutions",
    subtitle: "Tampa, FL",
    description: "Software Developer (Full Time)",
    type: "fulltime",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="timeline"
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="header">
        <motion.h1 variants={itemVariants}>Journey</motion.h1>
        <motion.h2 variants={itemVariants}>My Professional Timeline</motion.h2>
      </div>

      <div className="timelineContainer">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`timelineItem ${event.type}`}
            variants={itemVariants}
          >
            <div className="timelineMarker"></div>
            <div className="timelineContent">
              <span className="date">{event.date}</span>
              <h3>{event.title}</h3>
              <p className="subtitle">{event.subtitle}</p>
              <p className="description">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
