import React from 'react';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiPhp, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus />, level: 85, color: "blue" },
        { name: "Java", icon: <FaJava />, level: 90, color: "red" },
        { name: "Python", icon: <FaPython />, level: 80, color: "yellow" },
        { name: "C", icon: <SiCplusplus />, level: 75, color: "blue" },
        { name: "JavaScript", icon: <FaJs />, level: 95, color: "yellow" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: <FaReact />, level: 90, color: "cyan" },
        { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "green" },
        { name: "Express", icon: <SiExpress />, level: 85, color: "gray" },
        { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "green" },
        { name: "HTML/CSS", icon: <FaJs />, level: 95, color: "orange" },
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "blue" },
        { name: "Bootstrap", icon: <SiBootstrap />, level: 85, color: "purple" },
        { name: "PHP", icon: <SiPhp />, level: 70, color: "purple" },
        { name: "SQL/Derby", icon: <FaDatabase />, level: 85, color: "blue" },
        { name: "Machine Learning", icon: <FaPython />, level: 75, color: "pink" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I've developed proficiency in various programming languages, frameworks, 
            and tools through academic studies and personal projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-6 rounded-2xl hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`text-${skill.color}-400`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;