import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cvUrl = '/assets/pdf/Beka_Gudeta_CV.pdf';

  const navItems = [
    { name: 'Home', icon: <FaHome />, to: 'home' },
    { name: 'About', icon: <FaUser />, to: 'about' },
    { name: 'Skills', icon: <FaCode />, to: 'skills' },
    { name: 'Projects', icon: <FaProjectDiagram />, to: 'projects' },
    { name: 'Contact', icon: <FaEnvelope />, to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full glass z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Place your logo.png here */}
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/images/logo.png" 
              alt="Beka Gudeta Logo" 
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold gradient-text">Beka Gudeta</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href={cvUrl}
              download
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaFilePdf />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 py-3 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href={cvUrl}
              download
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg mt-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaFilePdf />
              <span>Download CV</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;