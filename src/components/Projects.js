// src/components/Projects.js

import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Movies Watchlist App',
      description: 'A web app to track movies you want to watch.',
      image: 'path_to_placeholder_image',
      video: 'https://www.youtube.com/embed/placeholder_link',
    },
    {
      title: 'Travel Log Tracker',
      description: 'An app to log and share my travel experiences.',
      image: 'path_to_placeholder_image',
      video: 'https://www.youtube.com/embed/placeholder_link',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold my-8 text-white">Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="mb-12 w-full px-4">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-white mb-4">{project.description}</p>
          <img src={project.image} alt={project.title} className="mb-4 w-full max-w-md" />
          <div className="w-full max-w-md">
            <iframe
              width="100%"
              height="315"
              src={project.video}
              title={project.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
