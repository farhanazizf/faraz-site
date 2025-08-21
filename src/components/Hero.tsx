import React from "react";
import { ArrowDown, MapPin, Mail } from "lucide-react";
import { personalInfo } from "../data/resume";

const Hero: React.FC = () => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-primary-400 font-medium text-lg tracking-wide mb-4">
                  Welcome to my portfolio
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  Hi, I'm{" "}
                  <span className="text-gradient bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                </h1>
              </div>
              <h2 className="text-2xl md:text-4xl text-dark-200 font-semibold mb-8">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-dark-300 max-w-2xl leading-relaxed">
                Passionate software engineer with 5+ years of experience
                building scalable web applications and leading technical teams.
                Specialized in React, TypeScript, and cloud technologies.
                Currently leading B2B commerce platform development at Diamond
                Food Indonesia, processing over IDR 1 billion in daily
                transactions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50">
              <h3 className="text-lg font-semibold text-dark-200 mb-6">
                Quick Contact
              </h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-4 text-dark-300 hover:text-primary-400 transition-colors duration-200">
                  <div className="p-2 bg-primary-500/10 rounded-lg">
                    <MapPin size={18} className="text-primary-400" />
                  </div>
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                <a 
                  href="https://wa.me/6285776841027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-dark-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2 bg-primary-500/10 rounded-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </div>
                  <span className="font-medium">{personalInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 text-dark-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-2 bg-primary-500/10 rounded-lg">
                    <Mail size={18} className="text-primary-400" />
                  </div>
                  <span className="font-medium">{personalInfo.email}</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={handleScrollToPortfolio}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 flex items-center justify-center"
              >
                View My Work
                <ArrowDown
                  size={20}
                  className="ml-3 group-hover:translate-y-1 transition-transform duration-200"
                />
              </button>
              <button
                onClick={handleScrollToContact}
                className="bg-dark-800 hover:bg-dark-700 text-dark-200 px-8 py-4 rounded-xl font-semibold text-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center group">
                <div className="bg-dark-800/50 rounded-2xl p-6 lg:p-8 border border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-sm text-dark-400 mt-3 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-sm text-dark-400 mt-2 font-medium">
                    Projects Completed
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    8
                  </div>
                  <div className="text-sm text-dark-400 mt-2 font-medium">
                    Companies Worked
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative w-96 h-96 mx-auto">
              {/* Main Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl flex items-center justify-center shadow-2xl border border-primary-400/20 overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Initials */}
                <span className="text-7xl font-bold text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-20 animate-pulse blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full opacity-30 animate-pulse delay-1000 blur-sm"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary-400 rounded-full opacity-60 animate-bounce"></div>

              {/* Tech stack floating badges */}
              <div className="absolute top-1/4 -left-12 bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-primary-500/30 animate-float hover:border-primary-400 transition-colors duration-300">
                <span className="text-primary-400">⚛️</span> React
              </div>
              <div className="absolute top-1/2 -right-16 bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-primary-500/30 animate-bounce delay-500 hover:border-primary-400 transition-colors duration-300">
                <span className="text-primary-400">📘</span> TypeScript
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-primary-500/30 animate-pulse delay-1000 hover:border-primary-400 transition-colors duration-300">
                <span className="text-primary-400">🟢</span> Node.js
              </div>
              <div className="absolute top-3/4 right-4 bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-primary-500/30 animate-float delay-700 hover:border-primary-400 transition-colors duration-300">
                <span className="text-primary-400">☁️</span> AWS
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-dark-400 text-sm font-medium">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center bg-dark-800/30 backdrop-blur-sm">
              <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
