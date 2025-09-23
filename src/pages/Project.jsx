import React from "react";
import portfolio from "../assets/portfolio.png";
import ecommerce from "../assets/ecommerce.png";
import everyday from "../assets/myeveryday.png";
import buble from "../assets/buble.jpeg";

export default function Project() {
  const projects = [
    {
      title: "Bio-Bazar",
      description:
        "An e-commerce website for organic products with secure payments and modern UI.",
      image: ecommerce,
      technologies: ["React", "Firebase", "TailwindCSS", "Stripe"],
    },
    {
      title: "My Portfolio",
      description:
        "A personal portfolio website to showcase my projects, skills, and experiences.",
      image: portfolio,
      technologies: ["React", "TailwindCSS"],
    },
    {
      title: "Fruitea",
      description:
        "A mobile application for ordering customizable bubble tea with different toppings and online payments.",
      image: buble,
      technologies: ["React Native", "Firebase", "Expo", "Stripe"],
    },
    {
      title: "Myeveryday",
      description:
        "A mobile productivity app featuring a to-do list, Pomodoro timer, and weather tracking to help users stay organized and focused.",
      image: everyday,
      technologies: ["Flutter"],
    },
  ];


  return (
    <div id="projects" className="min-h-screen px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            🌸 My Projects
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-1 bg-white"
            >
              {/* Contenu de la carte */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-600 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-pink-200 to-purple-200 text-pink-800 font-medium shadow-md hover:shadow-pink-300 transition"
                    >
                      ✨ {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
