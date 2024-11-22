import React from 'react';
import './Projects.css'; // NEW: Import the CSS file for styling

function Projects() {
  const projectList = [
    {
      title: 'Movies Watchlist App',
      description: 'A web app to track movies you want to watch.',
      image: '/images/movies-watchlist.png', // Ensure images are in public/images/
      video: 'https://www.youtube.com/embed/placeholder_link',
    },
    {
      title: 'Travel Log',
      description: 'An app to log and share your travel experiences.',
      image: '/images/travel-log.png',
      video: null, // REMOVE: Placeholder video for this project
    },
    {
      title: 'Health Tracker', // NEW
      description: 'Coming Soon in 2025.', // NEW
      image: null, // No image for this project yet
      video: null, // No video for this project
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
          {project.video && (
            <div className="project-video">
              <iframe
                src={project.video}
                title={project.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {index < projectList.length - 1 && ( // NEW: Add horizontal line between projects
            <hr className="project-separator" />
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
