import React from 'react'
import Terminal from '../components/Terminal';
import maPhoto from '../assets/me.jpg'

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
      <div className="flex w-full justify-center space-x-25">
        <div className="w-90 h-90 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mb-6 flex items-center justify-center">
            <img
              src={maPhoto}
              alt="My picture"
              className="w-80 h-80 rounded-full"
            />
        </div>
        <Terminal />
      </div>
    </div>
  );
}

export default About