import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [captchaToken, setCaptchaToken] = useState(null); // Tracks if user is human

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Captures the token when the user clicks the checkbox
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA first!");
      return;
    }

    console.log("Form submission started...");
    
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Send the captchaToken along with the form data
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    alert("Message sent!");
    setCaptchaToken(null);
    recaptchaRef.current.reset(); // Resets the checkbox visually
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
          <p>If you’d like to collaborate, feel free to reach out.</p>
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
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your idea…" required />
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcCrUUsAAAAAJ6fuP3Z2h-tOgTkRw1v0CsBDvdX"
            onChange={handleCaptchaChange}
          />
          
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;