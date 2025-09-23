  import React from "react";
  import Terminal from "../components/Terminal";
  import astronaute from "../assets/astronaute.png";
  import star from "../assets/star.png"
  import cvFile from "../assets/CV.pdf"
  import "../styles/skills.css";

  function Skills() {
    return (
      <div id="about" className="min-h-screen px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
          <Terminal className="w-full md:w-auto" />

          {/* Colonne avec bouton au-dessus de l'image */}
          <div className="relative inline-block flex flex-col items-center gap-6">
            {/* Bouton ou étoile cliquable */}
            <a
              href={cvFile}
              download
              aria-label="Download CV"
              className="inline-flex flex-col items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-6 py-4 cursor-pointer shadow-md transition transform hover:scale-105 animate-pulse"
              title="Download CV"
            >
              <img src={star} alt="Star" className="w-15 h-15 mb-2" />
              Download CV
            </a>

            {/* Image */}
            <img
              src={astronaute}
              alt="Astronaute"
              className="bounceCustom w-80 h-80"
            />
          </div>
        </div>
      </div>
    );
  }

  export default Skills;
