import React from "react";

function Experiences() {
const experiences = [
  {
    position: "Web Development Apprentice",
    company: "Cap's Digit",
    period: "November 2024 - April 2025",
    description:
      "Developed web applications using Symfony and React, integrated APIs, and managed databases.",
  },
  {
    position: "Web Development Intern",
    company: "École ESTI",
    period: "September 2023 - March 2024",
    description:
      "Built a website with React.js and explored graphic design basics using Figma.",
  },
  {
    position: "Discovery Internship",
    company: "Etech",
    period: "July 18, 2022 - July 21, 2022",
    description:
      "Introduction to web development during a 3-day immersion program.",
  },
];


  return (
    <div id="experiences" className="min-h-screen px-4 pt-20 bg-pink-50">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Expériences
          </span>
        </h2>

        <div className="relative border-l-4 border-pink-400 ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              {/* Point */}
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 border-4 border-pink-100 shadow-lg"></span>

              {/* Carte expérience */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {exp.position}
                </h3>
                <p className="text-pink-500 font-medium">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
