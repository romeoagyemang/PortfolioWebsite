import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            © {new Date().getFullYear()} Romeo Agyemang Asiamah. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/romeoagyemang" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/romeo-agyemang-0a1621202/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:agyemangromeo74@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Designed and built by Romeo Agyemang Asiamah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;