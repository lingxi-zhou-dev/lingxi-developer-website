import "./lingxi.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
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
        <motion.h1 variants={textVariants}>
            Lingxi Zhou
        </motion.h1>
        <motion.h2 variants={textVariants}> Software Engineer</motion.h2>
        <motion.h3 variants={textVariants}>Hey there, I am a Software Engineer in Tampa, FL. Welcome to my website!</motion.h3>   
        </motion.div>

        <div className="imageContainer">
          <img src="/lingxipfp.jpeg" alt="Lingxi" />
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Lingxi;