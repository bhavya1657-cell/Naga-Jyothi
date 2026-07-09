import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          Hello! I'm <strong>P. Naga Jyothi</strong>, an Electronics and
          Communication Engineering graduate with a passion for Graphic
          Design, UI/UX Design, and Front-End Development.
        </p>

        <p className="about-text">
          I have hands-on experience in Adobe Photoshop, responsive UI
          design, digital content creation, photo editing, image
          compositing, and front-end technologies like HTML, CSS,
          Bootstrap, JavaScript, and SQL. I enjoy transforming creative
          ideas into visually appealing and user-friendly digital
          experiences.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>B.Tech - Electronics & Communication Engineering</p>
            <p>Chaitanya Bharathi Institute of Technology</p>
            <p>Passed Out: 2025</p>
          </div>

          <div className="about-card">
            <h3>🎨 Specialization</h3>
            <p>Graphic Design</p>
            <p>Adobe Photoshop</p>
            <p>UI/UX Design</p>
          </div>

          <div className="about-card">
            <h3>💻 Technical Skills</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>JavaScript & SQL</p>
          </div>

          <div className="about-card">
            <h3>📍 Personal Details</h3>
            <p>Bangalore</p>
            <p>DOB: 30 June 2003</p>
            <p>Available for Full-Time Opportunities</p>
          </div>

        </div>

        

      </motion.div>
    </section>
  );
};

export default About;