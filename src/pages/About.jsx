import React from "react";
import maPhoto from "../assets/me.jpg";
import CodeFile from "../components/CodeFile";

function About() {
  return (
    <div id="about" className="min-h-screen px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
        <div
          className="flex-shrink-0 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full 
                        flex items-center justify-center
                        w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          <img
            src={maPhoto}
            alt="My picture"
            className="rounded-full object-cover 
                       w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-88 lg:h-88"
          />
        </div>

        {/* CodeFile */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden bg-white">
            <CodeFile className="w-full h-80 md:h-96 lg:h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
