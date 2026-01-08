import "./lingxi.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const Lingxi = () => {
  return (
    <div className="lingxi">
      <motion.div
        className="centerContent"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={textVariants}>Hi there! I'm Lingxi</motion.h1>
        <motion.h2 variants={textVariants}>Software Engineer</motion.h2>

        <motion.div className="profileImage" variants={textVariants}>
          <img src="/lingxipfp.jpeg" alt="Lingxi Zhou" />
        </motion.div>

        <div className="scrollArea">
          <motion.p variants={textVariants}>
            👋 I’m a Software Engineer based in the US, focused on building clean,
            scalable, and reliable techical solutions.
          </motion.p>

          <motion.p variants={textVariants}>
            💻 I enjoy working on traditional Full-Stack solutions as well as AI engineering projects. 
            My professional experiences span from Web Development and Backend Service optimizations to 
            system monitoring and custom AI implementations. I specialize in building 
            performant systems using C#, Python, SQL, while leveraging frameworks like Blazor, Angular, React and .NET.
          </motion.p>

          <motion.p variants={textVariants}>
            📚 Over the past few years, I graduated with a Computer Science degree, interned at Microsoft working on Azure Cloud,
            and started my professional career as a Full-Time Software Developer at 
            Tenex Software Solutions working on Election Software. Leaning into every part of 
            the Software Developement Lifecycle from System Design, Software Development, to On-Call Support, 
            I developed skills to create innovative, efficient, and production ready software solutions.
          </motion.p>

          <motion.p variants={textVariants}>
            🤖 Additionally, Implementing custom AI systems and tools for businesses have always piqued my interest. 
            With educational background in NLP and Data Science, I have been taking courses on Google Vertex AI and 
            designing experimental systems.
          </motion.p>

          <motion.p variants={textVariants}>
            🛍️ On the side, I am a Software Developer Contractor, focusing on innovative techinical solutions for E-Commerce Clients.
            From custom backend Python based tools to modern e-commerce infrastructure using Shopify, I help businesses retain and grow their customer base.
          </motion.p>

          <motion.p variants={textVariants}>
            🥖 Outside of my professional pursuits, I enjoy spending time in nature. Hiking, backpacking, and kayaking are some of my favorite ways to unplug. 
            When I’m at home, sourdough bread making takes up much of my time. I’ve raised my own starter and 
            love every step of the bread-making process!
          </motion.p>

          <motion.p variants={textVariants}>
            🤝 Connect and reach out if you are seeking a dedicated collaborator!
          </motion.p>
        </div>

        <motion.div className="highlights" variants={textVariants}>
          <span>📍 United States </span>
          <span>💻 Full-Stack</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Lingxi;
