import React from 'react';
import { FaHeart, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/images/logo.png" 
                alt="Beka Gudeta Logo" 
                className="h-8 w-8 rounded-full"
              />
              <span className="text-lg font-bold gradient-text">Beka Gudeta</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              <FaRegCopyright className="mr-1" />
              {currentYear} Beka Gudeta. Made with 
              <FaHeart className="mx-1 text-red-500 animate-pulse" />
              in Ethiopia
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Software Engineering Student | Jimma University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;