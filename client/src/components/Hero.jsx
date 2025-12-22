import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text">Beka Gudeta</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300">
                <TypeAnimation
                  sequence={[
                    'Software Engineering Student',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Specialist',
                    2000,
                    'Passionate Programmer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              
              <p className="text-gray-400 text-lg">
                Jimma University | Building Digital Solutions that Make a Difference
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/bekagudeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://t.me/beekaaguddataa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaTelegram size={24} />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              
              <div className="pt-8">
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Profile Photo - Place your beka-profile.jpg here */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
                <img
                  src="/assets/images/beka-profile.png"
                  alt="Beka Gudeta"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow border-t-blue-500 border-r-purple-500"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg animate-bounce">
                <span className="text-sm font-semibold">MERN Stack</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-lg animate-bounce delay-1000">
                <span className="text-sm font-semibold">Software Eng.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;