import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
            <a 
                href="https://www.linkedin.com/in/lingxi-zhou/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src="/linkedin.png" alt="LinkedIn" />
            </a>

            <a 
                href="https://github.com/lingxi-zhou-dev" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src="/github.png" alt="GitHub" />
            </a>

        </div>

        
      </div>
    </div>
  );
};

export default Navbar;