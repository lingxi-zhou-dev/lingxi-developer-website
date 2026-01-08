import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Contact</h1>
          <h2>Let’s work together</h2>
          <p>
            If you’d like to collaborate, discuss a project, or just say hello,
            feel free to reach out.
          </p>
        </motion.div>

        <motion.form
          className="contactForm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea placeholder="Tell me about your idea…" />
          </div>

          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
