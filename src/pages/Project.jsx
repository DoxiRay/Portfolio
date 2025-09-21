import React from "react";
import astronaute from "../assets/astronaute.png";

export default function Project() {
  const projects = [
    {
      title: "Book'Tiako",
      description:
        "📚 A digital library that promotes Malagasy books and culture.",
      image: astronaute,
      technologies: ["React", "Symfony", "TailwindCSS"],
    },
    {
      title: "Art Market",
      description:
        "🎨 A mobile app for selling and discovering Malagasy handmade art.",
      image: astronaute,
      technologies: ["React Native", "Firebase", "Expo"],
    },
    {
      title: "Recipe Hub",
      description:
        "🍰 A web app to explore and share cooking recipes with friends.",
      image: astronaute,
      technologies: ["Vue.js", "Node.js", "MongoDB"],
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
