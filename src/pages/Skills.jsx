import React from "react";
import Terminal from "../components/Terminal";
import astronaute from "../assets/astronaute.png";
import star from "../assets/star.png";
import cvFile from "../assets/CV.pdf";
import "../styles/skills.css";

function Skills() {
  return (
    <div id="about" className="min-h-screen px-4 pt-20">
      {/* Titre */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
      </div>

      {/* Contenu */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden bg-white">
            <Terminal className="w-full max-w-full" />
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-6 w-full md:w-1/2 lg:w-2/5">
          <a
            href={cvFile}
            download
            aria-label="Download CV"
            className="flex flex-col items-center bg-pink-500 hover:bg-pink-600 
                       text-white font-semibold rounded-lg px-4 sm:px-6 py-3 sm:py-4 
                       cursor-pointer shadow-md transition transform hover:scale-105 animate-pulse 
                       w-full max-w-[200px]"
            title="Download CV"
          >
            <img
              src={star}
              alt="Star"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2"
            />
            <span className="text-sm sm:text-base md:text-lg">Download CV</span>
          </a>

          <img
            src={astronaute}
            alt="Astronaute"
            className="bounceCustom w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
