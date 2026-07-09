import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">

        <div className="project-card">

          <h3>Student Management System – UI/UX Design & Assets</h3>

          <h4>
            Personal Project | Photoshop | HTML | CSS | Bootstrap |
            JavaScript | SQL
          </h4>

          <p>
            Designed complete UI mockups, web banners, and responsive
            interfaces for a Student Management System using Adobe
            Photoshop and Bootstrap.
          </p>

          <ul>
            <li>
              Designed complete UI layouts and web banners using Adobe
              Photoshop.
            </li>

            <li>
              Created responsive web pages using HTML, CSS and
              Bootstrap Grid.
            </li>

            <li>
              Exported optimized graphics from Photoshop for faster
              website performance.
            </li>

            <li>
              Performed photo editing, background removal and image
              enhancement using Select Subject and Refine Edge.
            </li>

            <li>
              Built reusable PSD templates with Smart Objects for
              dashboard cards and form headers.
            </li>

            <li>
              Maintained consistent colors using sRGB color mode and
              optimized image compression.
            </li>
          </ul>

          <h4>Key Photoshop Skills</h4>

          <div className="tech">
            <span>Layout Design</span>
            <span>Masking</span>
            <span>Photo Editing</span>
            <span>Color Correction</span>
            <span>Typography</span>
            <span>Export for Web</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>SQL</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;