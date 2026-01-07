import "./lingxi.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};

const Lingxi = () => {
  return (
    <div className="lingxi">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Lingxi Zhou</motion.h1>
          <motion.h2 variants={textVariants}>Software Engineer</motion.h2>

          <motion.p variants={textVariants}>
            I’m a software engineer based in Tampa, FL, focused on building clean,
            scalable, and thoughtful web applications.
          </motion.p>

          <motion.p variants={textVariants}>
            I enjoy working across the stack — from intuitive frontends to
            reliable backend systems — with an emphasis on performance and
            maintainability.
          </motion.p>

          <motion.div className="highlights" variants={textVariants}>
            <span>📍 Tampa, FL</span>
            <span>💻 Full-Stack</span>
            <span>⚙️ React • Node • Python</span>
          </motion.div>
        </motion.div>

        <div className="imageContainer">
          <img src="/lingxipfp.jpeg" alt="Lingxi Zhou" />
        </div>
      </div>
    </div>
  );
};

export default Lingxi;
