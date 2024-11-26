import React, { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa"; // Import the FaGithub icon from react-icons

// Import the images for the carousel
import travelLogMap from "../assets/travel-log-map.png";
import travelLogView from "../assets/travel-log-view.png";
import travelLog from "../assets/travel-log.png";

// NEW: Import the PureHealth image
import pureHealthImage from "../assets/pure-health.png"; // NEW

function Projects() {
  // State for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images array for the carousel
  const travelLogImages = [travelLogMap, travelLog, travelLogView];

  // Updated project list
  const projectList = [
    {
      title: "Movies Watchlist",
      description: (
        <div className="project-description">
          <p>
            The Watchlist Movies app is a user-friendly tool for tracking
            favorite films, planning future viewings, and discovering new movies.
          </p>
          <br />
          <p>
            By providing detailed information and streaming availability through
            the TMDb API, it ensures users always know where to watch.
          </p>
        </div>
      ),
      video: "https://www.youtube.com/embed/placeholder_link", // YouTube video link
      githubLink: "https://github.com/alcytorres/watchlist-movies-api",
      sideBySide: true,
    },
    {
      title: "Travel Log",
      description: (
        <div className="project-description">
          <p>
            A personalized app that lets me track past
            adventures and plan future bucket list trips, creating a
            visual collection of my journeys.
          </p>
          <br />
          <p>
            It’s a simple yet inspiring tool to celebrate memories, reflect on
            experiences, and stay excited for what’s next in my travels.
          </p>
        </div>
      ),
      carousel: true,
      images: travelLogImages,
      githubLink: "https://github.com/alcytorres/travel-log-backend.git",
    },
    {
      title: "PureHealth (Launching in 2025)",
      description: (
        <div className="project-description">
          <p>
            PureHealth is going to be a centralized app that aggregates and syncs all your health and fitness data from various apps like Health, Strava, Nike Run Club, and more into one seamless platform.
          </p>
          <br />
          <p>
            It will empower users to monitor their wellness journey holistically, offering actionable insights and personalized trends in an intuitive interface.
          </p>
        </div>
      ),
      image: pureHealthImage,
      carousel: false,
      singleImage: true,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">
        Projects
        <div className="projects-header-line"></div>
      </h2>
      <div className="projects-content">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              project.title === "Movies Watchlist"
                ? "movies-watchlist-card"
                : project.title === "Travel Log"
                ? "travel-log-card"
                : project.title === "PureHealth (Launching in 2025)"
                ? "purehealth-card"
                : ""
            }`}
          >
            {project.sideBySide ? (
              <div className="carousel-and-info">
                <div className="video-container movies-watchlist-video">
                  <iframe
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allowFullScreen
                    className="video-placeholder"
                  ></iframe>
                </div>
                <div className="project-info movies-watchlist-info">
                  <h3 className="project-title">{project.title}</h3>
                  {project.description}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="synthwave-button"
                  >
                    View Movies Watchlist
                  </a>
                </div>
              </div>
            ) : project.carousel ? (
              <div className="carousel-and-info">
                <div className="carousel-container travel-log-carousel">
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
                <div className="project-info travel-log-info">
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
            ) : project.singleImage ? (
              <div className="carousel-and-info">
                <div className="carousel-container purehealth-carousel">
                  <img
                    src={project.image}
                    alt={`${project.title}`}
                    className="carousel-image"
                  />
                </div>
                <div className="project-info purehealth-info">
                  <h3 className="project-title">{project.title}</h3>
                  {project.description}
                </div>
              </div>
            ) : (
              <>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </>
            )}
            {index < projectList.length - 1 && (
              <hr className="project-separator" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
