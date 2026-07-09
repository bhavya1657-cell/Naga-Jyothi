import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Education</span>
      </h2>

      <div className="education-container">

        <motion.div
          className="education-box"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>B.Tech - Electronics & Communication Engineering</h3>
          <h4>Chaitanya Bharathi Institute of Technology</h4>
          <p>2021 - 2025</p>
          <span>Aggregate : 75%</span>
        </motion.div>

        <motion.div
          className="education-box"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Higher Secondary Education (MPC)</h3>
          <h4>Narayana Junior College</h4>
          <p>2018 - 2020</p>
          <span>CGPA : 8.40</span>
        </motion.div>

        <motion.div
          className="education-box"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3>Senior Secondary Education</h3>
          <h4>Rayalaseema High School</h4>
          <p>2018</p>
          <span>CGPA : 9.70</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;