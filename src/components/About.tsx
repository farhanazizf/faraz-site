import React from "react";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";
import { personalInfo, skills } from "../data/resume";

const About: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: skills.frontend,
      color: "text-blue-400",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: skills.backend,
      color: "text-green-400",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: skills.mobile,
      color: "text-purple-400",
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: skills.database,
      color: "text-orange-400",
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Building scalable web and mobile applications",
    },
    {
      icon: Zap,
      title: "Full Stack Expertise",
      description: "From frontend UI to backend architecture",
    },
    {
      icon: Globe,
      title: "Modern Technologies",
      description: "Always learning and adapting to new tech",
    },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary-400/3 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10 flex flex-col gap-7">
        {/* Section Header */}
        <div className="text-center mb-section animate-fade-in mb-7">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 font-medium text-sm tracking-wide">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold title-spacing">
            About{" "}
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web
            technologies and a strong focus on creating exceptional user
            experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start content-spacing">
          {/* Personal Info & Story */}
          <div className="mb-section animate-slide-up">
            <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-500/10 rounded-xl">
                  <Code size={24} className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-dark-100">My Journey</h3>
              </div>
              <div className="space-y-6 text-dark-300 leading-relaxed">
                <p className="text-lg">
                  I'm a dedicated Full Stack Developer with over 5 years of
                  experience in building robust web applications and mobile
                  solutions. My journey started with a passion for
                  problem-solving and has evolved into expertise across the
                  entire development stack.
                </p>
                <p className="text-lg">
                  I specialize in React, TypeScript, Node.js, and modern
                  development practices. I'm particularly passionate about
                  creating clean, maintainable code and delivering exceptional
                  user experiences.
                </p>
                <p className="text-lg">
                  I'm a sports enthusiast and former athlete who brings the same
                  discipline and competitive spirit from the field to my code.
                  Whether it's basketball, football, or exploring new sports, I
                  thrive on challenges and teamwork. I proudly call myself an
                  <span className="font-semibold text-primary-400">
                    {" "}
                    engineer-athlete
                  </span>{" "}
                  — combining technical excellence with athletic mindset.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-8 mb-section mt-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-6 p-8 rounded-2xl bg-dark-800/30 hover:bg-dark-800/50 border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 mb-6"
                  >
                    <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-4 rounded-xl group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all duration-300">
                      <Icon size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-100 mb-2 text-lg">
                        {highlight.title}
                      </h4>
                      <p className="text-dark-300 text-base leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div
            className="mb-section animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary-500/10 rounded-xl">
                  <Zap size={24} className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-dark-100">
                  Technical Skills
                </h3>
              </div>

              <div className="mb-section">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="space-y-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-dark-700/50 rounded-lg">
                          <Icon size={20} className={category.color} />
                        </div>
                        <h4 className="font-bold text-dark-100 text-lg">
                          {category.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map(
                          (skill: string, skillIndex: number) => (
                            <span
                              key={skillIndex}
                              className="px-4 py-2 bg-dark-700/50 text-dark-200 rounded-xl text-sm font-medium hover:bg-primary-500/20 hover:text-primary-300 hover:border-primary-500/30 border border-dark-600/50 transition-all duration-200 hover:transform hover:scale-105"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-dark-800/40 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-500/10 rounded-xl">
                  <Globe size={24} className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-dark-100">
                  Quick Facts
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center p-5 bg-dark-700/30 rounded-xl">
                  <span className="text-dark-300 font-medium">Location:</span>
                  <span className="text-dark-100 font-semibold">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-700/30 rounded-xl">
                  <span className="text-dark-300 font-medium">Experience:</span>
                  <span className="text-dark-100 font-semibold">5+ Years</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-700/30 rounded-xl">
                  <span className="text-dark-300 font-medium">
                    Availability:
                  </span>
                  <span className="text-green-400 flex items-center gap-3 font-semibold">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    Available
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-700/30 rounded-xl">
                  <span className="text-dark-300 font-medium">Languages:</span>
                  <span className="text-dark-100 font-semibold">
                    English, Indonesian
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
