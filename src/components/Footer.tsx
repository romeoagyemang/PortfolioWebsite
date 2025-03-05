import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            © {new Date().getFullYear()} Sagar Shah. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;