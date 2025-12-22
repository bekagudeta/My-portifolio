import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaBook, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Birth Registration System",
      description: "Digital birth certificate system for Ifa Bula Kebele linking hospitals, kebele offices, and administration to reduce processing time.",
      features: [
        "Digital birth certificates",
        "Multi-role access (Hospital, Kebele, Admin)",
        "Real-time certificate generation",
        "Secure data management"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/assets/images/projects/birth-registration.png", // Place your project image here
      github: "#",
      live: "#"
    },
    {
      title: "Library Management System",
      description: "Complete library system for managing books, borrowing, returns, and inventory with automated notifications.",
      features: [
        "Book inventory management",
        "Borrowing/Return system",
        "Automated due date alerts",
        "Author/ISBN tracking"
      ],
      technologies: ["Java", "MySQL", "JavaFX", "Derby"],
      image: "/assets/images/projects/library-system.png", // Place your project image here
      github: "#",
      live: "#"
    },
    {
      title: "Tourist Reservation System",
      description: "Platform for tourist information, location-based services, and reservation management for Ethiopian tourism.",
      features: [
        "Tourist location mapping",
        "Accommodation booking",
        "Tour guide services",
        "Multi-language support"
      ],
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Google Maps API"],
      image: "/assets/images/projects/tourist-reservation.png", // Place your project image here
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my significant projects that demonstrate my skills 
            and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    {project.technologies[0]}
                  </span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">
                    {project.technologies[1]}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {index === 0 && <FaUsers className="text-blue-400" />}
                  {index === 1 && <FaBook className="text-green-400" />}
                  {index === 2 && <FaGlobe className="text-orange-400" />}
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;