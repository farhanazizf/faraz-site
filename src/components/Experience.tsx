import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/resume';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary-400/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary-400/3 rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-section animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 font-medium text-sm tracking-wide">PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold title-spacing">
            Professional <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="mb-section">
            <p className="text-xl text-dark-400 max-w-3xl mx-auto leading-relaxed">
              A journey through my career, building scalable solutions and leading technical teams across various industries and technologies.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative content-spacing">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 rounded-full shadow-lg shadow-primary-500/20"></div>

          {/* Experience items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-4 border-dark-900 z-10 shadow-lg shadow-primary-500/30">
                  <div className="absolute inset-1 bg-primary-500 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-10 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors duration-200">
                          {exp.position}
                        </h3>
                        {exp.endDate === 'now' && (
                          <span className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-400 px-4 py-2 rounded-xl text-sm font-semibold border border-primary-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-bold text-primary-400 mb-4">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-dark-700/30 px-3 py-2 rounded-lg">
                          <Calendar size={16} className="text-primary-400" />
                          <span className="text-dark-200 font-medium">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-dark-700/30 px-3 py-2 rounded-lg">
                          <MapPin size={16} className="text-primary-400" />
                          <span className="text-dark-200 font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-section">
                      <p className="text-lg text-dark-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-section">
                      <h5 className="text-lg font-bold text-dark-200 mb-6 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        Key Achievements
                      </h5>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-base text-dark-300 flex items-start gap-3 p-3 bg-dark-700/20 rounded-xl hover:bg-dark-700/30 transition-colors duration-200">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h5 className="text-lg font-bold text-dark-200 mb-6 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-4">
                        {exp.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-dark-700/50 text-dark-200 px-4 py-2 rounded-xl text-sm font-medium border border-dark-600/50 hover:bg-primary-500/20 hover:text-primary-300 hover:border-primary-500/30 transition-all duration-200 hover:transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 pt-16 border-t border-dark-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">5+</div>
                <div className="text-lg text-dark-300 font-medium">Years Experience</div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className="text-center animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">20+</div>
                <div className="text-lg text-dark-300 font-medium">Projects Completed</div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className="text-center animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">8</div>
                <div className="text-lg text-dark-300 font-medium">Companies Served</div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;