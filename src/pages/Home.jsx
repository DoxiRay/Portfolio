import React from 'react'
import {
  Heart,
} from "lucide-react";

function Home() {
  return (
      <div id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Hello, I'm Eudoxie RASAMIMANANA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Student in computer science with a creative mind
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-pink-300 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home