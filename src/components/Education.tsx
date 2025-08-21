import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { education } from "../data/resume";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span> & Learning
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            My academic journey in computer science and information systems,
            building the foundation for my technical expertise.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="card hover:border-primary-500/30 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <GraduationCap size={24} className="text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors duration-200 mb-1">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">
                    {edu.institution}
                  </h4>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-dark-400">
                  <Calendar size={16} />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-dark-400">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-2 text-dark-400">
                    <Award size={16} />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>

              {/* Achievement Badge */}
              {edu.gpa && parseFloat(edu.gpa) > 3.4 && (
                <div className="mt-4 inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
                  <Award size={14} />
                  High Achievement
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills & Certifications */}
        <div className="mt-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h3>
            <p className="text-dark-400">
              Core competencies developed through education and professional
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="card">
              <h4 className="text-lg font-semibold text-primary-400 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Frontend Development
              </h4>
              <div className="space-y-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Vue.js",
                  "Tailwind CSS",
                  "HTML/CSS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-dark-300">{skill}</span>
                    {/* <div className="w-20 bg-dark-800 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="card">
              <h4 className="text-lg font-semibold text-primary-400 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Backend Development
              </h4>
              <div className="space-y-2">
                {[
                  "Node.js",
                  "JavaScript",
                  "REST API",
                  "Firebase",
                  "Laravel",
                  "Go",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-dark-300">{skill}</span>
                    {/* <div className="w-20 bg-dark-800 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="card">
              <h4 className="text-lg font-semibold text-primary-400 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Tools & Cloud
              </h4>
              <div className="space-y-2">
                {["AWS", "GCP", "Git", "CI/CD", "Docker", "IoT"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between"
                    >
                      <span className="text-dark-300">{skill}</span>
                      {/* <div className="w-20 bg-dark-800 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div> */}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Continuous <span className="text-gradient">Learning</span>
            </h3>
            <p className="text-dark-400 leading-relaxed">
              Technology evolves rapidly, and I believe in staying current with
              the latest trends and best practices. My educational background in
              both Computer Engineering and Information Systems provides me with
              a solid foundation in both technical implementation and system
              design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
