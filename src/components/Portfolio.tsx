import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { portfolios } from "../data/resume";

interface CarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg flex items-center justify-center">
        <span className="text-dark-500 text-sm">No images available</span>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="aspect-video bg-dark-800 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${title} - Screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        {/* Fallback placeholder */}
        <div
          className="w-full h-full bg-gradient-to-br from-primary-600/20 to-primary-800/20 flex items-center justify-center absolute inset-0"
          style={{ display: "none" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">
              {title
                .split(" ")
                .map((word) => word.charAt(0))
                .join("")}
            </div>
            <div className="text-sm text-dark-400">
              Project Screenshot {currentIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-primary-400" : "bg-dark-600"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredPortfolios =
    filter === "featured" ? portfolios.filter((p) => p.featured) : portfolios;

  return (
    <section
      id="portfolio"
      className="section-spacing relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary-400/3 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10 flex flex-col gap-7">
        {/* Section Header */}
        <div className="text-center mb-section animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 font-medium text-sm tracking-wide">
              MY WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold title-spacing">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="mb-section">
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent projects, from large-scale B2B platforms
              to government systems. Each project demonstrates my expertise in
              modern web technologies and problem-solving skills.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border ${
                filter === "all"
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/20"
                  : "bg-dark-800/50 text-dark-300 hover:bg-dark-700/50 border-dark-700/50 hover:border-primary-500/30"
              }`}
            >
              All Projects ({portfolios.length})
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 border ${
                filter === "featured"
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/20"
                  : "bg-dark-800/50 text-dark-300 hover:bg-dark-700/50 border-dark-700/50 hover:border-primary-500/30"
              }`}
            >
              <Star size={18} />
              Featured ({portfolios.filter((p) => p.featured).length})
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 content-spacing">
          {filteredPortfolios.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-6 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 group animate-slide-up hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Carousel */}
              <div className="mb-8">
                <ImageCarousel images={project.images} title={project.title} />
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 p-2 rounded-xl border border-primary-500/30">
                      <Star
                        size={18}
                        className="text-primary-400 fill-current"
                      />
                    </div>
                  )}
                </div>

                <p className="text-lg text-dark-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-bold text-dark-200 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-dark-700/50 text-dark-200 px-4 py-2 rounded-xl text-sm font-medium border border-dark-600/50 hover:bg-primary-500/20 hover:text-primary-300 hover:border-primary-500/30 transition-all duration-200 hover:transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:transform hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.github ? (
                    <button className="flex items-center gap-2 bg-dark-700/50 hover:bg-dark-600/50 text-dark-200 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border border-dark-600/50 hover:border-primary-500/30 hover:text-primary-300">
                      <Github size={18} />
                      Code
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}

          {/* And Many Others Card */}
          <div className="bg-dark-800/20 backdrop-blur-sm rounded-3xl p-6 border border-dark-700/30 border-dashed transition-all duration-300 group animate-slide-up flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="text-6xl text-dark-600 mb-4">⋯</div>
              <h3 className="text-2xl font-bold text-dark-400 group-hover:text-dark-300 transition-colors duration-200">
                And Many Others
              </h3>
              <p className="text-lg text-dark-500 leading-relaxed max-w-xs">
                This portfolio showcases selected highlights. Explore my GitHub
                to discover more projects, open-source contributions, and
                experimental work across various technologies.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    window.open("https://github.com/farhanazizf", "_blank");
                  }}
                  className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200 underline decoration-primary-400/30 hover:decoration-primary-300/50"
                >
                  Explore more projects on GitHub →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-section animate-fade-in">
          <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-16 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-400/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold title-spacing">
                Interested in{" "}
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                  Working Together?
                </span>
              </h3>
              <div className="mb-section">
                <p className="text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
                  I'm always open to discussing new opportunities and exciting
                  projects. Let's create something amazing together!
                </p>
              </div>
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
