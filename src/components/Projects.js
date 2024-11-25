import React, { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa"; // NEW: Import the FaGithub icon from react-icons

// NEW: Import the images for the carousel
import travelLogMap from "../assets/travel-log-map.png";
import travelLogView from "../assets/travel-log-view.png";
import travelLog from "../assets/travel-log.png";

function Projects() {
  // NEW: State for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // NEW: Images array for the carousel
  const travelLogImages = [travelLogMap, travelLog, travelLogView];

  // Updated project list
  const projectList = [
    {
      title: "Movies Watchlist App",
      description: "A web app to track movies you want to watch.",
      image: "/images/movies-watchlist.png",
      video: "https://www.youtube.com/embed/placeholder_link",
    },
    {
      title: "Travel Log",
      description: (
        <div className="project-description">
          <p>
            The Travel Log is a personalized app that lets me track past
            adventures and plan future bucket list destinations, creating a
            visual collection of my journeys.
          </p>
          <br />
          <p>
            It’s a simple yet inspiring tool to celebrate memories, reflect on
            experiences, and stay excited for what’s next in my travels.
          </p>
        </div>
      ),
      // NEW: Indicate that this project has a carousel
      carousel: true,
      images: travelLogImages,
      githubLink: "https://github.com/alcytorres/travel-log-backend.git",
    },
    {
      title: "PureHealth (Launching in 2025)",
      description:
        "PureHealth is going to be a centralized app that aggregates and syncs all your health and fitness data from various apps like Health, Strava, Nike Run Club, and more into one seamless platform.",
      image: null,
      video: null,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      {projectList.map((project, index) => (
        <div
          key={index}
          className={`project-card ${
            project.title === "Travel Log"
              ? "travel-log-card"
              : project.title === "Movies Watchlist App"
              ? "movies-watchlist-card"
              : project.title === "PureHealth (Launching in 2025)"
              ? "purehealth-card"
              : ""
          }`}
        >
          {project.carousel ? (
            <div className="carousel-and-info">
              {/* Carousel Container */}
              <div className="carousel-container">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} Screenshot ${
                    currentImageIndex + 1
                  }`}
                  className="carousel-image"
                />
                <div
                  className="carousel-arrow left-arrow"
                  onClick={() =>
                    setCurrentImageIndex(
                      (currentImageIndex - 1 + project.images.length) %
                        project.images.length
                    )
                  }
                >
                  &#8249;
                </div>
                <div
                  className="carousel-arrow right-arrow"
                  onClick={() =>
                    setCurrentImageIndex(
                      (currentImageIndex + 1) % project.images.length
                    )
                  }
                >
                  &#8250;
                </div>
              </div>
              {/* UPDATED: Project Info */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                {project.description}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="synthwave-button"
                >
                  View Travel Log
                </a>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
          {index < projectList.length - 1 && (
            <hr className="project-separator" />
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
