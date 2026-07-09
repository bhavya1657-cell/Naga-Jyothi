import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "Adobe Photoshop", level: "95%" },
  { name: "Photo Retouching", level: "90%" },
  { name: "Layer Masking", level: "90%" },
  { name: "Color Correction", level: "90%" },
  { name: "Image Compositing", level: "85%" },
  { name: "Typography", level: "85%" },
  { name: "Social Media Post Design", level: "90%" },
  { name: "Print Design", level: "80%" },
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "90%" },
  { name: "Bootstrap", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "SQL", level: "80%" },
  { name: "MS Excel", level: "85%" },
  { name: "MS Word", level: "90%" },
  { name: "MS PowerPoint", level: "90%" },
  { name: "CMYK vs RGB", level: "90%" },
  { name: "Smart Objects", level: "85%" },
  { name: "Non-destructive Editing", level: "90%" },
  { name: "Blend Modes", level: "85%" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="skill-title">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;