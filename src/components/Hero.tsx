import React from 'react';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Romeo <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl">
          I'm a passionate fullstack software engineer with 5 years of experience. I've crafted intricate, interactive web applications, robust management systems, and innovative software solutions over the past three years. Through my work, I've had the privilege of collaborating with businesses worldwide, aiding them in enhancing productivity by creating websites, web applications, and software solutions.
          </p>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2" />
              <span>Accra, Ghana</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail size={18} className="mr-2" />
              <span>Available for new projects</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/romeoagyemang" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/romeo-agyemang-0a1621202/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src="" 
              alt="Romeo's profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;