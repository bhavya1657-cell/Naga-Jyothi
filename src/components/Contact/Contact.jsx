import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Let's Work Together</h3>

          <p>
            I am an Electronics and Communication Engineering graduate
            passionate about Graphic Design, UI Design, Front-End
            Development and creating responsive, user-friendly websites.
            I am currently looking for opportunities where I can
            contribute my skills and continue learning.
          </p>

          <div className="info">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <span>nagajyothi19998@gmail.com</span>
            </div>
          </div>

          <div className="info">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <span>+91 8074194277</span>
            </div>
          </div>

          <div className="info">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <span>Bangalore, Karnataka</span>
            </div>
          </div>

          <div className="info">
            <FaBirthdayCake className="icon" />
            <div>
              <h4>Date of Birth</h4>
              <span>30 June 2003</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            required
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Write Your Message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;