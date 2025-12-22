import React from 'react';
import { FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <FaGraduationCap className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Education</p>
                    <p className="font-medium">Software Engineering Student</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <FaUniversity className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">University</p>
                    <p className="font-medium">Jimma University</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <FaLaptopCode className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Specialization</p>
                    <p className="font-medium">Full Stack Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Software Developer</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a dedicated Software Engineering student at Jimma University with a strong 
              passion for creating innovative digital solutions. My journey in programming 
              has equipped me with diverse skills across multiple technologies and frameworks.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, efficient code and building applications that solve 
              real-world problems. My projects focus on improving efficiency, accessibility, 
              and user experience in various domains.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-4 rounded-xl">
                <h4 className="font-semibold text-lg">Mission</h4>
                <p className="text-sm text-gray-400">
                  Build solutions that make life easier and more efficient
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-transparent p-4 rounded-xl">
                <h4 className="font-semibold text-lg">Vision</h4>
                <p className="text-sm text-gray-400">
                  Become a leading software engineer in Ethiopia's tech ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;