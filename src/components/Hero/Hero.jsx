import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          P. Naga Jyothi
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Graphic Designer | UI Designer | Front-End Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Detail-oriented Electronics and Communication Engineering
          graduate with hands-on experience in Adobe Photoshop,
          responsive UI design, digital content creation, HTML, CSS,
          Bootstrap and JavaScript. Passionate about creating clean,
          visually appealing and user-friendly digital experiences while
          continuously learning new design and web technologies.
        </motion.p>

        
        <div className="social-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:nagajyothi19998@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="profile-circle">
          PNJ
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;