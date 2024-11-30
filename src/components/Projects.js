import React, { useState, useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

// Import the images for the carousel
import travelLogMap from "../assets/travel-log-map.png";
import travelLogView from "../assets/travel-log-view.png";
import travelLog from "../assets/travel-log.png";

// Import the PureHealth image
import pureHealthImage from "../assets/pure-health.png";

// Import the images for the Movies Watchlist carousel
import movies1 from "../assets/movies1.png";
import movies2 from "../assets/movies2.png";
import movies4 from "../assets/movies4.png";

function Projects() {
  // Initialize carousel indices for projects with carousels
  const [carouselIndices, setCarouselIndices] = useState({});

  // Images array for the Travel Log carousel
  const travelLogImages = [travelLogMap, travelLog, travelLogView];

  // Images array for the Movies Watchlist carousel
  const moviesImages = [movies1, movies2, movies4];

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
      carousel: true, // Use carousel
      images: moviesImages,
      githubLink: "https://github.com/alcytorres/watchlist-movies-api",
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
      title: "PureHealth",
      subTitle: " (Launching in 2025)", // Subtitle for PureHealth
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

  // Set initial carousel indices
  useEffect(() => {
    const initialIndices = {};
    projectList.forEach((project) => {
      if (project.carousel) {
        initialIndices[project.title] = 0;
      }
    });
    setCarouselIndices(initialIndices);
  }, []);

  return (
    <section id="projects" className="projects-section">
      {/* NEW: Wrap heading in a container */}
      <div className="projects-heading-container"> {/* NEW */}
        <h2 className="projects-heading">
          Projects
          <div className="projects-header-line"></div>
        </h2>
      </div> {/* NEW */}
      <div className="projects-content">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              project.title === "Movies Watchlist"
                ? "movies-watchlist-card"
                : project.title === "Travel Log"
                ? "travel-log-card"
                : project.title === "PureHealth"
                ? "purehealth-card"
                : ""
            }`}
          >
            {project.carousel ? (
              // Carousel project rendering
              <div className="carousel-and-info">
                {/* Carousel Container */}
                <div
                  className={`carousel-container ${
                    project.title === "Movies Watchlist"
                      ? "movies-watchlist-carousel"
                      : project.title === "Travel Log"
                      ? "travel-log-carousel"
                      : ""
                  }`}
                >
                  <img
                    src={
                      project.images[carouselIndices[project.title] || 0]
                    }
                    alt={`${project.title} Screenshot ${
                      (carouselIndices[project.title] || 0) + 1
                    }`}
                    className="carousel-image"
                  />
                  {/* Arrows inside the carousel-container, beneath the image */}
                  <div className="carousel-controls">
                    <button
                      className="carousel-arrow left-arrow"
                      onClick={() => {
                        const newIndex =
                          (carouselIndices[project.title] - 1 + project.images.length) %
                          project.images.length;
                        setCarouselIndices({
                          ...carouselIndices,
                          [project.title]: newIndex,
                        });
                      }}
                    >
                      &#8249;
                    </button>
                    <button
                      className="carousel-arrow right-arrow"
                      onClick={() => {
                        const newIndex =
                          (carouselIndices[project.title] + 1) % project.images.length;
                        setCarouselIndices({
                          ...carouselIndices,
                          [project.title]: newIndex,
                        });
                      }}
                    >
                      &#8250;
                    </button>
                  </div>
                </div>
                {/* Project Info */}
                {/* NEW: Wrap project info in a container */}
                <div className="project-content-container"> {/* NEW */}
                  <div
                    className={`project-info ${
                      project.title === "Movies Watchlist"
                        ? "movies-watchlist-info"
                        : project.title === "Travel Log"
                        ? "travel-log-info"
                        : ""
                    }`}
                  >
                    <h3 className="project-title">{project.title}</h3>
                    {project.description}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="synthwave-button"
                      >
                        {`View ${project.title}`}
                      </a>
                    )}
                  </div>
                </div> {/* NEW */}
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
                {/* NEW: Wrap project info in a container */}
                <div className="project-content-container"> {/* NEW */}
                  <div className="project-info purehealth-info">
                    <h3 className="project-title">
                      {project.title}
                      {project.subTitle && (
                        <span className="project-subtitle">{project.subTitle}</span>
                      )}
                    </h3>
                    {project.description}
                  </div>
                </div> {/* NEW */}
              </div>
            ) : (
              <>
                <h3 className="project-title">{project.title}</h3>
                {project.subTitle && (
                  <span className="project-subtitle">{project.subTitle}</span>
                )}
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
