import React, { useState, useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

// Import the images for the carousel
import travelLogMap from "../assets/travel-log-map.png";
import travelLogView from "../assets/travel-log-view.png";
import travelLog from "../assets/travel-log.png";

// Import the image for PureHealth
import pureHealth1 from "../assets/purehealth1.png";

// Import the image for Andean Farm Simulator
import andeanFarm1 from "../assets/andean-farm-1.png";

// Import the image for Movies Watchlist
import movies1 from "../assets/movies1.png";

// Import the image for Financial Sentiment Analyzer
import financialSentiment1 from "../assets/financial-sentiment1.png";

function Projects() {
  // Initialize carousel indices for projects with carousels
  const [carouselIndices, setCarouselIndices] = useState({});

  // Images array for the Travel Log carousel
  const travelLogImages = [travelLogView, travelLog, travelLogMap];

  // Image for Andean Farm Simulator
  const andeanFarmImages = [andeanFarm1];

  // Image for Movies Watchlist
  const moviesImages = [movies1];

  // Image for Financial Sentiment Analyzer
  const sentimentImages = [financialSentiment1];

  // Image for PureHealth
  const pureHealthImages = [pureHealth1];

  // Updated project list:
  const projectList = [
    {
      title: "Andean Farm Simulator",
      description: (
        <div className="project-description">
          <p>
            A profit simulator for my family’s mixed dairy and broccoli farm in the Ecuadorian highlands. After a land sale left fewer acres, it helps compare how to allocate what’s left under real weather and price risk.
          </p>
          <br />
          <p>
            You can adjust land, herd, prices, and weather assumptions, see base/bull/bear outcomes update live, save and compare scenarios with charts, and get a recommended allocation.{" "}
            <a
              href="https://docs.google.com/document/d/1yGW4azk0sb6uLwir5yvu0JsYctBFCGi41uoaaLFxz_M/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="andean-farm-doc-link"
            >
              Read more about the project here
            </a>
            .
          </p>
        </div>
      ),
      carousel: true,
      images: andeanFarmImages,
      githubLink: "https://github.com/alcytorres/andean_farm_simulator",
    },
    {
      title: "Movies Watchlist",
      description: (
        <div className="project-description">
          <p>
            A full-stack movie app where you can search films, see where to stream them, and build a personal watchlist and favorites list.
          </p>
          <br />
          <p>
            It uses TMDb for movie and streaming data, and OpenAI to recommend similar films from your favorites with short explanations for why they fit.
          </p>
        </div>
      ),
      carousel: true, // Use carousel
      images: moviesImages,
      githubLink: "https://github.com/alcytorres/watchlist-movies-api",
    },
    {
      title: "Financial Sentiment Analyzer",
      description: (
        <div className="project-description">
          <p>
            A local RAG app for financial text. Paste an article, earnings call, or research note, ask a question, and get the exact passages that answer it, complete with citations and match scores.
          </p>
          <br />
          <p>
            FinBERT then scores each passage as bullish, bearish, or neutral. Everything runs on your machine, so no external AI APIs or keys are required.
          </p>
        </div>
      ),
      carousel: true,
      images: sentimentImages,
      githubLink: "https://github.com/alcytorres/sentiment_analysis",
    },
    {
      title: "Travel Log",
      description: (
        <div className="project-description">
          <p>
            A personal app for tracking places I’ve been and places I want to go. Trips show up as pins on an interactive map, and I can click a pin to view details, edit them, or add new ones.
          </p>
          <br />
          <p>
            Blue pins mark past trips; red pins mark bucket-list destinations. Built with a Rails API and a React frontend using Leaflet maps.
          </p>
        </div>
      ),
      carousel: true,
      images: travelLogImages,
      githubLink: "https://github.com/alcytorres/travel-log-backend.git",
    },
    {
      title: "PureHealth",
      description: (
        <div className="project-description">
          <p>
            A personal health dashboard that charts steps, sleep, hydration, and calories from local CSV data, with a calendar view, date-range charts, and basic stats like averages and goal streaks.
          </p>
          <br />
          <p>
            On the Steps view, a simple linear regression model estimates average steps for the prior, current, and next week and tracks prediction error as more data is added.
          </p>
        </div>
      ),
      carousel: true,
      images: pureHealthImages,
      githubLink: "https://github.com/alcytorres/pure_health",
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
      {/* Wrap heading in a container */}
      <div className="projects-heading-container">
        <h2 className="projects-heading">
          Projects
          <div className="projects-header-line"></div>
        </h2>
      </div>
      <div className="projects-content">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              project.title === "Andean Farm Simulator"
                ? "andean-farm-card"
                : project.title === "Movies Watchlist"
                ? "movies-watchlist-card"
                : project.title === "Financial Sentiment Analyzer"
                ? "financial-sentiment-analyzer-card"
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
                    project.title === "Andean Farm Simulator"
                      ? "andean-farm-carousel"
                      : project.title === "Movies Watchlist"
                      ? "movies-watchlist-carousel"
                      : project.title === "Financial Sentiment Analyzer"
                      ? "financial-sentiment-analyzer-carousel"
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
                  {project.images.length > 1 && (
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
                  )}

                </div>
                {/* Project Info */}
                <div className="project-content-container">
                  <div
                    className={`project-info ${
                      project.title === "Andean Farm Simulator"
                        ? "andean-farm-info"
                        : project.title === "Movies Watchlist"
                        ? "movies-watchlist-info"
                        : project.title === "Financial Sentiment Analyzer"
                        ? "financial-sentiment-analyzer-info"
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
