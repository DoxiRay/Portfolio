import React from "react";
import maPhoto from "../assets/me.jpg";
import CodeFile from "../components/CodeFile";

function About() {
  return (
    <div id="about" className="min-h-screen px-4 pt-20">
      {/* Titre */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
        {/* Photo */}
        <div className="rounded-3xl overflow-hidden bg-white">
          <div className="flex-shrink-0 w-110 h-110 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mb-6 md:mb-0 flex items-center justify-center">
            <img
              src={maPhoto}
              alt="My picture"
              className="w-102 h-102  rounded-full object-cover"
            />
          </div>
        </div>

        {/* CodeFile */}
        {/* CodeFile */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden bg-white">
            <CodeFile className="w-full h-80 md:h-96" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
