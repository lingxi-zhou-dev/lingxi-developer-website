import { useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  // 1. Create a state object to hold the form data
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // 2. A function to update the state whenever you type
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. The function that talks to Vercel
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page from refreshing
    console.log("Form submission started...");
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Message sent!");
  };

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
          onSubmit={handleSubmit} 
        >
          <div className="field">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} /* 4. Linked to function */
              placeholder="Your name" 
              required 
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="you@example.com" 
              required 
            />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Tell me about your idea…" 
              required 
            />
          </div>

          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
