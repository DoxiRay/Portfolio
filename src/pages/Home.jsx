import React from "react";
import { Heart } from "lucide-react";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex flex-col items-center">
          {/* Cercle + Heart parfaitement centré */}
          <div className="relative w-36 sm:w-44 md:w-52 lg:w-60 h-36 sm:h-44 md:h-52 lg:h-60 mb-6">
            {/* Cercle extérieur gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
              {/* Cercle intérieur blanc + Heart */}
              <div className="w-24 sm:w-32 md:w-36 lg:w-40 h-24 sm:h-32 md:h-36 lg:h-40 bg-white rounded-full flex items-center justify-center mx-auto my-auto">
                <Heart className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 text-pink-400" />
              </div>
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Hello, I'm Eudoxie RASAMIMANANA
            </span>
          </h1>

          {/* Paragraphe */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Student in computer science with a creative mind
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-medium text-sm sm:text-base md:text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-pink-300 text-pink-600 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-pink-50 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
